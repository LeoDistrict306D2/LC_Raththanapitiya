import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { pastPresidents } from '@/content/past-presidents';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { Counts } from '@/components/Counts';
import { Spine, SpineEntry } from '@/components/Spine';
import { ArchiveEntry } from '@/components/ArchiveEntry';

/**
 * Home.
 *
 * Two spines: one through the selected archive entries, one through the recent
 * succession. Both read top-down in reverse chronological order, so the page
 * itself is a timeline rather than a set of sections that happen to contain
 * dates.
 */
export default function HomePage() {
  const archive = byDateDesc(projects);
  const featured = archive.filter((project) => project.featured).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 4);
  const recentPresidents = [...pastPresidents]
    .sort((a, b) => b.year.localeCompare(a.year))
    .slice(0, 5);

  return (
    <>
      {/* Opening -------------------------------------------------------- */}
      <section className="wrap pt-14 pb-12 md:pt-20 md:pb-16">
        <p className="text-xs tracking-[0.2em] text-accent uppercase">
          {club.district} · Chartered 22 March 2008
        </p>
        <div className="mt-3 h-px w-10 bg-accent" aria-hidden />

        <h1 className="mt-8 max-w-4xl font-heading text-5xl leading-[1.04] text-ink md:text-6xl">
          {club.tagline}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-rule pt-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-7">
            {club.description}
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm text-page transition-colors hover:bg-accent-strong"
            >
              The archive
              <ArrowRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border border-rule-strong px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <Photo image={club.heroImage} ratio="wide" priority sizes="100vw" />
      </section>

      <div className="wrap band">
        <Counts stats={club.stats} label="The record to date" />
      </div>

      {/* Method --------------------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="method">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-accent uppercase">How it is kept</p>
            <h2 id="method" className="mt-4 font-heading text-3xl text-ink md:text-4xl">
              Four rules for an archive
            </h2>
          </div>

          <ol className="md:col-span-7 md:col-start-6">
            {club.about.values.map((value, index) => (
              <li key={value.title} className="border-b border-rule py-6 first:border-t">
                <Reveal delay={index * 60}>
                  <div className="flex gap-6">
                    <span
                      aria-hidden
                      className="font-heading text-lg text-ink-faint tabular-nums"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl text-ink">{value.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink-muted">{value.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Archive spine --------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="archive">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Selected entries</p>
            <h2 id="archive" className="mt-4 font-heading text-3xl text-ink md:text-4xl">
              From the archive
            </h2>
          </div>
          <Link href="/projects" className="text-sm text-accent hover:text-accent-strong">
            All {projects.length} entries →
          </Link>
        </div>

        <Spine className="mt-14">
          {featured.map((project, index) => (
            <ArchiveEntry
              key={project.id}
              project={project}
              index={index}
              filled={index === 0}
            />
          ))}
        </Spine>
      </section>

      {/* Succession spine ------------------------------------------------ */}
      <section className="border-t border-rule" aria-labelledby="succession">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Succession</p>
            <h2 id="succession" className="mt-4 font-heading text-3xl text-ink md:text-4xl">
              Seventeen committees
            </h2>
            <p className="measure mt-4 text-ink-muted">
              Every president since charter, with the theme they served under.
            </p>
            <Link
              href="/past-presidents"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              The full succession →
            </Link>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Spine>
              {recentPresidents.map((president, index) => (
                <SpineEntry key={president.year} year={president.year} filled={index === 0}>
                  <Reveal delay={index * 45}>
                    <p className="font-heading text-xl text-ink">{president.name}</p>
                    {president.theme ? (
                      <p className="mt-1 text-sm text-ink-muted italic">
                        &ldquo;{president.theme}&rdquo;
                      </p>
                    ) : null}
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="mt-2 space-y-1">
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
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="border-t border-rule bg-panel" aria-labelledby="board-heading">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-accent uppercase">This year</p>
            <h2 id="board-heading" className="mt-4 font-heading text-3xl text-ink md:text-4xl">
              Who keeps it now
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The board for {leadership[0]?.term ?? 'this year'}. The Director of Archive is
              responsible for the record published here.
            </p>
            <Link
              href="/board"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              The full board →
            </Link>
          </div>

          <ul className="md:col-span-7 md:col-start-6">
            {leadership.map((member, index) => (
              <li
                key={member.id}
                className="flex flex-col gap-0.5 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <Reveal delay={index * 40} className="contents">
                  <span className="font-heading text-lg text-ink">{member.name}</span>
                  <span className="shrink-0 text-xs tracking-[0.14em] text-ink-faint uppercase">
                    {member.position}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">
              Add yourself to the record.
            </h2>
            <p className="measure mt-3 text-on-inverse/75">
              Open to anyone aged 12 to 30 in Raththanapitiya. Whatever you do here will be written
              down, which is either an incentive or a warning depending on your temperament.
            </p>
          </div>
          <Link
            href="/join"
            className="group inline-flex shrink-0 items-center gap-2 bg-page px-6 py-3 text-sm text-ink transition-colors hover:bg-accent hover:text-page"
          >
            Join the club
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
