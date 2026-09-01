import type { Club } from '@/lib/types';

/**
 * Leo Club of Raththanapitiya — club record.
 *
 * The voice is that of a club keeping its own archive: precise about dates,
 * unsentimental about the past, and willing to record what it got wrong.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Raththanapitiya',
  shortName: 'Raththanapitiya',
  tagline: 'Everything, dated.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club in Raththanapitiya, chartered in 2008. We keep a proper archive — every project, every year, every committee — because a club that cannot say what it did in 2013 has no grounds to be trusted about 2025.',
  charterDate: '2008-03-22',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Raththanapitiya',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Raththanapitiya emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Raththanapitiya at a community service project',
    width: 1800,
    height: 900,
  },

  contact: {
    email: 'leoraththanapitiya@gmail.com',
    address: 'Raththanapitiya, Boralesgamuwa, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofraththanapitiya',
    instagram: 'https://www.instagram.com/leoraththanapitiya',
    email: 'leoraththanapitiya@gmail.com',
  },

  siteUrl: 'https://raththanapitiya.leo306d2.org',

  stats: [
    { id: 'years', value: 17, label: 'Years on record' },
    { id: 'members', value: 51, label: 'Members' },
    { id: 'projects', value: 128, label: 'Projects archived' },
    { id: 'committees', value: 17, label: 'Committees' },
  ],

  about: {
    story: [
      'The club was chartered on 22 March 2008. We can tell you that precisely, along with the twenty founding members, the venue, and what the charter dinner cost, because somebody wrote it down and everybody since has kept doing so.',
      'That habit is the club’s distinguishing feature. Every project has a file: what was planned, what happened, what it cost, and a short honest note at the end about whether it was worth repeating. Seventeen years of those files is a genuinely useful thing to own.',
      'It has also made the club unusually willing to say when something did not work. The 2016 river clean-up is in the archive with a note reading "wrong season, wrong stretch, do not repeat". Nobody has repeated it.',
      'The archive is public here for the first time. It is not a flattering document in places, which is rather the point.',
    ],
    mission:
      'To serve Raththanapitiya, and to keep an honest, dated record of that service that outlasts the people who did it.',
    vision:
      'An archive complete enough that a member joining in 2040 can read exactly how the club got there.',
    values: [
      {
        title: 'Date everything',
        description:
          'Every project, every decision, every file carries a date. Undated material is worthless to whoever comes next.',
      },
      {
        title: 'Record the failures',
        description:
          'A file that only records successes is marketing, not an archive. The unsuccessful projects are the ones with something to teach.',
      },
      {
        title: 'Write it at the time',
        description:
          'Project notes are written within a week of finishing. Memory at six months is reconstruction, not record.',
      },
      {
        title: 'Hand over the whole file',
        description:
          'Incoming committees receive the archive, not a summary of it. Editing history for the next committee is how clubs repeat mistakes.',
      },
    ],
  },
};
