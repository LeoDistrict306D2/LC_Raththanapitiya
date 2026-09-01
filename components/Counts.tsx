'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * The club's figures, set as a plain rule-separated row. No colour, no fill —
 * on this site crimson belongs to the spine and to links only.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Figure({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="border-t border-ink pt-4">
      <dd className="font-heading text-4xl text-ink tabular-nums md:text-5xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-2.5 text-xs tracking-[0.16em] text-ink-faint uppercase">{stat.label}</dt>
      {stat.note ? <p className="mt-1.5 text-xs text-ink-faint">{stat.note}</p> : null}
    </div>
  );
}

export function Counts({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Figure key={stat.id} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
