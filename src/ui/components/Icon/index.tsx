import * as Icons from '@deemlol/next-icons';

export type IconName = keyof typeof Icons;

interface IconProps {
  icon: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({ icon, size, color, className }: IconProps) {
  const IconComponent = Icons[icon];
  return <IconComponent size={size} color={color} className={className} />;
}
