import Avatar from './Avatar';
import type { Person } from '@/lib/data';
import { badgeFor, badgeToneClass } from '@/lib/badge';

interface PersonGridProps {
  people: Person[];
  /** Avatar diameter in px. */
  size?: number;
}

export default function PersonGrid({ people, size = 80 }: PersonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
      {people.map((person) => {
        const badge = badgeFor(person);
        return (
          <div
            key={person.name}
            className="flex flex-col items-center text-center"
          >
            <Avatar
              name={person.name}
              src={person.photo}
              size={size}
              className="rounded-full"
            />
            <h3 className="text-sm font-bold text-neutral-900 mt-3 leading-tight">
              {person.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              {person.affiliation}
            </p>
            {badge && (
              <span
                className={`font-ui text-[0.625rem] font-semibold uppercase tracking-wide px-2 py-0.5 leading-none mt-2 ${badgeToneClass[badge.tone]}`}
              >
                {badge.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
