// Placeholder headshot: renders initials on a deterministic accent color.
// Swap for real photos by passing `src` once images are available.

import Image from 'next/image';

const accentColors = [
  'var(--color-swiss-teal)',
  'var(--color-swiss-blue)',
  'var(--color-swiss-coral)',
  'var(--color-swiss-pink)',
  'var(--color-primary-600)',
  'var(--color-swiss-orange)',
  'var(--color-swiss-mint)',
  'var(--color-swiss-red)',
];

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return accentColors[Math.abs(hash) % accentColors.length];
}

interface AvatarProps {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}

export default function Avatar({ name, src, size = 80, className = '' }: AvatarProps) {
  if (src) {
    return (
      <div
        className={`overflow-hidden bg-neutral-200 flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 font-ui font-semibold text-white select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: colorFor(name),
        fontSize: size * 0.36,
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
