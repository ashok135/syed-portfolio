import { useState, type FormEvent } from 'react';
import FadeIn from '../components/FadeIn';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-[#7621B0]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
            Get In Touch
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-lg mx-auto mt-4 font-light">
            Have an on-air broadcast graphics package, animated video loop, or promotional poster design in mind? Reach out directly.
          </p>
        </FadeIn>

        {/* Two-Column Contact Form & Direct Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Details & Quick Actions (5 cols) */}
          <FadeIn delay={0.1} y={20} className="lg:col-span-5 space-y-6">
            {/* Contact Card 1: Email */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B600A8]/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#B600A8]" /> Direct Email
                </span>
                <button
                  onClick={() => handleCopy('syedmaazsuhail@gmail.com', 'email')}
                  className="text-xs text-[#D7E2EA]/60 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
              <a
                href="mailto:syedmaazsuhail@gmail.com"
                className="text-base sm:text-lg font-bold text-white hover:text-[#BBCCD7] transition-colors flex items-center justify-between group"
              >
                <span>syedmaazsuhail@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Contact Card 2: Phone */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#7621B0]/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#7621B0]" /> Phone / WhatsApp
                </span>
                <button
                  onClick={() => handleCopy('+91 9353546279', 'phone')}
                  className="text-xs text-[#D7E2EA]/60 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPhone ? 'Copied' : 'Copy'}
                </button>
              </div>
              <a
                href="tel:9353546279"
                className="text-base sm:text-lg font-bold text-white hover:text-[#BBCCD7] transition-colors flex items-center justify-between group"
              >
                <span>+91 9353546279</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Contact Card 3: Location */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-1.5 mb-2">
                <MapPin className="w-4 h-4 text-[#BE4C00]" /> Location
              </span>
              <p className="text-base sm:text-lg font-bold text-white">Bangalore, Karnataka, India</p>
              <p className="text-xs text-[#D7E2EA]/60 mt-1">Available for full-time studio &amp; creative projects</p>
            </div>
          </FadeIn>

          {/* Interactive Inquiry Form (7 cols) */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[35px] bg-white/[0.02] border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold uppercase text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mb-6">
                Fill in your project brief or creative inquiry and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                    Thank you for reaching out, Syed Maaz will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your broadcast graphics package, poster requirements, or motion design timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-bold uppercase tracking-widest text-white text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Creative Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Footer info bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#D7E2EA]/50 font-light">
          <p>© {new Date().getFullYear()} Syed Maaz — Graphics &amp; Motion Designer. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for television broadcast, motion media &amp; brand identities
          </p>
        </div>
      </div>
    </section>
  );
}
