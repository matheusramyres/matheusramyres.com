'use client';
import { TypeAnimation } from 'react-type-animation';

type TextAnimationProps = {
  text: string;
};
export function TextAnimation({ text }: TextAnimationProps) {
  return <TypeAnimation sequence={[text]} speed={10} />;
}
