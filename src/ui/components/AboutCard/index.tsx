import { Icon, IconName } from '@/ui/components/Icon';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  subText: string;
  title: string;
}

export function AboutCard({ icon, title, subText }: AboutCardProps) {
  return (
    <div
      className={clsx(
        'md:max-w-73.75 w-full min-h-51.5',
        'border border-border-default',
        'p-6 bg-white rounded-[14px]',
        'hover:scale-105 transition duration-200 ease-in-out ',
      )}
    >
      <Icon icon={icon} size={32} />
      <p className="text-text-primary text-lg mt-4.5">{title}</p>
      <p className="text-text-secondary  text-base mt-4.5">{subText}</p>
    </div>
  );
}
