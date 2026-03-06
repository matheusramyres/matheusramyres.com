import clsx from 'clsx';

export function Badge({ text }: { text: string }) {
  return (
    <div
      className={clsx(
        'text-text-primary text-[12px] font-medium',
        'flex items-center justify-center',
        'h-5 px-2.5 rounded-full bg-gray-100',
      )}
    >
      {text}
    </div>
  );
}
