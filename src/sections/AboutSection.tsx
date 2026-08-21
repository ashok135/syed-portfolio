import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const ABOUT_TEXT =
  "I am Syed Maaz, a Graphics Designer & Web Developer based in Bangalore. Currently designing broadcast-ready graphics, motion loops, and lower-thirds for Speed News Kannada. With a Computer Science Engineering background from East West Polytechnic, I merge visual storytelling with modern frontend development to create memorable brand experiences and high-impact digital products.";

const CORNER_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon',
    pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    size: 'w-[100px] sm:w-[140px] md:w-[180px]',
    fadeProps: { delay: 0.1, x: -60, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D Object',
    pos: 'bottom-[8%] left-[2%] sm:left-[5%] md:left-[8%]',
    size: 'w-[90px] sm:w-[120px] md:w-[160px]',
    fadeProps: { delay: 0.25, x: -60, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego',
    pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    size: 'w-[100px] sm:w-[140px] md:w-[180px]',
    fadeProps: { delay: 0.15, x: 60, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D Group',
    pos: 'bottom-[8%] right-[2%] sm:right-[5%] md:right-[8%]',
    size: 'w-[110px] sm:w-[140px] md:w-[180px]',
    fadeProps: { delay: 0.3, x: 60, y: 0, duration: 0.9 },
  },
];

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Broadcast Motion',
    subtitle: 'Speed News Kannada',
    desc: 'On-air graphics packages, animated loops, lower-thirds & live broadcast visual direction.',
  },
  {
    icon: GraduationCap,
    title: 'CS Engineering',
    subtitle: 'East West Polytechnic',
    desc: 'Strong grounding in software architectures, algorithms, Python & web technologies.',
  },
  {
    icon: Award,
    title: 'Full Spectrum',
    subtitle: 'Design & Code',
    desc: 'Seamless synergy between After Effects / Photoshop creativity and React / Python execution.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative
        px-5 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Corner decorative 3D images */}
      {CORNER_IMAGES.map((img) => (
        <FadeIn
          key={img.alt}
          className={`absolute ${img.pos} ${img.size} pointer-events-none select-none opacity-40 md:opacity-80`}
          {...img.fadeProps}
        >
          <img src={img.src} alt={img.alt} className="w-full h-auto" draggable={false} />
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="flex flex-col items-center text-center z-10 max-w-4xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-light tracking-widest uppercase text-[#BBCCD7] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            Background &amp; Philosophy
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="max-w-[680px] px-4">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-normal text-center leading-relaxed"
          />
        </div>

        {/* 3 Core pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-18 w-full">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.2 + idx * 0.1} y={30}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#B600A8]/40 transition-all duration-300 text-left group hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B600A8]/20 to-[#7621B0]/20 border border-white/10 flex items-center justify-center mb-4 text-[#BBCCD7] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white text-base sm:text-lg mb-0.5">{item.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#B600A8] font-medium mb-2">{item.subtitle}</p>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-18">
          <FadeIn delay={0.5} y={20}>
            <a href="#contact">
              <ContactButton />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
