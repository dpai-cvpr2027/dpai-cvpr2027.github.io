import type { RichParagraph } from '@/lib/data';

interface RichTextProps {
  paragraph: RichParagraph;
  className?: string;
}

// Renders a paragraph made of plain strings and inline links.
export default function RichText({ paragraph, className = '' }: RichTextProps) {
  return (
    <p className={className}>
      {paragraph.map((seg, i) =>
        typeof seg === 'string' ? (
          seg
        ) : (
          <a
            key={i}
            href={seg.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 underline decoration-primary-300 underline-offset-2 hover:decoration-primary-600 transition-colors"
          >
            {seg.text}
          </a>
        ),
      )}
    </p>
  );
}
