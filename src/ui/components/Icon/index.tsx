import * as Icons from '@deemlol/next-icons';

export type IconName = keyof typeof Icons;

interface IconProps {
  icon: IconName;
  size?: number;
  className?: string;
}

export function Icon({ icon, size, className }: IconProps) {
  const IconComponent = Icons[icon];
  return <IconComponent size={size} />;
}
