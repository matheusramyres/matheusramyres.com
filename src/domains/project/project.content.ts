import { Skill } from './project.model';

export const ProjectContent: Skill = {
  title: 'Projetos em Destaque',
  description:
    'Aqui estão alguns dos projetos em que trabalhei recentemente. Cada um deles representa um desafio único e uma experiência de aprendizado.',
  projectCards: [
    {
      image: '/projects/portfolio.png',
      name: 'Portfólio',
      subText: 'Vitrine pessoal de projetos e habilidades',
      descriptionList: [
        'Validação de campos',
        'Envio de email',
        'Integração com API externa',
      ],
      badges: [
        'React',
        'Next.js',
        'Typescript',
        'Motion',
        'Tailwind',
        'Zod',
        'Resend',
      ],
      productionUrl: 'https://www.ramyres.com/',
      repository: 'https://github.com/matheusramyres/matheusramyres.com',
    },
    {
      image: '/coming-soon.png',
      name: 'Projeto 02 - Em breve',
      subText: 'Apresentação do projeto',
      descriptionList: [
        'Infromação do projeto 01',
        'Infromação do projeto 02',
        'Infromação do projeto 03',
        'Infromação do projeto 04',
      ],
      badges: [
        'Tecnologia-01',
        'Tecnologia-02',
        'Tecnologia-03',
        'Tecnologia-04',
      ],
      productionUrl: '#',
      repository: '#',
    },
    {
      image: '/coming-soon.png',
      name: 'Projeto 03 - Em breve',
      subText: 'Apresentação do projeto',
      descriptionList: [
        'Infromação do projeto 01',
        'Infromação do projeto 02',
        'Infromação do projeto 03',
        'Infromação do projeto 04',
      ],
      badges: [
        'Tecnologia-01',
        'Tecnologia-02',
        'Tecnologia-03',
        'Tecnologia-04',
      ],
      productionUrl: '#',
      repository: '#',
    },
    {
      image: '/coming-soon.png',
      name: 'Projeto 04 - Em breve',
      subText: 'Apresentação do projeto',
      descriptionList: [
        'Infromação do projeto 01',
        'Infromação do projeto 02',
        'Infromação do projeto 03',
        'Infromação do projeto 04',
      ],
      badges: [
        'Tecnologia-01',
        'Tecnologia-02',
        'Tecnologia-03',
        'Tecnologia-04',
      ],
      productionUrl: '#',
      repository: '#',
    },
  ],
};
