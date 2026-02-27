import * as Icon from '@deemlol/next-icons';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

export type IconName = keyof typeof Icon;

interface IconButtomProps {
  icon: IconName;
  size?: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

export function IconButtom({
  icon,
  size,
  onClick,
  className,
}: IconButtomProps) {
  const IconComponent = Icon[icon];
  return (
    <button
      onClick={onClick}
      className={clsx(
        'cursor-pointer p-2',
        'rounded-full hover:bg-slate-200',
        className,
      )}
    >
      <IconComponent size={size} />
    </button>
  );
}
