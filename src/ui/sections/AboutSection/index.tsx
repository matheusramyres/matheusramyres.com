import { aboutContent } from '@/domains/about/about.content';
import { AboutCard } from '@/ui/components/AboutCard';
import { HeaderSection } from '@/ui/components/HeaderSection';
import { RichContent } from '@/ui/components/RichContent';
import { ViewMoreContainer } from '@/ui/components/ViewMoreContainer';
import clsx from 'clsx';

export default function AboutSection() {
  return (
    <section
      className={clsx(
        'pt-16 px-5 md:px-16 -mx-5 md:-mx-16',
        'min-h-screen bg-secondary-bg',
        'flex flex-col items-center',
      )}
    >
      <HeaderSection
        title={aboutContent.title}
        subText={aboutContent.description}
      />
      <div className="mt-16 flex gap-2 md:gap-8 flex-col-reverse 2xl:flex-row items-baseline">
        <ViewMoreContainer
          className={clsx('mt-16 2xl:mt-0 2xl:max-w-1/2 w-full text-justify')}
        >
          <RichContent html={aboutContent.longText} />
        </ViewMoreContainer>

        <div className="2xl:max-w-1/2 w-full flex gap-5 items-center justify-center flex-wrap">
          {aboutContent.descriptionCards.map((card) => (
            <AboutCard
              key={card.icon}
              icon={card.icon}
              title={card.title}
              subText={card.subText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
