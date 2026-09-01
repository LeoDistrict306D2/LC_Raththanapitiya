'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs tracking-[0.2em] text-accent uppercase">Error</p>
      <div className="mt-3 h-px w-10 bg-accent" aria-hidden />
      <h1 className="mt-6 font-heading text-4xl text-ink md:text-archive">
        Something went wrong.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start border border-accent bg-accent px-6 py-3 text-sm text-page hover:bg-accent-strong"
      >
        Try again
      </button>
    </div>
  );
}
