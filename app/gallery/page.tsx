import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Photographs',
  description: `Photographs from the archive of ${club.name}, 2008 to the present.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="Seventeen years, one grade."
        standfirst="Reproduced in monochrome throughout, so a 2010 print and a 2025 phone photograph read as one record rather than two websites."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The photographic archive is still being scanned and captioned. Photographs already
              catalogued appear on the file for the project they belong to.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              Go to the archive →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Photo
                key={item.id}
                image={item}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
