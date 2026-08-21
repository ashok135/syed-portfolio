import FadeIn from '../components/FadeIn';
import { Palette, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const WORK_EXPERIENCES = [
  {
    role: 'Graphics Designer',
    company: 'Speed News Kannada',
    period: 'Aug 2025 – Present',
    location: 'Bangalore, Karnataka',
    type: 'Full-time / On-Air Broadcast',
    points: [
      'Designed broadcast-ready posters, graphic plates, anchor backgrounds, and discussion panel backdrops, maintaining brand consistency across news packages, special segments, and promotional content.',
      'Developed animated video loops, lower-thirds, and live tickers for on-air programming, collaborating with production and editorial teams to deliver visually compelling graphics within tight newsroom deadlines.',
    ],
  },
  {
    role: 'Visual & UI Design Intern',
    company: 'Syslog',
    period: 'Dec 2023 – Apr 2024',
    location: 'Bangalore, Karnataka',
    type: 'Design Internship',
    points: [
      'Crafted user-centric visual assets, brand elements, and engaging digital layouts for an online education platform.',
      'Structured visual hierarchies, interactive design systems, and instructional graphics to provide students with a seamless, intuitive experience.',
    ],
  },
  {
    role: 'Creative Design Intern',
    company: 'Syslog',
    period: 'Jun 2023 – Jul 2023',
    location: 'Bangalore, Karnataka',
    type: 'Design Internship',
    points: [
      'Designed digital creative assets, vector graphics, presentation materials, and instructional illustrations.',
      'Developed foundational workflows in digital media creation, layout composition, and visual storytelling.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Diploma in Computer Science Engineering',
    institution: 'East West Polytechnic',
    year: '2024',
    location: 'Bangalore, Karnataka',
    tag: 'Engineering',
  },
  {
    degree: 'Class X (SSLC)',
    institution: 'Goodwill English High School',
    year: '2018',
    location: 'Bangalore, Karnataka',
    tag: 'Score: 88%',
  },
];

export default function ExperienceEducationSection() {
  return (
    <section
      id="experience"
      className="bg-white text-[#0C0C0C] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#7621B0] px-4 py-1.5 rounded-full bg-[#7621B0]/10 inline-block mb-4">
            Professional Background
          </span>
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Experience &amp; Education
          </h2>
        </FadeIn>

        {/* Grid Layout: Experience Left, Education Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                <Palette className="w-5 h-5 text-[#BBCCD7]" />
              </div>
              <div>
                <h3 className="font-bold text-xl uppercase tracking-wide text-black">Work Experience</h3>
                <p className="text-xs text-black/60 font-light">Broadcast graphics, motion packages &amp; visual media</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {WORK_EXPERIENCES.map((exp, idx) => (
                <FadeIn key={exp.role + exp.company} delay={idx * 0.1} y={20}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0C0C0C]/[0.03] border border-black/10 hover:border-black/30 transition-all duration-300 relative group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#7621B0] bg-[#7621B0]/10 px-2.5 py-0.5 rounded-md mb-1.5">
                          {exp.type}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-black group-hover:text-[#7621B0] transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-black/80">{exp.company}</p>
                      </div>

                      <div className="text-right flex flex-col sm:items-end text-xs text-black/60">
                        <span className="flex items-center gap-1 font-medium text-black">
                          <Calendar className="w-3.5 h-3.5 text-[#7621B0]" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-black/40" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4 pt-3 border-t border-black/5">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/75 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#7621B0] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#BBCCD7]" />
              </div>
              <div>
                <h3 className="font-bold text-xl uppercase tracking-wide text-black">Education</h3>
                <p className="text-xs text-black/60 font-light">Academic background &amp; honors</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {EDUCATION.map((edu, idx) => (
                <FadeIn key={edu.degree} delay={0.2 + idx * 0.1} y={20}>
                  <div className="p-6 rounded-2xl bg-[#0C0C0C]/[0.03] border border-black/10 hover:border-black/30 transition-all duration-300 group">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-[11px] font-bold tracking-widest uppercase bg-black text-white px-2.5 py-1 rounded-md">
                        {edu.tag}
                      </span>
                      <span className="text-xs font-semibold text-[#7621B0] flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {edu.year}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-black mt-2 group-hover:text-[#7621B0] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-black/80 font-medium">{edu.institution}</p>
                    <p className="text-xs text-black/50 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </p>
                  </div>
                </FadeIn>
              ))}

              {/* Core capabilities card */}
              <FadeIn delay={0.4} y={20}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-black to-[#1a1225] text-white border border-black shadow-lg">
                  <span className="text-[11px] uppercase tracking-widest text-[#BBCCD7] font-semibold block mb-2">
                    Design Specializations
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 font-medium">
                      📺 Broadcast Packaging
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 font-medium">
                      🎬 Animated Video Loops
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 font-medium">
                      🎨 Posters &amp; Title Cards
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 font-medium">
                      🖌️ Anchor Backdrops
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
