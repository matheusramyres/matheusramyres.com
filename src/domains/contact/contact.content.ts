import { profileContent } from '@/domains/profile/profile.content';
import { ContactInfo } from './contact.model';

export const contactContent: ContactInfo = {
  title: 'Contato',
  description:
    'Entre em contato para discutir projetos, oportunidades ou uma conversa rápida.',
  email: profileContent.email,
  emailLink:
    'mailto:matheus63360@gmail.com?subject=Contato%20via%20portfolio&body=Ol%C3%A1%20Matheus%2C%20entrei%20em%20contato%20pelo%20seu%20portfolio%20e...',
  phone: '(83) 99412-7786',
  whatsapp:
    'https://api.whatsapp.com/send?phone=5583994127786&text=Ol%C3%A1%20Matheus%2C%20tudo%20bem%3F%20Vim%20pelo%20portfolio.',
  linkedin: profileContent.linkedin,
  github: profileContent.github,
  instagram: 'https://www.instagram.com/matheusramyres/',
  location: 'https://maps.app.goo.gl/AEnC2hsWrBcF8RaAA',
};
