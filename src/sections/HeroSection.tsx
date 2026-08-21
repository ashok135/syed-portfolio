import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';
import { Sparkles, MapPin, Mail, Phone } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative px-6 md:px-12 py-6 md:py-8 overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl tracking-wider uppercase group"
          >
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] inline-block animate-pulse" />
            <span className="group-hover:text-[#BBCCD7] transition-colors">SYED MAAZ</span>
          </a>

          <div className="hidden sm:flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                  text-xs md:text-sm lg:text-base
                  transition-all duration-200 hover:text-white hover:opacity-100 opacity-70 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B600A8] to-[#7621B0] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-xs uppercase tracking-widest text-[#BBCCD7] border border-[#BBCCD7]/30 px-4 py-2 rounded-full hover:bg-white/10 transition-all sm:hidden"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-auto py-12 md:py-20 z-0 relative">
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-light tracking-widest uppercase text-[#BBCCD7] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            Graphics &amp; Motion Designer
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={40} className="w-full">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-[0.88]
              whitespace-nowrap select-none pointer-events-none
              text-[13vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[16.5vw]"
          >
            Hi, i&apos;m syed
          </h1>
        </FadeIn>

        {/* Quick badge on desktop */}
        <FadeIn delay={0.3} y={20} className="hidden md:flex items-center gap-6 mt-4 text-xs tracking-wider uppercase text-[#D7E2EA]/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B600A8]" /> Bangalore, India
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#7621B0]" /> syedmaazsuhail@gmail.com
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#BE4C00]" /> +91 9353546279
          </span>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-2 sm:pb-4 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[200px] sm:max-w-[260px] md:max-w-[320px]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.25rem)' }}
          >
            Specializing in broadcast-ready motion packages, animated lower-thirds &amp; visual identities
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <a href="#contact">
            <ContactButton />
          </a>
        </FadeIn>
      </div>

      {/* Hero Portrait — centered with Magnet effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px]
          top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={120}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={PORTRAIT_URL}
            alt="Syed Maaz — Graphics & Motion Designer"
            className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(182,0,168,0.2)]"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
