import type { Metadata } from 'next';
import Link from 'next/link';
import DateList from '@/components/DateList';
import SectionHeading from '@/components/SectionHeading';
import { workshop, cfp } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Call for Papers',
};

export default function CallForPapersPage() {
  const submissionsOpen = workshop.openReviewUrl !== '#';

  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900 mb-3">Call for Papers</h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          We invite archival research papers on detection, provenance, and
          authorized use of generative AI for {workshop.shortName}.
        </p>
      </header>

      {/* OpenReview button */}
      <section className="mb-12">
        <a
          href={workshop.openReviewUrl}
          aria-disabled={!submissionsOpen}
          className={`inline-flex items-center gap-2 font-ui text-sm font-semibold text-white px-5 py-3 transition-colors ${
            submissionsOpen
              ? 'bg-primary-600 hover:bg-primary-700'
              : 'bg-primary-600/50 pointer-events-none'
          }`}
        >
          Submit on OpenReview
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        {!submissionsOpen && (
          <p className="text-xs font-ui text-neutral-400 mt-2">
            The OpenReview portal opens upon workshop acceptance (decision
            expected December 22, 2026). This link will be enabled then.
          </p>
        )}
      </section>

      {/* Tracks */}
      <section className="mb-12">
        <SectionHeading>Submission Tracks</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cfp.tracks.map((track) => {
            const inner = (
              <>
                <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-2 py-0.5 leading-none self-start">
                  {track.tag}
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-3">
                  {track.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-1 flex-1">
                  {track.body}
                </p>
                <p className="font-ui text-xs font-medium text-neutral-900 mt-4">
                  {track.deadline}
                </p>
              </>
            );
            return track.href.startsWith('/') ? (
              <Link
                key={track.title}
                href={track.href}
                className="bg-neutral-100 hover:bg-primary-50 border border-transparent hover:border-primary-300 transition-colors p-6 flex flex-col"
              >
                {inner}
              </Link>
            ) : (
              <a
                key={track.title}
                href={track.href}
                className="bg-neutral-100 hover:bg-primary-50 border border-transparent hover:border-primary-300 transition-colors p-6 flex flex-col"
              >
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <SectionHeading>Topics of Interest</SectionHeading>
        <div className="space-y-6">
          {cfp.topicGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-neutral-900 mb-2">
                {group.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {group.topics.map((topic) => (
                  <li key={topic} className="flex gap-2 text-sm text-neutral-700 leading-relaxed">
                    <span className="text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true">▪</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Submission details */}
      <section className="mb-12">
        <SectionHeading id="submission-details">Submission Details</SectionHeading>
        <ul className="space-y-3">
          {cfp.details.map((d, i) => (
            <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
              <span className="text-primary-500 flex-shrink-0" aria-hidden="true">▪</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Important dates */}
      <section className="mb-12">
        <SectionHeading>Important Dates</SectionHeading>
        <DateList items={cfp.importantDates} />
        <p className="text-xs font-ui text-neutral-400 mt-3 leading-relaxed">
          {cfp.datesNote}
        </p>
      </section>

      {/* Publication policy */}
      <section className="mb-12">
        <SectionHeading>Publication Policy</SectionHeading>
        <div className="space-y-4">
          {cfp.publicationPolicy.map((p, i) => (
            <p key={i} className="text-base text-neutral-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Conflicts */}
      <section>
        <SectionHeading>Conflicts &amp; Eligibility</SectionHeading>
        <div className="space-y-4">
          {cfp.conflicts.map((p, i) => (
            <p key={i} className="text-base text-neutral-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
