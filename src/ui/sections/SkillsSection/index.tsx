import { skillContent } from '@/domains/skill/skill.content';
import { SkillCard } from '@/ui/components/Cards';
import { HeaderSection } from '@/ui/components/HeaderSection';
import clsx from 'clsx';

export default function SkillsSection() {
  return (
    <section
      className={clsx('min-h-screen pt-16 pb-16 flex flex-col items-center')}
    >
      <HeaderSection
        title={skillContent.title}
        subText={skillContent.description}
      />
      <div className="mt-16 flex gap-2 md:gap-8 items-baseline">
        <div className="w-full flex gap-5 items-center justify-center flex-wrap">
          {skillContent.skillCards.map((card) => (
            <SkillCard
              key={card.icon}
              icon={card.icon}
              title={card.title}
              badges={card.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
