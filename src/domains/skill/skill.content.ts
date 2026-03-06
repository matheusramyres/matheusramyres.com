import { Skill } from './skill.model';

export const skillContent: Skill = {
  title: 'Skills & Tecnologias',
  description:
    'Sou um desenvolvedor full stack apaixonado, com mais de 5 anos de experiência criando aplicações web. Adoro transformar problemas complexos em soluções simples e elegantes.',
  skillCards: [
    {
      icon: 'Box',
      title: 'Stack principal',
      badges: ['React', 'Next.js', 'Nest.js', 'Typescript', 'PostgreSQL'],
    },
    {
      icon: 'Layout',
      title: 'Front End',
      badges: [
        'React',
        'Next.js',
        'Typescript',
        'Vue.js',
        'Redux',
        'Zustand',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      icon: 'Server',
      title: 'Back End',
      badges: [
        'Node.js',
        'Express',
        'Nest.js',
        'JAVA',
        'Quarkus',
        'Python',
        'RESTful API',
        'JWT',
        'Microsserviços',
      ],
    },
    {
      icon: 'Database',
      title: 'Banco de Dados',
      badges: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Redis',
        'Prisma',
        'Mongoose',
        'SQL',
        'NoSQL',
      ],
    },
    {
      icon: 'Cloud',
      title: 'DevOps & Cloud',
      badges: [
        'Docker ',
        'AWS',
        'Git',
        'CI/CD',
        'Vercel',
        'GitHub Actions',
        'Linux',
        'Netlify',
        'Render',
        'Azure',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Mobile',
      badges: [
        'React Native',
        'Flutter',
        'Responsive Design',
        'PWA',
        'Mobile-first',
      ],
    },
    {
      icon: 'Tool',
      title: 'Outras Ferramentas',
      badges: [
        'VS Code',
        'Figma',
        'Postamn',
        'Jest',
        'Cypress',
        'Webpack',
        'ESlint',
        'Prettier',
      ],
    },
  ],
};
