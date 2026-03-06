import { Icon, IconName } from '@/ui/components/Icon';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { Badge } from '../../Badge';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  badges: Array<string>;
  title: string;
}

export function ProjectCard({ title, icon, badges }: ProjectCardProps) {
  const bgIcons: Record<string, string> = {
    Box: 'bg-icon-stack',
    Layout: 'bg-icon-frontend',
    Server: 'bg-icon-backend',
    Database: 'bg-icon-database',
    Cloud: 'bg-icon-devops',
    Smartphone: 'bg-icon-mobile',
    Tool: 'bg-icon-tools',
  };

  const iconValue = icon ?? 'Box';
  const bgIcon = bgIcons[iconValue] ?? 'bg-icon-stack';
  return (
    <div
      className={clsx(
        'md:max-w-87 w-full min-h-auto md:min-h-48.75',
        'border border-border-default',
        'p-6 bg-white rounded-[14px]',
        'hover:scale-105 transition duration-200 ease-in-out ',
      )}
    >
      <div className="flex items-center gap-2.5 mb-3.5">
        <div
          className={clsx(
            'w-11 h-11 rounded-lg flex items-center justify-around',
            bgIcon,
          )}
        >
          <Icon icon={icon} size={24} color="#ffffff" />
        </div>
        <p className="text-text-primary font-semibold text-lg">{title}</p>
      </div>
      <div className="flex flex-wrap gap-3.5">
        {badges.map((badge, index) => (
          <Badge key={badge + index} text={badge} />
        ))}
      </div>
    </div>
  );
}
