import FadeIn from '../components/FadeIn';
import { Award, Code2, Film, CheckCircle, Sparkles } from 'lucide-react';

const SOFTWARE_SKILLS = [
  { name: 'Adobe After Effects', level: 'Expert', desc: 'Broadcast motion packages, 2D/3D kinetic animation, lower-thirds & video loops', pct: 95 },
  { name: 'Adobe Photoshop', level: 'Advanced', desc: 'Anchor backdrops, digital plates, photo manipulation & high-res posters', pct: 92 },
  { name: 'Adobe Premiere Pro', level: 'Advanced', desc: 'Multi-cam broadcast timeline editing, color grading & audio sync', pct: 88 },
];

const PROGRAMMING_SKILLS = [
  { name: 'React JS', category: 'Frontend', desc: 'Component architecture, state hooks, responsive UI systems' },
  { name: 'JavaScript (ES6+)', category: 'Frontend / Logic', desc: 'Modern async JS, DOM pipelines, interactive components' },
  { name: 'Python', category: 'Backend / Data', desc: 'Data modeling, neural network regression, automation scripts' },
  { name: 'HTML5 & CSS3', category: 'Markup & Styling', desc: 'Semantic layouts, modern Tailwind systems, fluid clamp scaling' },
  { name: 'SQL', category: 'Database', desc: 'Query design, schema management, relational data analysis' },
];

const CERTIFICATIONS = [
  {
    title: 'React JS',
    issuer: 'Infosys Springboard',
    year: 'Certified',
    desc: 'Deep dive into modern component architectures, reusable state paradigms, and performance optimization in React.',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning Academy',
    year: 'Certified',
    desc: 'Core OOP patterns, data structures, exception handling, and modular algorithmic thinking.',
  },
  {
    title: 'Introduction to Microcontrollers Coding',
    issuer: 'Centrado Kit',
    year: 'Certified',
    desc: 'Hardware interfacing, embedded C/C++ control pipelines, and sensor/actuator logic orchestration.',
  },
];

export default function SkillsCertificationsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B600A8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#7621B0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#BBCCD7] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
            Technical Arsenal
          </span>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Skills &amp; Certifications
          </h2>
        </FadeIn>

        {/* Skills Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Software Skills Column */}
          <FadeIn delay={0.1} y={20} className="h-full">
            <div className="p-7 sm:p-9 rounded-[30px] bg-white/[0.02] border border-white/10 h-full flex flex-col justify-between hover:border-[#B600A8]/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B600A8]/30 to-[#7621B0]/30 border border-white/10 flex items-center justify-center text-white">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white">Software Skills</h3>
                    <p className="text-xs text-[#D7E2EA]/60">Motion graphics, post-production &amp; visual design</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {SOFTWARE_SKILLS.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#BBCCD7] bg-white/10 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#D7E2EA]/60 font-light">{skill.desc}</p>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Programming Languages Column */}
          <FadeIn delay={0.2} y={20} className="h-full">
            <div className="p-7 sm:p-9 rounded-[30px] bg-white/[0.02] border border-white/10 h-full flex flex-col justify-between hover:border-[#7621B0]/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7621B0]/30 to-[#BE4C00]/30 border border-white/10 flex items-center justify-center text-white">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white">Programming Languages</h3>
                    <p className="text-xs text-[#D7E2EA]/60">Web development, scripting &amp; data engineering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {PROGRAMMING_SKILLS.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-white text-sm sm:text-base">{lang.name}</h4>
                        <span className="text-[11px] font-mono text-[#BBCCD7] uppercase">{lang.category}</span>
                      </div>
                      <p className="text-xs text-[#D7E2EA]/60 font-light">{lang.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certifications Section */}
        <FadeIn delay={0.3} y={20}>
          <div className="p-8 sm:p-10 rounded-[35px] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BE4C00]/30 to-[#B600A8]/30 border border-white/10 flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white">Accredited Certifications</h3>
                <p className="text-xs text-[#D7E2EA]/60">Verified industry courseworks &amp; technical credentials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-[#B600A8]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B600A8] bg-[#B600A8]/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {cert.year}
                      </span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#BBCCD7] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#BBCCD7] mb-2">{cert.issuer}</p>
                    <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
