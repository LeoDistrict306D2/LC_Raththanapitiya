# Leo Club of Raththanapitiya — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Archive*.** A club that treats its own past as its subject.
The organising device is a **timeline spine** — a single vertical rule running
the length of every page with entries pinned to it by year. Everything is dated;
nothing floats free.

Photography is **monochrome throughout**, with crimson as the only colour on the
site.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## The design system

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#f4f1eb` | Bone ground |
| `--color-panel` | `#eae6dd` | Alternate bands |
| `--color-ink` | `#14110f` | Text, rules |
| `--color-accent` | `#8c1c2b` | Crimson — the **only** colour on the site |

Crimson marks the spine, the current year's pin, and links. Nothing else is
coloured. Keep that discipline — the restraint is what makes the spine read.

Type: EB Garamond (headings) + Libre Franklin (body), self-hosted via
`next/font`. A Garamond is the typeface of the printed record and will not date
over the life of a site meant to run for decades.

### The spine

`components/Spine.tsx` exports `Spine` (draws the rule) and `SpineEntry` (pins
one item). Used on the home page, the archive, the succession, and the awards
page — awards are entries in the record, not a separate trophy shelf.

Below `md` the rule moves close to the left edge and the year runs **inline**
above each entry, because a 6rem year gutter on a 360px phone leaves no room for
the content it labels. The year renders twice (gutter + inline) but only one is
ever visible, and the gutter copy is `aria-hidden` so screen readers do not
announce every year twice.

### Monochrome is the default

`components/Photo.tsx` applies greyscale unless you pass `colour`. This archive
spans 2008 to now: a 2010 compact-camera print and a 2025 phone photograph look
like two different websites in colour and identical in greyscale.

---

## Editing content

**Dates matter more here than on any other club site** — the spine reads `date`
to pin each entry, so a wrong date puts a project in the wrong place in the
club's history.

```ts
{
  id: 'reading-week',
  slug: 'reading-week',
  title: 'Reading Week',
  summary: 'One sentence.',
  story: ['Paragraph one.'],
  category: 'education',
  year: '2025/26',
  date: '2026-01-19',        // drives the spine position
  location: 'Raththanapitiya',
  featured: true,
  heroImage: { src: '/images/projects/reading-week.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1067 },
  impact: [{ id: 'students', value: 90, label: 'Students' }],
}
```

**Unsuccessful projects stay in the archive.** `river-cleanup` is the worked
example — a failed 2016 clean-up kept with its closing note. Removing it would
make every other entry unfalsifiable. That is a stated club value, not an
oversight.

`content/past-presidents.ts` must stay contiguous: a gap in the years shows as a
gap in the spine, which should be either accurate or corrected — never
accidental.

Project detail pages step **forward and back through the archive by date**
rather than showing "related" items, which is how an archive should be read.

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical, OG tags.
- Every image via `next/image` in an aspect box, with `alt`.
- Keyboard-operable menu with `aria-expanded`/`aria-controls`, Escape, focus
  return, visible focus ring, skip link.
- `prefers-reduced-motion` respected; content readable with JavaScript off.
- `typedRoutes` on — a dead internal link fails the build.
- The footer carries an **"About this record"** note stating the archive's scope
  and method. Keep it accurate if the method changes.

## Deploying

Set `siteUrl` in `content/club.ts`, then `npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images are generated
solid-colour placeholders.

One thing to correct before launch: the 2016 river clean-up narrative is
illustrative. Replace it with a real failed project — the page makes a specific
claim about the club's willingness to publish its mistakes, and that claim
should be true.
