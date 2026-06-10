import AboutSection from '@/ui/sections/AboutSection';
import ContactSection from '@/ui/sections/ContactSection';
import ExperienceSection from '@/ui/sections/ExperienceSection';
import ProfileSection from '@/ui/sections/ProfileSection';
import ProjectsSection from '@/ui/sections/ProjectsSection';
import SkillsSection from '@/ui/sections/SkillsSection';

export default function Home() {
  return (
    <div className="mt-18 px-5 md:px-16 pt-6 md:pt-8.75 ">
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
