import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 in Raththanapitiya.`,
  alternates: { canonical: '/join' },
};

const notes = [
  {
    title: 'Your work goes in the file',
    body: 'Every project you run is written up within a week of finishing, under your name, including what did not go to plan. That is either an incentive or a warning depending on your temperament.',
  },
  {
    title: 'You inherit the record',
    body: 'You will be handed the file for whatever you take on — seventeen years of what was tried, what it cost, and what happened. Most clubs cannot offer that.',
  },
  {
    title: 'You write the closing note',
    body: 'At the end of a project you write the honest paragraph at the bottom. It is the hardest part of the job and the most useful thing you will leave behind.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Add yourself to the record."
        standfirst="Open to anyone aged 12 to 30 in Raththanapitiya. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="what">
          <p className="text-xs tracking-[0.2em] text-accent uppercase" id="what">
            What it involves
          </p>
          <ol className="mt-6 border-t border-ink">
            {notes.map((note, index) => (
              <li key={note.title} className="border-b border-rule py-6">
                <div className="flex gap-6">
                  <span aria-hidden className="font-heading text-sm text-ink-faint tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-heading text-xl text-ink">{note.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{note.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <p className="text-xs tracking-[0.2em] text-accent uppercase" id="enquiry">
            Enquiry
          </p>
          <p className="measure mt-4 mb-8 text-ink-muted">
            This opens a pre-written email to the club secretary. We answer everything, usually
            within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
