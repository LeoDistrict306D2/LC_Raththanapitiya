import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Counts } from '@/components/Counts';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="A club that keeps its own file."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Photo image={club.heroImage} ratio="landscape" sizes="(min-width: 768px) 33vw, 100vw" />
          <dl className="mt-10 border-t border-ink">
            {[
              { term: 'Chartered', value: '22 March 2008' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
              { term: 'Record covers', value: '2008 to present' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">{row.term}</dt>
                <dd className="text-right text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule bg-panel band">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Mission</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">{club.about.mission}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Vision</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">{club.about.vision}</p>
          </div>
        </div>
      </section>

      <div className="wrap band">
        <Counts stats={club.stats} label="The record to date" />
      </div>
    </>
  );
}
