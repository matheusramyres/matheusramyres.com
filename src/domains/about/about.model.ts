import { IconName } from '@/ui/components/Icon';
type DescriptionCard = {
  icon: IconName;
  title: string;
  subText: string;
};
export interface About {
  title: string;
  description: string;
  longText: string;
  descriptionCards: Array<DescriptionCard>;
}
