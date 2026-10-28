export type TurnCue = {
  /** Destination name, shown as the cue — not a brand card. */
  name: string;
  accent: string;
  onAccent: string;
};

export type Turn = {
  id: string;
  title: string;
  place: string;
  body: string;
  href?: string;
  link?: string;
  cue?: TurnCue;
};

/**
 * Public journey copy. Facts are from career-vault records with verified_by: "user".
 * Dates and employers: exp-006, exp-005, exp-007, exp-001, exp-004, exp-003, proj-011.
 * Built beats: live Kavsulting solutions log labels (Asia Insights, Quiztation, Places & Spaces, PIP).
 */
export const turns: Turn[] = [
  {
    id: '01',
    title: 'The bank',
    place: 'Jersey · 2006–2012',
    body: 'Six years inside Royal Bank of Scotland International — complaints that reached directors, payment operations, and service that had to hold across the group. The fault was rarely the one written on the ticket.',
  },
  {
    id: '02',
    title: 'The programme',
    place: 'States of Jersey · 2012–2015',
    body: 'Advance to Work, for 16–21 year-olds. The job was the programme itself: who got a placement, whether the process was fair, and whether it held inside government.',
  },
  {
    id: '03',
    title: 'The network',
    place: 'JT Global · 2015–2016',
    body: 'Operations on a national gigabit rollout. Field vans and engineer calls, timed to the day. The work was whether the network was actually in the ground.',
  },
  {
    id: '04',
    title: 'The practice',
    place: 'Since 2017',
    body: 'Kavanagh Consulting came out of those rooms. Advise, coach, and build with founders and senior leaders — strategy and the doing in the same hands, until the change is in the room and not only on the page.',
    href: '/advisory',
    link: 'Continue this turn',
    cue: {
      name: 'Kavsulting',
      accent: '#5A7D9A',
      onAccent: '#F2F2F2',
    },
  },
  {
    id: '05',
    title: 'Built along the way',
    place: 'Systems that left the room',
    body: 'Advise and coach were never the whole job. Founders needed systems — so the catalogue grew: relocation, live quiz nights, landlord ops, private memory with provenance. Some stayed operator tools. Some became house ventures.',
    href: '/built',
    link: 'Continue this turn',
    cue: {
      name: 'Business development',
      accent: '#8DCFFF',
      onAccent: '#0B1018',
    },
  },
  {
    id: '06',
    title: 'Wild turns',
    place: 'Borneo · 2019–2024',
    body: 'Conservation through COVID, when donor and volunteer income collapsed. Hospitality and tourism were built so the mission could survive — commercial return in service of something that had to keep going.',
  },
  {
    id: '07',
    title: 'Life turns',
    place: 'Vietnam · Thailand · Malaysia · since 2021',
    body: 'Asia Insights, founded from living there. A membership community for people arriving in Southeast Asia: trusted introductions, local relationships, and a check before anyone’s reputation is published.',
    href: '/asia-insights',
    link: 'Continue this turn',
    cue: {
      name: 'Asia Insights',
      accent: '#0D7F6B',
      onAccent: '#FFFFFF',
    },
  },
  {
    id: '08',
    title: 'Room turns',
    place: 'Venues · Friday nights',
    body: 'Trivia Deck is the same standard in a louder room — host, screen, and phones staying in sync under pressure. Software proven on a Friday night, not in a slide deck.',
    href: '/trivia-deck',
    link: 'Continue this turn',
    cue: {
      name: 'Trivia Deck',
      accent: '#C9A84C',
      onAccent: '#0F0F1A',
    },
  },
];

export function turnByHref(href: string): Turn | undefined {
  return turns.find((turn) => turn.href === href);
}

export function journeyAnchor(href: string): string {
  const turn = turnByHref(href);
  return turn ? `/#turn-${turn.id}` : '/#turns';
}
