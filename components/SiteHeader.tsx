'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header. A record header rather than a navigation bar: club name, charter
 * date, and a crimson hairline. It does not change on scroll.
 *
 * Accessibility is structural: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Archive' },
  { href: '/past-presidents', label: 'Succession' },
  { href: '/board', label: 'Board' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Photographs' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which costs an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-page/96 backdrop-blur-sm">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col gap-1" aria-label={`${club.name} — home`}>
          <span className="font-heading text-xl leading-none text-ink">
            Leo Club of {club.shortName}
          </span>
          <span className="text-[0.65rem] tracking-[0.18em] text-ink-faint uppercase">
            Chartered 22 March 2008
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'border-b pb-1 text-sm transition-colors',
                      active
                        ? 'border-accent text-accent'
                        : 'border-transparent text-ink-muted hover:border-rule-strong hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/join"
          className="hidden shrink-0 border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-page lg:inline-block"
        >
          Join
        </Link>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      <div aria-hidden className="h-px bg-accent" />

      <div id="site-menu" ref={panelRef} hidden={!open} className="bg-page lg:hidden">
        <nav aria-label="Primary" className="wrap py-2">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-4 font-heading text-lg',
                      active ? 'text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-4 mb-4 block border border-accent px-4 py-3 text-center text-sm text-accent"
          >
            Join the club
          </Link>
        </nav>
      </div>
    </header>
  );
}
