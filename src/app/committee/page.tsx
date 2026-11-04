import type { Metadata } from 'next';
import PersonCard from '@/components/PersonCard';
import { organizers, programCommittee } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Committee',
};

export default function CommitteePage() {
  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900 mb-3">Committee</h1>
      </header>

      {/* Organizing Committee */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Organizing Committee
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {organizers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Program Committee */}
      <section>
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Program Committee
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed mb-6">
          {programCommittee.description}
        </p>

        {/* Self-nomination button (shown once a form URL is set) */}
        {programCommittee.nominateUrl && (
          <div className="mb-10">
            <a
              href={programCommittee.nominateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors px-5 py-3"
            >
              Self-nominate to review
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-xs font-ui text-neutral-400 mt-2">
              Interested in reviewing? We welcome self-nominations to join the
              Program Committee.
            </p>
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {programCommittee.members.map((person) => (
            <li key={person.name}>
              <p className="font-bold text-neutral-900 leading-tight">
                {person.name}
              </p>
              {person.affiliation && (
                <p className="text-sm text-neutral-500 mt-0.5">
                  {person.affiliation}
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="text-sm text-neutral-500 italic mt-10">
          {programCommittee.note}
        </p>
      </section>
    </div>
  );
}
