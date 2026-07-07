// Chapter markers for the check-in tour video (site/public/checkin/tour.mp4).
// Times in seconds, taken from the burned-in story beats of the 80s reel.
export interface Chapter {
  t: number;
  label: string;
}

export const CHAPTERS: Chapter[] = [
  { t: 0, label: "Reinvented" },
  { t: 7, label: "The old way" },
  { t: 18, label: "One scan, zero typing" },
  { t: 33, label: "Seconds, not minutes" },
  { t: 43, label: "Plays nice with Square" },
  { t: 55, label: "The front desk sees all" },
  { t: 66, label: "Under the hood" },
  { t: 71, label: "One engineer" },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "50%", label: "faster peak-hour check-in" },
  { value: "~3 min", label: "saved on every visit" },
  { value: "0", label: "keystrokes — scan the license" },
  { value: "Solo", label: "scoped, built, shipped to production" },
];
