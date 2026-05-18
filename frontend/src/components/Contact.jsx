import React, { useState } from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import { toast } from 'sonner';

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
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "Thanks for reaching out — I'll reply via email shortly.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#0a0a09] text-white py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <div className="font-mono text-sm text-[#CFEA6B] mb-6">// let's talk</div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight mb-2">
              Hiring an engineering team?
            </h2>
            <p className="font-display font-black text-3xl md:text-4xl lg:text-[52px] leading-[1.02] tracking-tight text-white/30 mb-10">
              Or just curious about the market?
            </p>
            <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-lg mb-12">
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

          {/* Right form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-7 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[11px] tracking-widest text-white/40 mb-2 uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    data-testid="form-name"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#CFEA6B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] tracking-widest text-white/40 mb-2 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    data-testid="form-email"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#CFEA6B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest text-white/40 mb-2 uppercase">Company (optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  data-testid="form-company"
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#CFEA6B] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest text-white/40 mb-2 uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="What kind of team are you building?"
                  data-testid="form-message"
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#CFEA6B] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <span className="font-mono text-[11px] text-white/40">
                  // Stored securely · I'll reply via email
                </span>
                <button
                  type="submit"
                  data-testid="form-submit"
                  className="inline-flex items-center gap-2 bg-[#CFEA6B] hover:bg-[#bcd957] text-black pl-5 pr-4 py-3 rounded-full font-mono text-sm font-medium transition-all group"
                >
                  send message
                  <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
