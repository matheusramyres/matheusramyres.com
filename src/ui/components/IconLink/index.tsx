import * as Icon from '@deemlol/next-icons';
import clsx from 'clsx';

export type IconName = keyof typeof Icon;

interface IconLinkProps {
  icon: IconName;
  size?: number;
  href: string;
  className?: string;
}

export function IconLink({ icon, size, href, className }: IconLinkProps) {
  const IconComponent = Icon[icon];
  return (
    <a
      href={href}
      className={clsx(
        'cursor-pointer p-2',
        'rounded-full hover:bg-slate-200',
        className,
      )}
    >
      <IconComponent size={size} />
    </a>
  );
}
