import Link from 'next/link';
import Avatar from '@/components/Avatar';
import PersonGrid from '@/components/PersonGrid';
import RichText from '@/components/RichText';
import TbaBox from '@/components/TbaBox';
import {
  workshop,
  challenge,
  speakers as prospectiveSpeakers,
  moderators,
  speakersNote,
  organizers,
} from '@/lib/data';

export default function HomePage() {
  const speakers = [...prospectiveSpeakers, ...moderators];

  return (
    <div className="site-container py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16">
        <span className="font-ui text-[0.6875rem] font-semibold uppercase tracking-wide bg-swiss-orange/15 text-swiss-orange rounded-full px-2.5 py-0.5">
          {workshop.status}
        </span>
        <h1 className="text-display-md md:text-display-lg text-neutral-900 mt-4 mb-4">
          {workshop.title}
        </h1>

        {/* Location & date */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-sm font-ui text-neutral-600 mb-2">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {workshop.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {workshop.date}
          </span>
        </div>
        <p className="text-xs font-ui text-neutral-400">{workshop.dateNote}</p>
      </section>

      {/* Abstract */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Abstract
        </h2>
        <div className="space-y-4">
          {workshop.abstract.map((para, i) => (
            <RichText
              key={i}
              paragraph={para}
              className="text-base text-neutral-700 leading-relaxed"
            />
          ))}
        </div>
      </section>

      {/* Speakers teaser */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
            Speakers &amp; Panel
          </h2>
          <Link
            href="/schedule"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Full schedule →
          </Link>
        </div>
        {speakers.length > 0 ? (
          <>
            <PersonGrid people={speakers} size={72} />
            <p className="text-xs font-ui text-neutral-400 mt-6 leading-relaxed">
              {speakersNote}
            </p>
          </>
        ) : (
          <TbaBox>{speakersNote}</TbaBox>
        )}
      </section>

      {/* Organizers teaser */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
            Organizers
          </h2>
          <Link
            href="/committee"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Full committee →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
          {organizers.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <Avatar name={person.name} src={person.photo} size={72} className="rounded-full" />
              <h3 className="text-sm font-bold text-neutral-900 mt-2.5 leading-tight">
                {person.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">{person.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom boxes: CFP + Challenge + Awards */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Call for Papers */}
          <Link
            href="/call-for-papers"
            className="group bg-neutral-100 hover:bg-primary-50 border border-transparent hover:border-primary-300 transition-colors p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                Call for Papers
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              Submit 8-page papers on detection, provenance, and authorized
              use of AI, including provenance for biological design.
              Double-blind, archival in the CVPR 2027 workshop proceedings.
            </p>
            <span className="font-ui text-sm font-medium text-primary-600 group-hover:text-primary-700 mt-4 inline-flex items-center gap-1">
              Read the call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {/* Challenge */}
          <Link
            href="/challenge"
            className="group bg-neutral-100 hover:bg-primary-50 border border-transparent hover:border-primary-300 transition-colors p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                {challenge.name}
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              Verify whether a talking-head video is driven by the person it
              depicts. Launches December 15, 2026; no paper required.
            </p>
            <span className="font-ui text-sm font-medium text-primary-600 group-hover:text-primary-700 mt-4 inline-flex items-center gap-1">
              About the challenge
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {/* Best Paper Award */}
          <div className="sm:col-span-2 bg-neutral-100 border border-transparent p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-swiss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900">
                Awards &amp; Prizes
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {workshop.awards}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
