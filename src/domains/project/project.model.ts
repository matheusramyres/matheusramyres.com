type ProjectCard = {
  image: string;
  name: string;
  subText: string;
  descriptionList: Array<string>;
  badges: Array<string>;
  repository: string;
  productionUrl: string;
};
export interface Skill {
  title: string;
  description: string;
  projectCards: Array<ProjectCard>;
}
