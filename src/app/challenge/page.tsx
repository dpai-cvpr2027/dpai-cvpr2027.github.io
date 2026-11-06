import type { Metadata } from 'next';
import DateList from '@/components/DateList';
import SectionHeading from '@/components/SectionHeading';
import { challenge } from '@/lib/data';

export const metadata: Metadata = {
  title: challenge.name,
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base text-neutral-700 leading-relaxed">
          <span className="text-primary-500 flex-shrink-0" aria-hidden="true">▪</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((p, i) => (
        <p key={i} className="text-base text-neutral-700 leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function ChallengePage() {
  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <span className="font-ui text-[0.6875rem] font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-2.5 py-0.5">
          Competition track
        </span>
        <h1 className="text-display-md text-neutral-900 mt-4 mb-3">
          {challenge.name}
        </h1>
        <p className="text-lg text-neutral-800 leading-relaxed">
          {challenge.summary}
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed mt-3">
          {challenge.hosts}
        </p>
        <div className="mt-6">
          <a
            href={challenge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors px-5 py-3"
          >
            Official challenge page
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-xs font-ui text-neutral-400 mt-2">
            Registration, the public protocol, and rules will be published on
            the official challenge page at launch.
          </p>
        </div>
      </header>

      {/* Key dates at a glance */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Launch', value: 'Dec 15, 2026' },
            { label: 'Final submissions', value: 'Jun 6, 2027 AoE' },
            { label: 'Results at CVPR', value: 'Jun 20 or 21, 2027' },
          ].map((k) => (
            <div key={k.label} className="bg-neutral-100 p-5">
              <p className="font-ui text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {k.label}
              </p>
              <p className="font-ui text-base font-semibold text-neutral-900 mt-1">
                {k.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading>Overview</SectionHeading>
        <Paragraphs items={challenge.overview} />
      </section>

      <section className="mb-12">
        <SectionHeading>Tasks</SectionHeading>
        <ol className="space-y-5">
          {challenge.tasks.map((task, i) => (
            <li key={task.title} className="flex gap-4">
              <span className="font-ui text-sm font-semibold text-primary-600 tabular-nums pt-0.5">
                {i + 1}.
              </span>
              <div>
                <h3 className="font-bold text-neutral-900">{task.title}</h3>
                <p className="text-base text-neutral-700 leading-relaxed mt-1">
                  {task.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <SectionHeading>Data</SectionHeading>
        <Paragraphs items={challenge.data} />
      </section>

      <section className="mb-12">
        <SectionHeading>Submissions</SectionHeading>
        <Bullets items={challenge.submission} />
      </section>

      <section className="mb-12">
        <SectionHeading>Evaluation</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {challenge.stages.map((stage, i) => (
            <div key={stage.title} className="border border-neutral-200 p-5">
              <p className="font-ui text-xs font-semibold text-primary-600">
                Stage {i + 1}
              </p>
              <h3 className="font-bold text-neutral-900 mt-1">{stage.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mt-1">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
        <Bullets items={challenge.metrics} />
      </section>

      <section className="mb-12">
        <SectionHeading>Timeline</SectionHeading>
        <DateList items={challenge.timeline} />
        <div className="space-y-3 mt-4">
          {challenge.timelineNotes.map((n, i) => (
            <p key={i} className="text-xs font-ui text-neutral-500 leading-relaxed">
              {n}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading>Prizes</SectionHeading>
        <p className="text-base text-neutral-700 leading-relaxed">
          {challenge.prizes}
        </p>
      </section>

      <section className="mb-12">
        <SectionHeading>Consent, Privacy &amp; Evaluation Integrity</SectionHeading>
        <Paragraphs items={challenge.integrity} />
      </section>

      <section>
        <SectionHeading>At the Workshop</SectionHeading>
        <p className="text-base text-neutral-700 leading-relaxed">
          {challenge.atWorkshop}
        </p>
      </section>
    </div>
  );
}
