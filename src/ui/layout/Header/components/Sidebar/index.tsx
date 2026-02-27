import { headerContent } from '@/domains/layout/header.content';
import { IconButtom } from '@/ui/components/IconButton';
import clsx from 'clsx';

interface SideBarProps {
  setIsOpened: (value: boolean) => void;
  isOpened: boolean;
}

export default function SideBar({ setIsOpened, isOpened }: SideBarProps) {
  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 z-20',
        'w-full min-h-screen',
        'bg-white/50 backdrop-blur-sm',
        'border-b border-slate-200',
        isOpened ? 'translate-none' : '-translate-x-full',
        'transition duration-600 ease-in-out ',
      )}
    >
      <header
        className={clsx(
          'h-14 border-b border-b-slate-200',
          'flex items-center justify-end',
        )}
      >
        <IconButtom
          icon="X"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          size={40}
        />
      </header>
      <ul
        className={clsx(
          'flex flex-col gap-5.5 p-5',
          'text-slate-600 font-semibold',
        )}
      >
        {headerContent.links.map((link) => (
          <li key={link.href}>
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
