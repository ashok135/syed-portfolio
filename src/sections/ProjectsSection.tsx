import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { Sparkles, Calendar, Tag, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectData {
  num: string;
  category: string;
  name: string;
  date: string;
  desc: string;
  tags: string[];
  points: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'Broadcast & Motion',
    name: 'Prakashnath Swamiji Birthday Event – Graphics Package',
    date: 'February 2026',
    desc: 'Complete on-air graphics package for live broadcast coverage, featuring high-fidelity animated jackets, title cards, and lower thirds.',
    tags: ['After Effects', 'Photoshop', 'Premiere Pro', 'Motion Graphics', 'Live Broadcast'],
    points: [
      'Managed complete on-air graphics including lower thirds, animated jackets, title cards, and promotional posters for live event coverage.',
      'Designed cohesive motion visuals and broadcast elements ensuring brand consistency, live sync, and timely delivery.',
    ],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Web App & EdTech',
    name: 'Personalized Learning Hub',
    date: 'November 2023',
    desc: 'Adaptive web-based e-learning system reshaping traditional learning models with personalized skill assessments and progress tracking.',
    tags: ['React JS', 'JavaScript', 'HTML5', 'CSS3', 'Python Backend'],
    points: [
      'Designed and engineered an online education platform to help students learn and practice more effectively.',
      'Analyzes abilities, learning pace, interests, and overall progress to deliver an individualized learning path.',
    ],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'ML & Predictive Data',
    name: 'Covid-19 Data-Analysis & Prediction Model',
    date: 'April 2024',
    desc: 'Real-time forecasting system built with Neural Networks and Polynomial Regression to assist healthcare planning.',
    tags: ['Python', 'Neural Networks', 'Regression', 'SQL', 'Data Analytics'],
    points: [
      'Built a predictive forecasting model combining Neural Networks and Polynomial Regression.',
      'Enabled healthcare and administrative bodies to strategize resource allocation using real-time epidemiological datasets.',
    ],
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: ProjectData;
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="min-h-[85vh] mb-12 sm:mb-16" style={{ top: `${index * 24}px` }}>
      <motion.div
        className="sticky top-20 md:top-28 origin-top"
        style={{ scale }}
      >
        <div
          className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px]
            border-2 border-[#D7E2EA]/30 bg-[#0C0C0C]/95 backdrop-blur-xl
            p-5 sm:p-7 md:p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            overflow-hidden"
        >
          {/* Top row: Number, Category, Name, Date, Badge */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4 sm:gap-6 md:gap-8 flex-1 min-w-0">
              <span
                className="hero-heading font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col gap-1.5 pt-1 sm:pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#BBCCD7] bg-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#B600A8]" />
                    {project.category}
                  </span>
                  <span className="text-xs text-[#D7E2EA]/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#7621B0]" />
                    {project.date}
                  </span>
                </div>
                <h3
                  className="text-white font-bold tracking-tight uppercase"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="flex-shrink-0 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA]
                  font-medium uppercase tracking-widest px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm
                  transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                Inquire Project
              </a>
            </div>
          </div>

          {/* Project Details & Bullet Points */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="space-y-2">
                {project.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#D7E2EA]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#B600A8] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-wrap content-start gap-2">
              <span className="w-full text-xs font-semibold uppercase tracking-wider text-[#BBCCD7] flex items-center gap-1 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#7621B0]" /> Tech Stack
              </span>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#D7E2EA] font-mono tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Image Grid: 2 columns */}
          <div className="flex gap-3 sm:gap-4">
            {/* Left column — 40% — 2 stacked images */}
            <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
              <div
                className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10"
                style={{ height: 'clamp(120px, 15vw, 210px)' }}
              >
                <img
                  src={project.col1Img1}
                  alt={`${project.name} visual 1`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div
                className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10"
                style={{ height: 'clamp(150px, 20vw, 300px)' }}
              >
                <img
                  src={project.col1Img2}
                  alt={`${project.name} visual 2`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right column — 60% — 1 tall image */}
            <div className="w-[60%] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10">
              <img
                src={project.col2Img}
                alt={`${project.name} visual main`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-12 py-24 sm:py-32"
    >
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
          Selected Portfolio
        </span>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
        >
          Featured Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.num}
            project={p}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
