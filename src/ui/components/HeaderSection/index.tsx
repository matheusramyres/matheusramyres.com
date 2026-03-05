interface HeaderSectionProps {
  title: string;
  subText: string;
}

export function HeaderSection({ title, subText }: HeaderSectionProps) {
  return (
    <header className="text-center">
      <p className="text-2xl md:text-3xl font-normal">{title}</p>
      <p className="text-base md:text-xl mt-6">{subText}</p>
    </header>
  );
}
