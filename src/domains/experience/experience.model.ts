export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: Array<string>;
}

export interface Experience {
  title: string;
  description: string;
  experiences: Array<ExperienceItem>;
}
