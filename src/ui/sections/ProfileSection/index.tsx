import { profileContent } from '@/domains/profile/profile.content';
import { Button } from '@/ui/components/Button';
import { IconLink } from '@/ui/components/IconLink';
import { TextAnimation } from '@/ui/components/TextAnimation';
import clsx from 'clsx';

import Image from 'next/image';
export default function ProfileSection() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-2 md:gap-8 ">
        <div className="min-w-20 min-h-20 md:min-w-30 md:min-h-30 relative">
          <Image
            className="bg-slate-300 rounded-full object-cover"
            src={profileContent.avatarUrl}
            alt={'avatar'}
            fill
          />
        </div>
        <div className="max-w-193.5 w-full text-center">
          <p className="text-3xl md:text-5xl mt-4">
            <TextAnimation text={`Olá, sou ${profileContent.name}`} />
          </p>
          <p className="text-base md:text-2xl text-slate-600 mt-4">
            {profileContent.description}
          </p>
          <p className="text-xs md:text-base text-text-secondary mt-4">
            {profileContent.subtitle}
          </p>
        </div>
      </div>
      <div
        className={clsx(
          'mt-4 w-full',
          'flex flex-col gap-2.5 justify-between',
          'md:mt-9 md:flex-row md:gap-5 md:w-auto',
        )}
      >
        <Button>Ver Projetos</Button>
        <Button variant="secondary">Contato</Button>
      </div>
      <div className="flex gap-8 pt-10">
        <IconLink icon="Github" size={24} href="#" />
        <IconLink icon="Linkedin" size={24} href="#" />
        <IconLink icon="Mail" size={24} href="#" />
      </div>
      <div className="flex pt-6 animate-bounce">
        <IconLink icon="ArrowDown" size={24} href="#" />
      </div>
    </section>
  );
}
