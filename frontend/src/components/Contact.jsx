import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight, Calendar } from 'lucide-react';
import CardGlowBorder from './motion/CardGlowBorder';

const EXPERIENCE_OPTIONS = ['0 - 3', '3 - 6', '6 - 9', '9 - 12', '12+'];
const ROLE_TYPES = ['Engineering', 'Recruiting'];
const HELP_OPTIONS = [
  'Hiring Opportunity',
  'Hiring Discussion',
  'Interview Prep',
  'Mentorship',
  'Networking',
];
const CALENDAR_URL = 'https://calendar.app.google/2585wJ6BZ5S8yuXH7';
const CONTACT_EMAIL = 'kingstenjones2@gmail.com';

const buildJuniorMailto = (form) => {
  const subject = encodeURIComponent(`Contact: ${form.name.trim()}`);
  const body = encodeURIComponent(
    [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Company: ${form.company.trim() || '—'}`,
      `Role Type: ${form.roleType}`,
      `How can I help?: ${form.howCanIHelp}`,
      `Years of Experience: ${form.experience}`,
      `Phone: ${form.phone.trim()}`,
      `LinkedIn: ${form.linkedin.trim() || '—'}`,
      '',
      'Reason for reaching out:',
      form.reason.trim() || '—',
    ].join('\n')
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

const isExperiencedFormValid = (form) =>
  Boolean(
    form.name.trim() &&
      form.email.trim() &&
      form.company.trim() &&
      form.roleType &&
      form.howCanIHelp &&
      form.reason.trim()
  );

const ContactLink = ({ icon: Icon, label, href, testId }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    data-testid={testId}
    className="premium-link premium-card-dark ambient-surface-dark spark-interactive flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 group"
  >
    <Icon size={18} className="text-[#CFEA6B] flex-shrink-0" />
    <span className="font-mono text-sm text-white/85 flex-1">{label}</span>
    <ArrowUpRight
      size={16}
      className="text-white/30 group-hover:text-white group-hover:rotate-12 transition-all"
    />
  </a>
);

const fieldClass =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#CFEA6B]/50 focus:ring-1 focus:ring-[#CFEA6B]/30 transition-all';

const labelClass = 'font-mono text-[11px] text-white/50 uppercase tracking-wider mb-2 block';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Engineering',
    howCanIHelp: '',
    experience: '',
    reason: '',
    phone: '',
    linkedin: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isJunior = form.experience === '0 - 3';

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const isExperienced = form.experience && !isJunior;
  const canSchedule = isExperienced && isExperiencedFormValid(form);

  const handleJuniorSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.howCanIHelp || !form.phone.trim()) return;
    window.location.href = buildJuniorMailto(form);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="site-section bg-[#0a0a09] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="font-mono text-xs text-[#CFEA6B] mb-5">// Let&apos;s Talk</div>
            <h2 className="font-display font-black text-[2rem] sm:text-3xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-tight mb-2">
              Hiring an engineering team?
            </h2>
            <p className="font-display font-black text-2xl md:text-3xl lg:text-[40px] leading-[1.05] tracking-tight text-white/30 mb-8">
              Or just curious about the market?
            </p>
            <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-lg mb-10">
              I&apos;m happy to chat about hiring opportunities, engineering hiring, interview prep,
              mentorship, or anything talent-strategy.
            </p>

            <div className="space-y-3 max-w-md">
              <ContactLink
                icon={Mail}
                label="kingstenjones2@gmail.com"
                href="mailto:kingstenjones2@gmail.com"
                testId="contact-email"
              />
              <ContactLink
                icon={Linkedin}
                label="linkedin.com/in/kingsten-jones"
                href="https://in.linkedin.com/in/kingsten-jones-646242125"
                testId="contact-linkedin"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="premium-card-dark ambient-surface-dark spark-interactive bg-white/[0.02] border border-white/10 rounded-3xl p-7 lg:p-9 relative overflow-hidden">
            <CardGlowBorder dark />
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none z-[1]"
              style={{
                backgroundImage: 'radial-gradient(circle, #CFEA6B 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative">
              <div className="font-mono text-[11px] tracking-widest text-[#CFEA6B] uppercase mb-2">
                // Get In Touch
              </div>
              <h3 className="font-display font-black text-2xl md:text-[32px] leading-[1.05] tracking-tight mb-6">
                Tell me a bit about you
              </h3>

              {isJunior && submitted ? (
                <p
                  data-testid="contact-thank-you"
                  className="text-sm lg:text-base text-white/70 leading-relaxed border border-white/10 rounded-2xl bg-white/[0.03] px-6 py-8"
                >
                  Thanks for reaching out. I&apos;ll review your details and get back to you if
                  there&apos;s an opportunity to connect.
                </p>
              ) : (
                <form
                  onSubmit={isJunior ? handleJuniorSubmit : (e) => e.preventDefault()}
                  className="space-y-5"
                  data-testid="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        data-testid="contact-name"
                        className={fieldClass}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        data-testid="contact-form-email"
                        className={fieldClass}
                        placeholder="Your email to contact"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required={isExperienced}
                      value={form.company}
                      onChange={update('company')}
                      data-testid="contact-company"
                      className={fieldClass}
                      placeholder="Where you work"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <span className={labelClass}>Role Type</span>
                    <div
                      className="flex flex-wrap gap-2"
                      role="group"
                      aria-label="Role Type"
                    >
                      {ROLE_TYPES.map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, roleType: role }))}
                          data-testid={`contact-role-${role.toLowerCase()}`}
                          className={`premium-btn ambient-surface spark-interactive px-4 py-2 rounded-full font-mono text-xs border ${
                            form.roleType === role
                              ? 'bg-[#CFEA6B] text-black border-[#CFEA6B]'
                              : 'bg-transparent text-white/70 border-white/15 hover:border-white/30'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-how-can-i-help" className={labelClass}>
                      How can I help?
                    </label>
                    <select
                      id="contact-how-can-i-help"
                      required
                      value={form.howCanIHelp}
                      onChange={update('howCanIHelp')}
                      data-testid="contact-how-can-i-help"
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0a0a09] text-white/40">
                        Select an option
                      </option>
                      {HELP_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0a09]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-experience" className={labelClass}>
                      Years of Experience
                    </label>
                    <select
                      id="contact-experience"
                      required
                      value={form.experience}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, experience: e.target.value }));
                        setSubmitted(false);
                      }}
                      data-testid="contact-experience"
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0a0a09] text-white/40">
                        Select range
                      </option>
                      {EXPERIENCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0a09]">
                          {opt} years
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-reason" className={labelClass}>
                      Reason for Reaching Out
                    </label>
                    <textarea
                      id="contact-reason"
                      rows={4}
                      required={isExperienced}
                      value={form.reason}
                      onChange={update('reason')}
                      data-testid="contact-reason"
                      className={`${fieldClass} resize-y min-h-[100px]`}
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  {isJunior && (
                    <div className="space-y-5 pt-1 border-t border-white/10">
                      <div>
                        <label htmlFor="contact-phone" className={labelClass}>
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={update('phone')}
                          data-testid="contact-form-phone"
                          className={fieldClass}
                          placeholder="+1 555 000 0000"
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-linkedin" className={labelClass}>
                          LinkedIn URL{' '}
                          <span className="normal-case text-white/35">(optional)</span>
                        </label>
                        <input
                          id="contact-linkedin"
                          type="url"
                          value={form.linkedin}
                          onChange={update('linkedin')}
                          data-testid="contact-form-linkedin"
                          className={fieldClass}
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <button
                        type="submit"
                        data-testid="contact-submit"
                        className="premium-btn ambient-surface spark-interactive w-full inline-flex items-center justify-center bg-white hover:bg-white/90 text-black px-5 py-3.5 rounded-full font-mono text-sm font-medium"
                      >
                        Submit
                      </button>
                    </div>
                  )}

                  {canSchedule && (
                    <a
                      href={CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-schedule"
                      className="premium-btn ambient-surface spark-interactive premium-btn-lime w-full inline-flex items-center justify-center gap-2.5 bg-[#CFEA6B] hover:bg-[#bcd957] text-black px-5 py-3.5 rounded-full font-mono text-sm font-medium group"
                    >
                      <Calendar size={15} className="group-hover:scale-105 transition-transform" />
                      Schedule a Conversation
                    </a>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
