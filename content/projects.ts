import type { Project } from '@/lib/types';

/**
 * The archive.
 *
 * Ordered by date on every page — the timeline spine reads `date` to pin each
 * entry, so an entry with a wrong or missing date lands in the wrong place in
 * the club's history. Dates matter more here than on any other club site.
 *
 * Unsuccessful projects stay in the archive. `river-cleanup` is the worked
 * example of that and should not be removed.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1067,
});

export const projects: Project[] = [
  {
    id: 'the-archive',
    slug: 'the-archive',
    title: 'The Archive',
    summary:
      'Digitising seventeen years of project files, minutes and photographs, and publishing them.',
    category: 'leadership',
    year: '2025/26',
    date: '2025-09-12',
    location: 'Raththanapitiya',
    featured: true,
    heroImage: placeholder('Club records and photographs being catalogued'),
    story: [
      'The files existed. They were in four members’ houses, two plastic crates and one water-damaged box, which is roughly the condition every long-running club’s archive is in.',
      'Every project file from 2008 onward is now scanned, dated, indexed and backed up in two places. The photographs are captioned with names where anyone could still identify them — that part had a deadline attached to it that nobody likes to name.',
      'This website is the public face of that archive. It is the first time the club’s full record has been readable by anyone outside the committee.',
    ],
    objectives: [
      'Scan and index every project file from 2008 onward',
      'Caption photographs with names while people can still identify them',
      'Publish the record rather than keeping it in the committee',
    ],
    impact: [
      { id: 'files', value: 128, label: 'Project files indexed' },
      { id: 'photos', value: 3400, suffix: '+', label: 'Photographs scanned' },
      { id: 'years', value: 17, label: 'Years covered' },
    ],
  },
  {
    id: 'saturday-school',
    slug: 'saturday-school',
    title: 'Saturday School',
    summary:
      'Free weekend classes for Grade 9–11 students, running every year since 2012.',
    category: 'education',
    year: '2024/25',
    date: '2025-01-11',
    location: 'Raththanapitiya',
    featured: true,
    heroImage: placeholder('A Saturday School class in session'),
    story: [
      'Thirteen years, every Saturday of term. The file for this project runs to two hundred pages and is the most useful document the club owns.',
      'It records, among other things, that attendance collapses in the third term unless the timetable moves to mornings, that the 2019 attempt to add a fourth subject failed, and exactly which two schools reliably send students. None of that was obvious in advance. All of it was written down at the time.',
    ],
    objectives: [
      'Run every Saturday of term, mornings from the third term onward',
      'Hold to three subjects rather than expanding',
      'Record attendance weekly and write it up each term',
    ],
    impact: [
      { id: 'students', value: 1240, label: 'Students since 2012' },
      { id: 'years', value: 13, label: 'Consecutive years' },
      { id: 'tutors', value: 84, label: 'Members who have tutored' },
    ],
  },
  {
    id: 'river-cleanup',
    slug: 'river-cleanup',
    title: 'River Clean-up',
    summary:
      'A canal clean-up that failed. Kept in the archive with the note: wrong season, wrong stretch, do not repeat.',
    category: 'environment',
    year: '2016/17',
    date: '2016-11-19',
    location: 'Raththanapitiya',
    featured: true,
    heroImage: placeholder('Volunteers at the 2016 canal clean-up'),
    story: [
      'Sixty members turned out. The stretch was chosen because it looked bad from the road, and the date because it suited the committee.',
      'Both were wrong. In November the water is high enough that the accessible bank is the one that was already clean, and the stretch we picked silts up from upstream regardless of what is removed. Within four months it was indistinguishable from before.',
      'The file closes with a single line in the outgoing secretary’s handwriting: wrong season, wrong stretch, do not repeat. Nobody has. That note has saved the club two or three wasted weekends since, which makes this failed project one of the more valuable entries in the archive.',
    ],
    impact: [
      { id: 'volunteers', value: 60, label: 'Volunteers' },
      { id: 'months', value: 4, label: 'Months until reversed' },
      { id: 'repeats', value: 0, label: 'Times repeated' },
    ],
  },
  {
    id: 'annual-camp',
    slug: 'annual-camp',
    title: 'Leadership Camp',
    summary: 'A residential leadership weekend for new members, held every August since 2014.',
    category: 'leadership',
    year: '2023/24',
    date: '2024-08-17',
    location: 'Kalutara',
    heroImage: placeholder('New members at the annual leadership camp'),
    impact: [
      { id: 'attendees', value: 380, label: 'Members through the camp' },
      { id: 'years', value: 11, label: 'Consecutive years' },
    ],
  },
  {
    id: 'book-drive',
    slug: 'book-drive',
    title: 'Book Drive',
    summary: 'An annual collection restocking the Raththanapitiya public library.',
    category: 'education',
    year: '2021/22',
    date: '2022-02-26',
    location: 'Raththanapitiya',
    heroImage: placeholder('Books collected for the public library'),
    impact: [
      { id: 'books', value: 2100, label: 'Books placed' },
      { id: 'years', value: 8, label: 'Years running' },
    ],
  },
  {
    id: 'charter',
    slug: 'charter',
    title: 'Charter, 2008',
    summary: 'The club chartered on 22 March 2008 with twenty founding members.',
    category: 'leadership',
    year: '2007/08',
    date: '2008-03-22',
    location: 'Raththanapitiya',
    heroImage: placeholder('The charter night of the Leo Club of Raththanapitiya in 2008'),
    impact: [{ id: 'founding', value: 20, label: 'Founding members' }],
  },
];
