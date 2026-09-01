import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer, set as an archive colophon: what the record covers, how it is kept,
 * and the affiliation chain as a sentence rather than a row of logos.
 *
 * The "About this record" note is not boilerplate — a published archive should
 * state its own scope and method, or a reader has no way to judge what the
 * absence of an entry means.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The record',
    links: [
      { href: '/projects', label: 'Project archive' },
      { href: '/past-presidents', label: 'Succession' },
      { href: '/gallery', label: 'Photographs' },
    ],
  },
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { href: '/join', label: 'Join the club' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-rule">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-2xl text-ink">{club.name}</p>
            <p className="mt-2 text-xs tracking-[0.16em] text-ink-faint uppercase">
              Chartered 22 March 2008
            </p>
            <p className="measure mt-5 text-sm leading-relaxed text-ink-muted">
              {club.description}
            </p>

            <ul className="mt-7 flex gap-3">
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.contact.email ? (
                <li>
                  <a
                    href={`mailto:${club.contact.email}`}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-xs tracking-[0.18em] text-accent uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-rule pt-6">
          <h2 className="text-xs tracking-[0.18em] text-ink-faint uppercase">About this record</h2>
          <p className="measure mt-3 text-xs leading-relaxed text-ink-faint">
            The archive covers 2008 to the present and is maintained by the Director of Archive.
            Project files are written within a week of a project finishing. Unsuccessful projects
            are retained with their closing notes rather than removed. Photographs are reproduced
            in monochrome throughout so that material from across seventeen years reads as one
            record.
          </p>
        </div>

        <p className="mt-8 border-t border-rule pt-6 text-xs leading-relaxed text-ink-faint">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-3 text-xs text-ink-faint">
          © {year} {club.name}. {club.contact.address}
        </p>
      </div>
    </footer>
  );
}
