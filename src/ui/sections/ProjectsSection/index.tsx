import { ProjectContent } from '@/domains/project/project.content';
import { ProjectCard } from '@/ui/components/Cards';
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
        title={ProjectContent.title}
        subText={ProjectContent.description}
      />
      <div className="mt-16 flex gap-2 md:gap-8 flex-col 2xl:flex-row items-baseline">
        <div className="w-full flex gap-7 items-center justify-center flex-wrap">
          {ProjectContent.projectCards.map((card, index) => (
            <ProjectCard
              key={index}
              imagePath={card.image}
              title={card.name}
              badges={card.badges}
              subText={card.subText}
              descriptionList={card.descriptionList}
              productionUrl={card.productionUrl}
              repository={card.repository}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
