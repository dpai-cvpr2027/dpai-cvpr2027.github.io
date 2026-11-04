interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  children,
  id,
  className = 'mb-6',
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-sm font-bold text-neutral-900 uppercase tracking-wide scroll-mt-20 ${className}`}
    >
      {children}
    </h2>
  );
}
