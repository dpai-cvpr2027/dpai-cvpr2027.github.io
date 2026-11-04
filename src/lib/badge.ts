import type { Person } from './data';

export type BadgeTone = 'primary' | 'neutral';

export interface Badge {
  label: string;
  tone: BadgeTone;
}

// Picks the single status chip to show for a person. Confirmation status takes
// precedence (e.g. "Confirmed", "Pending Location", "Tentative"), falling back
// to a discipline/role label such as "Moderator". Confirmed reads as a primary
// (highlighted) chip; everything pending/tentative reads neutral.
export function badgeFor(person: Person): Badge | null {
  if (person.status) {
    const confirmed = person.status.toLowerCase() === 'confirmed';
    return { label: person.status, tone: confirmed ? 'primary' : 'neutral' };
  }
  if (person.role) return { label: person.role, tone: 'primary' };
  if (person.confirmed === true) return { label: 'Confirmed', tone: 'primary' };
  if (person.confirmed === false) return { label: 'TBA', tone: 'neutral' };
  return null;
}

export const badgeToneClass: Record<BadgeTone, string> = {
  primary: 'bg-primary-100 text-primary-700',
  neutral: 'bg-neutral-100 text-neutral-500',
};
