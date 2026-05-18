from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import html as html_escape
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('CONTACT_RECIPIENT', 'kingstenjones2@gmail.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ---------- Contact form ----------
class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(..., min_length=1, max_length=4000)


def _build_email_html(payload: ContactRequest) -> str:
    name = html_escape.escape(payload.name)
    email = html_escape.escape(payload.email)
    company = html_escape.escape(payload.company) if payload.company else "—"
    message = html_escape.escape(payload.message).replace("\n", "<br/>")
    return f"""
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#F1EDE3;font-family:-apple-system,Segoe UI,Roboto,sans-serif;padding:24px;">
      <tr><td align="center">
        <table cellpadding="0" cellspacing="0" border="0" width="560" style="background:#ffffff;border-radius:16px;border:1px solid rgba(0,0,0,0.06);overflow:hidden;">
          <tr><td style="padding:24px 28px;border-bottom:1px solid rgba(0,0,0,0.06);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#7DAF15;letter-spacing:0.04em;">// new message · kingsten-jones.bio</div>
            <div style="margin-top:6px;font-size:22px;font-weight:900;color:#0a0a09;">{name} just reached out</div>
          </td></tr>
          <tr><td style="padding:20px 28px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(0,0,0,0.4);margin-bottom:4px;">EMAIL</div>
            <div style="font-size:14px;color:#0a0a09;margin-bottom:14px;"><a href="mailto:{email}" style="color:#0a0a09;text-decoration:none;border-bottom:1px solid #CFEA6B;">{email}</a></div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(0,0,0,0.4);margin-bottom:4px;">COMPANY</div>
            <div style="font-size:14px;color:#0a0a09;margin-bottom:18px;">{company}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(0,0,0,0.4);margin-bottom:6px;">MESSAGE</div>
            <div style="font-size:14px;color:#0a0a09;line-height:1.6;background:#F7F4EA;padding:14px 16px;border-radius:10px;border:1px solid rgba(0,0,0,0.05);">{message}</div>
          </td></tr>
          <tr><td style="padding:14px 28px 22px;border-top:1px solid rgba(0,0,0,0.06);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(0,0,0,0.4);">// reply directly to this email — it goes to {name}</div>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact")
async def submit_contact(payload: ContactRequest):
    # Always persist to Mongo so submissions are never lost
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "company": payload.company,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "email_sent": False,
    }
    await db.contact_messages.insert_one(doc)

    if not resend.api_key:
        logger.warning("RESEND_API_KEY not configured — contact stored but email not sent.")
        raise HTTPException(
            status_code=503,
            detail="Email service not configured. Please email kingstenjones2@gmail.com directly."
        )

    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "reply_to": payload.email,
        "subject": f"[bio] {payload.name}{' — ' + payload.company if payload.company else ''}",
        "html": _build_email_html(payload),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        await db.contact_messages.update_one(
            {"id": doc["id"]},
            {"$set": {"email_sent": True, "resend_id": result.get("id")}},
        )
        return {"status": "success", "message": "Message sent. I'll reply shortly."}
    except Exception as e:
        logger.error(f"Resend send failed: {e}")
        raise HTTPException(
            status_code=500,
            detail="Could not send right now. Please try again or email kingstenjones2@gmail.com."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()