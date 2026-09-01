import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * The timeline spine — this site's organising device.
 *
 * A single hairline runs the length of the list with every entry pinned to it
 * by year. `Spine` draws the rule; `SpineEntry` pins one item to it.
 *
 * On screens below `md` the rule sits close to the left edge and the year runs
 * inline above each entry, because a 6rem year gutter on a 360px phone leaves
 * no room for the content it is labelling.
 *
 * The year is rendered twice by design — once in the gutter (desktop) and once
 * inline (mobile) — but only one is ever visible, and the inline copy is what
 * screen readers announce. The gutter copy is hidden from them to avoid
 * reading every year twice.
 */
export function Spine({ children, className }: { children: ReactNode; className?: string }) {
  return <ol className={cn('spine', className)}>{children}</ol>;
}

export function SpineEntry({
  year,
  children,
  filled = false,
  className,
}: {
  /** Displayed in the gutter and inline. Usually a Leo year or a calendar year. */
  year: string;
  children: ReactNode;
  /** Fills the pin. Use for the current year or a landmark entry. */
  filled?: boolean;
  className?: string;
}) {
  return (
    <li className={cn('relative pb-12 last:pb-0', className)}>
      {/* Gutter year — desktop only, hidden from assistive tech to avoid a
          duplicate reading of the inline copy below. */}
      <span className="spine-year" aria-hidden>
        {year}
      </span>
      <span className={cn('pin top-1.5', filled && 'pin-filled')} aria-hidden />

      <div>
        <p className="font-heading text-lg text-accent tabular-nums md:hidden">{year}</p>
        <span className="sr-only">{year}.</span>
        <div className="mt-2 md:mt-0">{children}</div>
      </div>
    </li>
  );
}
