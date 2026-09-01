import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="Partnerships, project requests, or a correction to something in the archive — the last of those is genuinely welcome."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <p className="text-xs tracking-[0.2em] text-accent uppercase" id="details">
            Details
          </p>
          <dl className="mt-6 border-t border-ink">
            {club.contact.email ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Mail aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-heading text-xl break-all text-ink underline underline-offset-4 hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <MapPin aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">Based in</dt>
                  <dd className="mt-1.5 font-heading text-xl text-ink">{club.contact.address}</dd>
                </div>
              </div>
            ) : null}
          </dl>

          <p className="measure mt-8 text-sm leading-relaxed text-ink-faint">
            If something in the archive is wrong — a date, a name, a figure — write and say which
            entry. Corrections are made in the record with a note of what changed, not silently.
          </p>
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <p className="text-xs tracking-[0.2em] text-accent uppercase" id="social">
            Elsewhere
          </p>
          <ul className="mt-6 border-t border-rule">
            {club.socials.facebook ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Facebook aria-hidden size={17} />
                  Facebook
                </a>
              </li>
            ) : null}
            {club.socials.instagram ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Instagram aria-hidden size={17} />
                  Instagram
                </a>
              </li>
            ) : null}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Looking to join rather than get in touch? The membership page has a form that reaches
            the secretary directly.
          </p>
        </section>
      </div>
    </>
  );
}
