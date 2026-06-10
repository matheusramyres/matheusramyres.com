import * as Icon from '@deemlol/next-icons';
import clsx from 'clsx';

export type IconName = keyof typeof Icon;

interface IconLinkProps {
  icon: IconName;
  size?: number;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function IconLink({
  icon,
  size,
  href,
  className,
  target,
  rel,
}: IconLinkProps) {
  const IconComponent = Icon[icon];
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        'cursor-pointer p-2',
        'rounded-full hover:bg-slate-200 dark:hover:bg-slate-200/30',
        className,
      )}
    >
      <IconComponent size={size} />
    </a>
  );
}
