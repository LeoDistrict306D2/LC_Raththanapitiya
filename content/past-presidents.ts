import type { PastPresident } from '@/lib/types';

/**
 * Seventeen terms, complete.
 *
 * The timeline spine on `/past-presidents` renders this list directly, so the
 * years must be contiguous — a gap in the succession will show as a gap in the
 * spine, which is either accurate or a data error and should be one or the
 * other deliberately.
 *
 * TODO(content): confirm against the club archive.
 */
export const pastPresidents: PastPresident[] = [
  {
    year: '2008/09',
    name: 'Leo Ranga Hettiarachchi',
    theme: 'Charter Year',
    highlights: ['Chartered 22 March 2008 with 20 members', 'First project file opened'],
  },
  { year: '2009/10', name: 'Leo Ishani Wijeratne', theme: 'Get It Written' },
  { year: '2010/11', name: 'Leo Suresh Alahakoon', theme: 'Out and About' },
  { year: '2011/12', name: 'Leo Nadeeka Peiris', theme: 'Steady Hands' },
  {
    year: '2012/13',
    name: 'Leo Chathura Wickramasinghe',
    theme: 'Every Saturday',
    highlights: ['Saturday School established'],
  },
  { year: '2013/14', name: 'Leo Amaya Fonseka', theme: 'Keep the File' },
  {
    year: '2014/15',
    name: 'Leo Dinesh Ratnayake',
    theme: 'Train Them Early',
    highlights: ['First leadership camp'],
  },
  { year: '2015/16', name: 'Leo Sachini Gunaratne', theme: 'Wider Still' },
  {
    year: '2016/17',
    name: 'Leo Pasindu Herath',
    theme: 'Learn From It',
    highlights: ['River clean-up failed and was written up honestly'],
  },
  { year: '2017/18', name: 'Leo Nimasha Bandara', theme: 'Do Not Repeat' },
  { year: '2018/19', name: 'Leo Ravindu Kodithuwakku', theme: 'On the Record' },
  { year: '2019/20', name: 'Leo Hiruni Senaratne', theme: 'Ten Years' },
  {
    year: '2020/21',
    name: 'Leo Tharindu Abeywickrama',
    theme: 'Keep Going',
    highlights: ['Saturday School continued online without a missed term'],
  },
  { year: '2021/22', name: 'Leo Yasodha Liyanage', theme: 'Back in the Room' },
  { year: '2022/23', name: 'Leo Chamodi Ekanayake', theme: 'Write It Now' },
  {
    year: '2023/24',
    name: 'Leo Isuru Wijesooriya',
    theme: 'Find the Boxes',
    highlights: ['Archive digitisation begun'],
  },
  {
    year: '2024/25',
    name: 'Leo Anushka Weerakkody',
    theme: 'Open the Archive',
    highlights: ['Full club record published publicly for the first time'],
  },
];
