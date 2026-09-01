import Link from 'next/link';

/**
 * Page heading. The crimson rule beneath the kicker is the only colour above
 * the fold, and it is the same crimson as the spine below — the page opens
 * with the device it is built on.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="border-b border-rule">
      <div className="wrap pt-12 pb-10 md:pt-18 md:pb-14">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link href={breadcrumb.href} className="text-sm text-accent hover:text-accent-strong">
              ← {breadcrumb.label}
            </Link>
          </nav>
        ) : null}

        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{kicker}</p>
        <div className="mt-3 h-px w-10 bg-accent" aria-hidden />

        <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-[1.06] text-ink md:text-archive">
          {title}
        </h1>

        {standfirst ? (
          <p className="measure mt-5 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
        ) : null}
      </div>
    </div>
  );
}
