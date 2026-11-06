import Avatar from './Avatar';
import type { Person } from '@/lib/data';
import { badgeFor, badgeToneClass } from '@/lib/badge';

interface PersonCardProps {
  person: Person;
  showBio?: boolean;
}

export default function PersonCard({ person, showBio = true }: PersonCardProps) {
  const badge = badgeFor(person);
  return (
    <article className="group bg-white border border-neutral-200 hover:border-primary-300 transition-colors duration-200 p-5 flex gap-4">
      <Avatar name={person.name} src={person.photo} size={64} />
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-bold text-neutral-900">
            {person.url ? (
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-700 transition-colors"
              >
                {person.name}
              </a>
            ) : (
              person.name
            )}
          </h3>
          {badge && (
            <span
              className={`font-ui text-[0.625rem] font-semibold uppercase tracking-wide px-2 py-0.5 leading-none ${badgeToneClass[badge.tone]}`}
            >
              {badge.label}
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-500 mt-0.5">{person.affiliation}</p>
        {(person.role || person.topic) && (
          <p className="text-sm text-neutral-700 mt-1">
            {person.role && <span className="font-semibold">{person.role}</span>}
            {person.role && person.topic && ' · '}
            {person.topic && <em>{person.topic}</em>}
          </p>
        )}
        {showBio && person.bio && (
          <p className="text-sm text-neutral-700 leading-relaxed mt-2">
            {person.bio}
          </p>
        )}
      </div>
    </article>
  );
}
