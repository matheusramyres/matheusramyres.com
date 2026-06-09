'use client';
import { headerContent } from '@/domains/layout/header.content';
import { IconButton } from '@/ui/components/IconButton';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import SideBar from './components/Sidebar';

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <SideBar setIsOpened={setIsOpened} isOpened={isOpened} />
      <header className="fixed z-10 left-0 right-0 top-0 ">
        <nav
          className={clsx(
            'px-5 sm:px-20 min-h-18',
            'flex items-center justify-between',
            'bg-white/50 backdrop-blur-sm',
            'border-b border-slate-200',
          )}
        >
          <div>
            <Image
              width={72}
              height={28}
              src="/logo.svg"
              alt={'logo'}
              className="h-auto w-auto"
            />
          </div>

          <ul
            className={clsx(
              'hidden',
              'md:flex gap-5.5',
              'text-gray-600 font-semibold',
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
          <div className="block md:hidden">
            <IconButton
              icon="Menu"
              onClick={() => {
                setIsOpened(!isOpened);
              }}
              size={40}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
