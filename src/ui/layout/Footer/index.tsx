import { contactContent } from '@/domains/contact/contact.content';
import { profileContent } from '@/domains/profile/profile.content';
import { IconLink } from '@/ui/components/IconLink';
import clsx from 'clsx';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skill' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#project' },
  { label: 'Contato', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className={clsx('bg-[#07101d] text-white', 'px-5 md:px-16 py-12')}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="lg:max-w-sm">
          <p className="text-2xl font-semibold">{profileContent.name}</p>
          <p className="text-sm text-slate-400 font-medium mt-3">
            {profileContent.role}
          </p>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            {profileContent.description}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-xl font-semibold">Navegação</p>
          <nav className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="lg:max-w-xs">
          <p className="text-xl font-semibold">Conecte-se</p>
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            {contactContent.github && (
              <div className="flex flex-col items-center gap-2 text-slate-300 hover:text-white">
                <IconLink
                  icon="Github"
                  size={24}
                  href={contactContent.github}
                  target="_blank"
                  rel="noreferrer noopener"
                />
                <span className="text-xs">GitHub</span>
              </div>
            )}
            {contactContent.linkedin && (
              <div className="flex flex-col items-center gap-2 text-slate-300 hover:text-white">
                <IconLink
                  icon="Linkedin"
                  size={24}
                  href={contactContent.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                />
                <span className="text-xs">LinkedIn</span>
              </div>
            )}
            {contactContent.instagram && (
              <div className="flex flex-col items-center gap-2 text-slate-300 hover:text-white">
                <IconLink
                  icon="Instagram"
                  size={24}
                  href={contactContent.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                />
                <span className="text-xs">Instagram</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'mt-10 border-t border-slate-800 pt-6',
          'flex flex-col md:flex-row items-center justify-center gap-4',
          'text-slate-400 text-sm',
        )}
      >
        <p>
          Created & Developed by {profileContent.name} 🦎 2026 - Todos os
          direitos reservados
        </p>
      </div>
    </footer>
  );
}
