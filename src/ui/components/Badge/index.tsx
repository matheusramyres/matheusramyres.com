import clsx from 'clsx';

export function Badge({ text }: { text: string }) {
  return (
    <div
      className={clsx(
        'text-text-primary text-[14px] font-medium',
        'flex items-center justify-center',
        'h-6 px-2.5 rounded-full bg-gray-100',
      )}
    >
      {text}
    </div>
  );
}
