import type { Metadata } from 'next';
import PersonCard from '@/components/PersonCard';
import SectionHeading from '@/components/SectionHeading';
import TbaBox from '@/components/TbaBox';
import {
  schedule,
  scheduleNote,
  recordingNote,
  keynoteSpeakers,
  invitedSpeakers,
  panelists,
  speakersNote,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Schedule',
};

const speakerGroups = [
  { title: 'Keynote Speakers', people: keynoteSpeakers },
  { title: 'Invited Speakers', people: invitedSpeakers },
  { title: 'Panelists', people: panelists },
];

export default function SchedulePage() {
  const anySpeakers = speakerGroups.some((g) => g.people.length > 0);

  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900 mb-3">Schedule</h1>
      </header>

      {/* Program */}
      <section className="mb-16">
        <SectionHeading className="mb-3">Preliminary Program</SectionHeading>
        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
          {scheduleNote}
        </p>
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {schedule.map((item, i) => (
            <div key={i} className="flex gap-4 py-3.5">
              <div className="w-28 flex-shrink-0 font-ui text-xs text-neutral-500 pt-0.5 tabular-nums">
                {item.time}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3
                    className={`text-sm font-semibold ${
                      item.highlight ? 'text-primary-700' : 'text-neutral-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.tba && (
                    <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-neutral-100 text-neutral-500 px-2 py-0.5 leading-none">
                      TBA
                    </span>
                  )}
                </div>
                {item.detail && (
                  <p className="text-sm text-neutral-500 mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs font-ui text-neutral-400 mt-3 leading-relaxed">
          {recordingNote}
        </p>
      </section>

      {/* Speakers */}
      <section className="mb-16">
        <SectionHeading>Speakers &amp; Panelists</SectionHeading>
        {anySpeakers ? (
          <div className="space-y-10">
            {speakerGroups
              .filter((g) => g.people.length > 0)
              .map((g) => (
                <div key={g.title}>
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-4">
                    {g.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {g.people.map((p) => (
                      <PersonCard key={p.name} person={p} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <TbaBox>{speakersNote}</TbaBox>
        )}
      </section>

      {/* Accepted Papers */}
      <section>
        <SectionHeading>Accepted Papers</SectionHeading>
        <TbaBox>
          Accepted papers will be listed here after author notification on
          March 19, 2027.
        </TbaBox>
      </section>
    </div>
  );
}
