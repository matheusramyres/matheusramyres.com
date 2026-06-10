import { Icon } from '@/ui/components/Icon';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { Badge } from '../../Badge';

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: Array<string>;
}

export function ExperienceCard({
  role,
  company,
  location,
  period,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <div
      className={clsx(
        'w-full max-w-102.5 self-stretch',
        'border border-border-default',
        'bg-background rounded-[14px]',
        'p-6',
        'shadow-sm',
      )}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-text-primary font-semibold text-xl">{role}</p>
          <div className="text-text-secondary text-sm flex flex-col gap-2">
            <span className="inline-flex items-center gap-2">
              <Icon icon="Briefcase" size={16} />
              <span>{company}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="Calendar" size={16} />
              <span>{period}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="Clock" size={16} />
              <span>{location}</span>
            </span>
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-base mt-5 leading-7">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge key={`${tag}-${index}`} text={tag} />
        ))}
      </div>
    </div>
  );
}
