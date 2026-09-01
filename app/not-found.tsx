import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs tracking-[0.2em] text-accent uppercase">Error 404</p>
      <div className="mt-3 h-px w-10 bg-accent" aria-hidden />
      <h1 className="mt-6 font-heading text-4xl text-ink md:text-archive">
        No file at that reference.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        The page you asked for is not in the archive. It may have been renamed, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="border border-accent bg-accent px-6 py-3 text-sm text-page hover:bg-accent-strong">
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-rule-strong px-6 py-3 text-sm text-ink-muted hover:border-ink hover:text-ink"
        >
          The archive
        </Link>
      </div>
    </div>
  );
}
