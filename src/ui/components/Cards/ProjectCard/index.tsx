'use client';
import clsx from 'clsx';
import { motion } from 'motion/react';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Badge } from '../../Badge';
import { Button } from '../../Button';
import { Icon } from '../../Icon';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  imagePath: string;
  badges: Array<string>;
  title: string;
  subText?: string;
  descriptionList?: Array<string>;
  productionUrl?: string;
  repository?: string;
}

export function ProjectCard({
  imagePath,
  title,
  badges,
  subText,
  descriptionList,
  productionUrl,
  repository,
}: ProjectCardProps) {
  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <div
      className={clsx(
        'max-w-102.5 w-full min-h-150',
        'border border-border-default',
        'bg-white rounded-[14px]',
        'hover:scale-105 transition duration-200 ease-in-out',
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.6,
          delay: 0 * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative w-full h-56 overflow-hidden rounded-t-[14px]">
          <Image
            sizes="(max-width: 768px) 100vw, 300px"
            fill
            src={imagePath}
            alt="project"
            loading="eager"
            className={clsx(
              'rounded-t-[14px] max-w-102 w-full max-h-66 h-full object-cover',
              // 'hover:scale-105 transition duration-200 ease-in-out',
            )}
          />
        </div>
      </motion.div>
      <div className="p-6">
        <div className="flex items-center gap-2.5 mb-3.5">
          <p className="text-text-primary font-semibold text-xl">{title}</p>
        </div>
        <div className="text-text-secondary mb-2.5">{subText}</div>
        <ul className="mb-4">
          {descriptionList?.map((descriptionItem, index) => (
            <li
              key={descriptionItem + index}
              className="flex flex-row items-center gap-2 text-text-secondary"
            >
              <Icon icon="Check" size={18} />
              {descriptionItem}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3.5 mb-4">
          {badges.map((badge, index) => (
            <Badge key={badge + index} text={badge} />
          ))}
        </div>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="px-2.5 py-1.5"
            onClick={() => openLink(repository)}
          >
            <Icon icon="Github" />
            Código
          </Button>
          <Button
            className="px-2.5 py-1.5"
            onClick={() => openLink(productionUrl)}
          >
            <Icon icon="ExternalLink" />
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
