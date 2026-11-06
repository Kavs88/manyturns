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
  /** What held when the turn was finished — plain English. */
  held: string;
  href?: string;
  link?: string;
  cue?: TurnCue;
};

/**
 * Public journey copy. Facts from career-vault verified_by: "user"
 * (see docs/brand/JOURNEY_SPINE.md). Voice: plain operator English —
 * not Stitch “sovereign / canopy” register.
 */
export const turns: Turn[] = [
  {
    id: '01',
    title: 'The bank',
    place: 'Jersey · 2006–2012',
    body: 'Royal Bank of Scotland International — complaints, payments, service that had to hold across the group. The fault was rarely the one on the ticket.',
    held: 'Got to the real constraint and made the service hold.',
  },
  {
    id: '02',
    title: 'The programme',
    place: 'States of Jersey · 2012–2015',
    body: 'Advance to Work, for 16–21 year-olds. The job was whether the programme itself was fair — and whether it held inside government.',
    held: 'One standard that ran, and stayed fair, under government pressure.',
  },
  {
    id: '03',
    title: 'Evenings with the community',
    place: 'Jersey · voluntary',
    body: "MoneySense training and Women's Refuge support — evening work alongside the day job. Same problem-solving, different rooms.",
    held: 'Practical money skills and support delivered where people actually were.',
  },
  {
    id: '04',
    title: 'The network',
    place: 'JT Global · 2015–2016',
    body: 'National gigabit rollout. Field vans and engineer calls, timed to the day. The work was whether the network was actually in the ground.',
    held: 'Delivery you could point at — cable in the ground, not a slide.',
  },
  {
    id: '05',
    title: 'Talent at scale',
    place: 'Blue Square · 2016–2017',
    body: 'Head of Talent Acquisition — recruitment, onboarding, and partner delivery for programmes that had to stand up under campaign pressure.',
    held: 'People and partners ready when the campaign went live.',
  },
  {
    id: '06',
    title: 'The practice',
    place: 'Since 2017',
    body: 'Kavanagh Consulting came out of those rooms. Commercial advisory with founders and senior leaders — find the real problem, build the structure, stay until it holds. Coaching sits inside that work: a process nobody believes in lasts about a fortnight.',
    held: 'Diagnosis into structure — and people who can run it without us.',
    href: '/advisory',
    link: 'Continue this turn',
    cue: {
      name: 'Kavsulting',
      accent: '#9c0000',
      onAccent: '#F7F4F2',
    },
  },
  {
    id: '07',
    title: 'Built along the way',
    place: 'Systems that left the room',
    body: 'Founders needed systems, so the catalogue grew — relocation, live quiz nights, landlord ops, private memory with provenance. Some stayed tools. Some became house ventures.',
    held: 'Working software and ops, not another deck of recommendations.',
    href: '/built',
    link: 'Continue this turn',
    cue: {
      name: 'Business development',
      accent: '#9c0000',
      onAccent: '#F7F4F2',
    },
  },
  {
    id: '08',
    title: 'Wild turns',
    place: 'Borneo · 2019–2024',
    body: 'Conservation through COVID, when donor income collapsed. Hospitality and tourism were built so the mission could survive.',
    held: 'Commercial revenue that kept the conservation work alive.',
  },
  {
    id: '09',
    title: 'Life turns',
    place: 'Vietnam · Thailand · Malaysia · since 2021',
    body: 'Asia Insights, founded from living there — trusted introductions and local relationships for people arriving in Southeast Asia.',
    held: 'A community path for people making a life turn in SEA.',
    href: '/asia-insights',
    link: 'Continue this turn',
    cue: {
      name: 'Asia Insights',
      accent: '#0D7F6B',
      onAccent: '#FFFFFF',
    },
  },
  {
    id: '10',
    title: 'Room turns',
    place: 'Venues · Friday nights',
    body: 'Trivia Deck — host, screen, and phones in sync under pressure. Software proven on a Friday night, not in a slide deck.',
    held: 'A night that runs when the room is full and noisy.',
    href: '/trivia-deck',
    link: 'Continue this turn',
    cue: {
      name: 'Trivia Deck',
      accent: '#C9A84C',
      onAccent: '#1A0A0C',
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
