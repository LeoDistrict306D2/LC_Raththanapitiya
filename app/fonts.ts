import { EB_Garamond, Libre_Franklin } from 'next/font/google';

/**
 * EB Garamond for headings, Libre Franklin for text.
 *
 * A Garamond is the right voice for an archive — it is the typeface of the
 * printed record, and it does not date the way a contemporary serif would over
 * the life of a site meant to run for decades. Libre Franklin handles the
 * labels and long copy.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin',
  display: 'swap',
});

export const fontVariables = `${ebGaramond.variable} ${libreFranklin.variable}`;
