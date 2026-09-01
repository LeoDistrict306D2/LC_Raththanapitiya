import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';
import { Spine, SpineEntry } from '@/components/Spine';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition, dated."
        standfirst="On the same spine as everything else. Awards are entries in the record, not a separate trophy page."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <Spine>
            {awards.map((award, index) => (
              <SpineEntry key={award.id} year={award.year} filled={index === 0}>
                <Reveal delay={index * 50}>
                  <h2 className="font-heading text-2xl text-ink">{award.title}</h2>
                  <p className="mt-1.5 text-xs tracking-[0.14em] text-ink-faint uppercase">
                    {award.competition ?? '—'}
                    {award.level ? ` · ${levelLabel[award.level] ?? award.level}` : ''}
                  </p>
                  {award.description ? (
                    <p className="measure mt-3 leading-relaxed text-ink-muted">
                      {award.description}
                    </p>
                  ) : null}
                </Reveal>
              </SpineEntry>
            ))}
          </Spine>
        )}
      </div>
    </>
  );
}
