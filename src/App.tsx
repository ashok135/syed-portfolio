import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ExperienceEducationSection from './sections/ExperienceEducationSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsCertificationsSection from './sections/SkillsCertificationsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit text-[#D7E2EA] min-h-screen" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceEducationSection />
      <ProjectsSection />
      <SkillsCertificationsSection />
      <ContactSection />
    </div>
  );
}
