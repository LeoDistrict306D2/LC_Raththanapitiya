import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { getInitials, sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The executive board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="Who keeps it now."
        standfirst="The seventeenth committee since charter. The Director of Archive is responsible for the record published on this site."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 50}>
                {member.photo ? (
                  <Photo image={member.photo} ratio="portrait" sizes="(min-width: 1024px) 24vw, 45vw" />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[3/4] items-center justify-center bg-panel font-heading text-4xl text-ink-faint"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-3 font-heading text-lg leading-tight text-ink">{member.name}</p>
                <p className="mt-1.5 text-xs tracking-[0.14em] text-ink-faint uppercase">
                  {member.position}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <p className="text-xs tracking-[0.2em] text-accent uppercase" id="directors">
              Officers and directors
            </p>
            <ul className="mt-6 border-t border-ink">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-heading text-lg text-ink">{member.name}</span>
                  <span className="shrink-0 text-xs tracking-[0.14em] text-ink-faint uppercase">
                    {member.position}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
