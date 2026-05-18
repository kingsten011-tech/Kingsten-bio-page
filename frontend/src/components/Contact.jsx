import React from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight, Download, FileText } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, href, testId }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    data-testid={testId}
    className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 transition-all group"
  >
    <Icon size={18} className="text-[#CFEA6B] flex-shrink-0" />
    <span className="font-mono text-sm text-white/85 flex-1">{label}</span>
    <ArrowUpRight size={16} className="text-white/30 group-hover:text-white group-hover:rotate-12 transition-all" />
  </a>
);

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#0a0a09] text-white py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="font-mono text-xs text-[#CFEA6B] mb-5">// let's talk</div>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-tight mb-2">
              Hiring an engineering team?
            </h2>
            <p className="font-display font-black text-2xl md:text-3xl lg:text-[40px] leading-[1.05] tracking-tight text-white/30 mb-8">
              Or just curious about the market?
            </p>
            <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-lg mb-10">
              I'm happy to chat about engineering hiring, founding-team building, market intel for
              AI/ML or platform roles, or anything talent-strategy.
            </p>

            <div className="space-y-3 max-w-md">
              <ContactLink
                icon={Mail}
                label="kingstenjones2@gmail.com"
                href="mailto:kingstenjones2@gmail.com"
                testId="contact-email"
              />
              <ContactLink
                icon={Phone}
                label="+91 9600816138"
                href="tel:+919600816138"
                testId="contact-phone"
              />
              <ContactLink
                icon={Linkedin}
                label="linkedin.com/in/kingsten-jones"
                href="https://in.linkedin.com/in/kingsten-jones-646242125"
                testId="contact-linkedin"
              />
            </div>
          </div>

          {/* Right: Resume download card */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-7 lg:p-9 relative overflow-hidden">
            {/* subtle grid bg */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #CFEA6B 1px, transparent 1px)`,
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#CFEA6B] flex items-center justify-center">
                  <FileText size={20} className="text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-widest text-[#CFEA6B] uppercase">// resume</div>
                  <div className="font-mono text-[11px] text-white/50">PDF · v2025</div>
                </div>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-[36px] leading-[1.05] tracking-tight mb-3">
                Prefer the long form?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-md">
                Grab the full PDF — every role, every project, every metric. Recruiter-friendly,
                ATS-friendly, and ready to forward to a hiring partner.
              </p>

              {/* file preview */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-6 flex items-center gap-4">
                <div className="w-12 h-14 bg-[#CFEA6B] rounded-md flex flex-col items-center justify-center flex-shrink-0">
                  <span className="font-mono text-[9px] font-bold text-black">PDF</span>
                  <span className="font-mono text-[8px] text-black/60 mt-0.5">2025</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[13px] text-white truncate">
                    Kingsten-Jones-Resume.pdf
                  </div>
                  <div className="font-mono text-[11px] text-white/40 mt-0.5">
                    8+ years · 7 companies · ~305 KB
                  </div>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="Kingsten-Jones-Resume.pdf"
                data-testid="contact-download-resume"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#CFEA6B] hover:bg-[#bcd957] text-black px-5 py-3.5 rounded-full font-mono text-sm font-medium transition-all group"
              >
                <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
                download resume.pdf
              </a>

              <div className="mt-5 font-mono text-[11px] text-white/40 text-center">
                // or reach out via any channel on the left
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
