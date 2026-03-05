'use client';
import { Config } from 'dompurify';
import DOMPurify from 'isomorphic-dompurify';
import { type HTMLAttributes } from 'react';

interface RichContentProps extends HTMLAttributes<HTMLDivElement> {
  html: string;
  purifyConfig?: Config;
}

export const RichContent = ({
  html,
  className = '',
  purifyConfig,
  ...divProps
}: RichContentProps) => {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'br',
      'hr',
      'strong',
      'em',
      'u',
      's',
      'sub',
      'sup',
      'ul',
      'ol',
      'li',
      'a',
      'img',
      'blockquote',
      'code',
      'pre',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'iframe',
    ],
    ALLOWED_ATTR: [
      'href',
      'src',
      'alt',
      'title',
      'class',
      'style',
      'target',
      'rel',
      'frameborder',
      'allowfullscreen',
      'allow',
    ],
    ...purifyConfig,
  });

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitized }}
      {...divProps}
    />
  );
};
