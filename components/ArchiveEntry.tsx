import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { SpineEntry } from './Spine';

/**
 * One project, pinned to the timeline spine.
 *
 * Designed to sit inside a `<Spine>`. The pin is filled for the most recent
 * entry so the top of the archive is marked without needing a badge.
 */
export function ArchiveEntry({
  project,
  index = 0,
  filled = false,
}: {
  project: Project;
  index?: number;
  filled?: boolean;
}) {
  return (
    <SpineEntry year={new Date(project.date).getFullYear().toString()} filled={filled}>
      <Reveal delay={Math.min(index, 4) * 60}>
        <article className="grid gap-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
              <Photo
                image={project.heroImage}
                ratio="landscape"
                sizes="(min-width: 768px) 32vw, 100vw"
              />
            </Link>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
              {formatDate(project.date, { year: 'numeric', month: 'long', day: 'numeric' })}
              {project.location ? ` · ${project.location}` : ''}
            </p>

            <h3 className="mt-2.5 font-heading text-2xl leading-snug text-ink md:text-3xl">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 leading-relaxed text-ink-muted">{project.summary}</p>

            {project.impact && project.impact.length > 0 ? (
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {project.impact.slice(0, 3).map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-heading text-xl text-ink tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="mt-0.5 text-[0.65rem] tracking-[0.14em] text-ink-faint uppercase">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            ) : null}

            <Link
              href={`/projects/${project.slug}`}
              className="group mt-5 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong"
            >
              Open the file
              <ArrowRight
                aria-hidden
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </article>
      </Reveal>
    </SpineEntry>
  );
}
