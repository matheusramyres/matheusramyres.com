import { IconName } from '@/ui/components/Icon';
type SkillCard = {
  icon: IconName;
  title: string;
  badges: Array<string>;
};
export interface Skill {
  title: string;
  description: string;
  skillCards: Array<SkillCard>;
}
