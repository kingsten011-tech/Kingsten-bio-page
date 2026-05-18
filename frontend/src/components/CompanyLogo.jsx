import React from 'react';

// Reusable company logo icon — used inline next to company names
// across Experience and Projects sections.
const CompanyLogo = ({ id, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-9 w-9',
  };
  const baseCls = `${sizes[size]} object-contain flex-shrink-0 ${className}`;

  switch (id) {
    case 'atlassian':
      return (
        <img
          src="https://cdn.simpleicons.org/atlassian/0052CC"
          alt="Atlassian"
          className={baseCls}
          loading="lazy"
        />
      );
    case 'postman':
      return (
        <img
          src="https://cdn.simpleicons.org/postman/FF6C37"
          alt="Postman"
          className={baseCls}
          loading="lazy"
        />
      );
    case 'thetradedesk':
      return (
        <img
          src="/images/tradedesk.png"
          alt="The Trade Desk"
          className={baseCls}
          loading="lazy"
        />
      );
    case 'google':
      return (
        <svg viewBox="0 0 48 48" className={baseCls}>
          <path
            fill="#4285F4"
            d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84a10.12 10.12 0 0 1-4.4 6.64v5.52h7.1c4.16-3.83 6.58-9.47 6.58-16.17Z"
          />
          <path
            fill="#34A853"
            d="M24 46c5.94 0 10.92-1.97 14.55-5.33l-7.1-5.52a13.5 13.5 0 0 1-20.13-7.07h-7.34v5.7A22 22 0 0 0 24 46Z"
          />
          <path
            fill="#FBBC05"
            d="M10.32 28.08a13.21 13.21 0 0 1 0-8.16v-5.7H2.98a22 22 0 0 0 0 19.56l7.34-5.7Z"
          />
          <path
            fill="#EA4335"
            d="M24 9.92c3.23 0 6.13 1.11 8.41 3.3l6.3-6.3A22 22 0 0 0 24 2C15.46 2 8.07 6.9 4.36 14.22l7.34 5.7A13.16 13.16 0 0 1 24 9.92Z"
          />
        </svg>
      );
    case 'thoughtworks':
      return (
        <img
          src="/images/thoughtworks.png"
          alt="Thoughtworks"
          className={baseCls}
          loading="lazy"
        />
      );
    case 'oracle':
      return (
        <img
          src="/images/oracle.png"
          alt="Oracle"
          className={baseCls}
          loading="lazy"
        />
      );
    case 'careernet':
      // Careernet doesn't have a well-known logo; render an initial badge
      return (
        <div
          className={`${sizes[size]} rounded-md bg-[#0E0E0C] text-[#CFEA6B] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 ${className}`}
        >
          CN
        </div>
      );
    default:
      return null;
  }
};

export default CompanyLogo;
