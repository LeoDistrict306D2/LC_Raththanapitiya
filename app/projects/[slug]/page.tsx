import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc, formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${club.name}`,
      description: project.summary,
      publishedTime: project.date,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  // Neighbours in the archive, by date — an archive should let you step
  // forward and back through time, not jump to an unrelated "related" item.
  const ordered = byDateDesc(projects);
  const position = ordered.indexOf(project);
  const newer = position > 0 ? ordered[position - 1] : undefined;
  const older = position < ordered.length - 1 ? ordered[position + 1] : undefined;

  return (
    <>
      <PageMasthead
        kicker={`${formatDate(project.date, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })} · ${project.year}`}
        title={project.title}
        standfirst={project.summary}
        breadcrumb={{ href: '/projects', label: 'The archive' }}
      />

      <div className="wrap pt-10">
        <Photo image={project.heroImage} ratio="wide" priority sizes="100vw" />
      </div>

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {project.story && project.story.length > 0 ? (
            project.story.map((paragraph, index) => (
              <p
                key={index}
                className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="measure text-lg leading-relaxed text-ink-muted">{project.summary}</p>
          )}

          {project.objectives && project.objectives.length > 0 ? (
            <section className="mt-12" aria-labelledby="objectives">
              <p className="text-xs tracking-[0.2em] text-accent uppercase" id="objectives">
                As planned
              </p>
              <ol className="mt-5 border-t border-rule">
                {project.objectives.map((objective, index) => (
                  <li key={objective} className="flex gap-6 border-b border-rule py-3.5">
                    <span
                      aria-hidden
                      className="font-heading text-sm text-ink-faint tabular-nums"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-muted">{objective}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <dl className="border-t border-ink">
            {[
              { term: 'Date', value: formatDate(project.date) },
              { term: 'Leo year', value: project.year },
              { term: 'Location', value: project.location },
              { term: 'Category', value: project.category.replace(/-/g, ' ') },
            ]
              .filter((row) => Boolean(row.value))
              .map((row) => (
                <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                  <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">{row.term}</dt>
                  <dd className="text-right text-sm capitalize">{row.value}</dd>
                </div>
              ))}
          </dl>

          {project.impact && project.impact.length > 0 ? (
            <section className="mt-10" aria-labelledby="recorded">
              <p className="text-xs tracking-[0.2em] text-accent uppercase" id="recorded">
                Recorded
              </p>
              <dl className="mt-4 border-t border-rule">
                {project.impact.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
                  >
                    <dt className="text-sm text-ink-muted">{stat.label}</dt>
                    <dd className="font-heading text-2xl text-ink tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {project.partners && project.partners.length > 0 ? (
            <section className="mt-10" aria-labelledby="partners">
              <p className="text-xs tracking-[0.2em] text-accent uppercase" id="partners">
                With
              </p>
              <ul className="mt-3 space-y-1.5">
                {project.partners.map((partner) => (
                  <li key={partner.name} className="text-sm text-ink-muted">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="wrap pb-16" aria-labelledby="plates">
          <p className="text-xs tracking-[0.2em] text-accent uppercase" id="plates">
            Photographs
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <Photo
                key={image.src}
                image={image}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* Step through the archive by date, not by category. */}
      <nav
        aria-label="Archive navigation"
        className="border-t border-rule bg-panel"
      >
        <div className="wrap grid gap-6 py-10 sm:grid-cols-2">
          <div>
            {older ? (
              <Link href={`/projects/${older.slug}`} className="group block">
                <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
                  ← Earlier in the archive
                </p>
                <p className="mt-2 font-heading text-xl text-ink group-hover:text-accent">
                  {older.title}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {formatDate(older.date, { year: 'numeric', month: 'long' })}
                </p>
              </Link>
            ) : (
              <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
                Earliest entry in the archive
              </p>
            )}
          </div>

          <div className="sm:text-right">
            {newer ? (
              <Link href={`/projects/${newer.slug}`} className="group block">
                <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
                  Later in the archive →
                </p>
                <p className="mt-2 font-heading text-xl text-ink group-hover:text-accent">
                  {newer.title}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {formatDate(newer.date, { year: 'numeric', month: 'long' })}
                </p>
              </Link>
            ) : (
              <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
                Most recent entry
              </p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
