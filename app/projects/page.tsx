import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Spine } from '@/components/Spine';
import { ArchiveEntry } from '@/components/ArchiveEntry';

export const metadata: Metadata = {
  title: 'Archive',
  description: `The full project archive of ${club.name}, 2008 to the present.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} entries · 2008 to present`}
        title="The archive."
        standfirst="Every project, newest first, pinned to the year it ran. Unsuccessful projects are retained with their closing notes rather than removed."
      />

      <div className="wrap band">
        <Spine>
          {entries.map((project, index) => (
            <ArchiveEntry key={project.id} project={project} index={index} filled={index === 0} />
          ))}
        </Spine>
      </div>
    </>
  );
}
