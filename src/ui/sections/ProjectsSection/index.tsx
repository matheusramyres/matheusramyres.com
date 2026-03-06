import { skillContent } from '@/domains/project/project.content';
import { AboutCard } from '@/ui/components/Cards';
import { HeaderSection } from '@/ui/components/HeaderSection';
import clsx from 'clsx';

export default function ProjectsSection() {
  return (
    <section
      className={clsx(
        'pt-16 pb-16 px-5 md:px-16 -mx-5 md:-mx-16',
        'min-h-screen bg-secondary-bg',
        'flex flex-col items-center',
      )}
    >
      <HeaderSection
        title={skillContent.title}
        subText={skillContent.description}
      />
      <div className="mt-16 flex gap-2 md:gap-8 flex-col-reverse 2xl:flex-row items-baseline">
        <div className="2xl:max-w-1/2 w-full flex gap-5 items-center justify-center flex-wrap">
          {skillContent.projectCards.map((card) => (
            <AboutCard
              key={card.icon}
              icon={card.icon}
              title={card.title}
              subText={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
