'use client';
import { ChevronDown, ChevronUp } from '@deemlol/next-icons';
import clsx from 'clsx';
import { HTMLAttributes, useState } from 'react';

interface ViewMoreContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}

export function ViewMoreContainer({
  children,
  className,
}: ViewMoreContainerProps) {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className={clsx(className, 'relative')}>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-700 ease-in-out',
          seeMore ? 'max-h-500 opacity-100' : 'max-h-70 opacity-90',
        )}
      >
        {children}
      </div>
      <button
        onClick={handleSeeMore}
        className={clsx(
          'text-blue-800 font-semibold mt-8',
          'hover:text-blue-600 cursor-pointer',
          'flex items-center gap-1',
        )}
      >
        <span>{seeMore ? 'Ver menos' : 'Ver mais'}</span>
        {seeMore ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
      </button>
    </div>
  );
}
