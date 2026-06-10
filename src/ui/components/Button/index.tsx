import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: Variant;
}

export function Button({ children, className, variant, ...rest }: ButtonProps) {
  const stylesButton = {
    primary:
      'bg-gray-950 dark:bg-zinc-700 text-white hover:bg-zinc-800 dark:hover:bg-zinc-600',
    secondary:
      'bg-white text-slate-950 border border-slate-200 hover:bg-[#f2f2f2]',
  };

  if (!variant) variant = 'primary';

  const styleVariant = stylesButton[variant];
  return (
    <button
      className={twMerge(
        clsx(
          'w-fit',
          'py-2.75 px-7.75',
          'rounded-lg font-medium',
          'cursor-pointer',
          'flex gap-1.5 items-center justify-center',
          styleVariant,
        ),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
