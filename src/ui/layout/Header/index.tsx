import { headerContent } from '@/domains/layout/header.content';
import { clsx } from 'clsx';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed z-10 left-0 right-0 top-0 ">
      <nav
        className={clsx(
          'px-20 min-h-18',
          'flex items-center justify-between',
          'bg-white/50 backdrop-blur-sm',
          'border-b border-slate-200',
        )}
      >
        <div>
          <Image width={72} height={28} src="/logo.svg" alt={'logo'} />
        </div>
        <ul className="flex gap-5.5 text-slate-600 font-semibold">
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
    </header>
  );
}
