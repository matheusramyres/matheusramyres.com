import { experienceContent } from '@/domains/experience/experience.content';
import { ExperienceCard } from '@/ui/components/Cards';
import { HeaderSection } from '@/ui/components/HeaderSection';
import clsx from 'clsx';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={clsx(
        '-mx-5 md:-mx-16',
        'min-h-screen pt-16 pb-16 bg-secondary-bg',
        'flex flex-col items-center scroll-mt-16',
      )}
    >
      <HeaderSection
        title={experienceContent.title}
        subText={experienceContent.description}
      />

      <div className="mt-16 w-full h-full flex gap-6 flex-wrap items-center justify-center">
        {experienceContent.experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
