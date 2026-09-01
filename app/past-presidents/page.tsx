import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';
import { Spine, SpineEntry } from '@/components/Spine';

export const metadata: Metadata = {
  title: 'Succession',
  description: `Every president of ${club.name} since charter in 2008.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms · 2008 to present`}
        title="The succession."
        standfirst="Unbroken since charter. A gap in this list would mean either a year without a president or an error in the record — and it should be obvious which."
      />

      <div className="wrap band">
        <Spine>
          {years.map((president, index) => (
            <SpineEntry key={president.year} year={president.year} filled={index === 0}>
              <Reveal delay={Math.min(index, 8) * 35}>
                <p className="font-heading text-2xl text-ink">{president.name}</p>
                {president.theme ? (
                  <p className="mt-1.5 text-ink-muted italic">
                    &ldquo;{president.theme}&rdquo;
                  </p>
                ) : null}
                {president.highlights && president.highlights.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {president.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </SpineEntry>
          ))}
        </Spine>
      </div>
    </>
  );
}
