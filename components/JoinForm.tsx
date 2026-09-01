'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Membership enquiry form.
 *
 * No backend, so rather than render a form that silently discards what people
 * type, this composes a pre-filled email and hands it to the visitor's mail
 * client. It works, needs no server or third-party form service, and no
 * personal data passes through anyone else's hands.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');

    const body = [
      `Name: ${name}`,
      `Age: ${String(data.get('age') ?? '')}`,
      `Area: ${String(data.get('area') ?? '')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-2 w-full border border-rule-strong bg-page px-3 py-2.5 text-ink focus:border-accent focus:outline-none';
  const label = 'block text-xs uppercase tracking-[0.16em] text-ink-faint';

  return (
    <form onSubmit={handleSubmit} className="measure">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className={label}>
            Full name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-age" className={label}>
            Age
          </label>
          <input id="join-age" name="age" type="number" min={12} max={30} required className={field} />
        </div>
        <div>
          <label htmlFor="join-area" className={label}>
            Area
          </label>
          <input id="join-area" name="area" type="text" required className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className={label}>
            Anything you want to tell us
          </label>
          <textarea id="join-message" name="message" rows={5} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm text-page transition-colors hover:bg-accent-strong"
      >
        Send enquiry
        <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us directly at the address below.'
          : ''}
      </p>
    </form>
  );
}
