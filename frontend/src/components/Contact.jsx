import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a frontend-only implementation
    toast.success('Message Sent!', {
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#fdfcf9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-xs text-[#8fb339] mb-8">
          <span className="opacity-60">/* ————— section: contact ————— */</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-[#1a1a1a]/70 mb-8 leading-relaxed">
              Open to discussing talent strategy, executive sourcing, or collaboration opportunities.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:kingstenjones2@gmail.com"
                className="flex items-center gap-3 text-[#1a1a1a] hover:text-[#8fb339] transition-colors group"
              >
                <div className="p-3 bg-white border border-[#e5e3db] rounded group-hover:border-[#8fb339] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#8fb339] mb-1">// email</div>
                  <div className="font-medium">kingstenjones2@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919600816138"
                className="flex items-center gap-3 text-[#1a1a1a] hover:text-[#8fb339] transition-colors group"
              >
                <div className="p-3 bg-white border border-[#e5e3db] rounded group-hover:border-[#8fb339] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#8fb339] mb-1">// phone</div>
                  <div className="font-medium">+91 9600816138</div>
                </div>
              </a>

              <a
                href="https://in.linkedin.com/in/kingsten-jones-646242125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#1a1a1a] hover:text-[#8fb339] transition-colors group"
              >
                <div className="p-3 bg-white border border-[#e5e3db] rounded group-hover:border-[#8fb339] transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#8fb339] mb-1">// linkedin</div>
                  <div className="font-medium">Kingsten Jones</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-[#1a1a1a]">
                <div className="p-3 bg-white border border-[#e5e3db] rounded">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#8fb339] mb-1">// location</div>
                  <div className="font-medium">Bangalore, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#e5e3db] rounded-lg p-8">
            <div className="font-mono text-xs text-[#8fb339] mb-6">
              <span className="opacity-60">// send a message</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-[#1a1a1a]/60 mb-2">
                  name<span className="text-[#8fb339]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#fdfcf9] border border-[#e5e3db] rounded focus:outline-none focus:border-[#8fb339] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#1a1a1a]/60 mb-2">
                  email<span className="text-[#8fb339]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#fdfcf9] border border-[#e5e3db] rounded focus:outline-none focus:border-[#8fb339] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#1a1a1a]/60 mb-2">
                  message<span className="text-[#8fb339]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#fdfcf9] border border-[#e5e3db] rounded focus:outline-none focus:border-[#8fb339] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full font-mono text-sm px-6 py-3 bg-[#8fb339] text-white hover:bg-[#7a9e2f] transition-all duration-300 rounded flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
