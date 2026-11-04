import type { DateItem } from '@/lib/data';

interface DateListProps {
  items: DateItem[];
}

// Two-column list of dates and milestones.
export default function DateList({ items }: DateListProps) {
  return (
    <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
      {items.map((d) => (
        <div
          key={d.date + d.label}
          className="flex flex-col sm:flex-row sm:gap-4 py-3"
        >
          <div className="sm:w-44 flex-shrink-0 font-ui text-sm font-medium text-neutral-900 tabular-nums">
            {d.date}
          </div>
          <div className="text-sm text-neutral-700 leading-relaxed">
            {d.label}
            {d.mandatory && (
              <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-swiss-orange/15 text-swiss-orange px-2 py-0.5 leading-none ml-2 whitespace-nowrap align-middle">
                Mandatory
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
