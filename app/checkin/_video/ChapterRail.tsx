"use client";

import styles from "./video.module.css";
import { CHAPTERS } from "./chapters";

function format(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface Props {
  active: number;
  onSeek: (time: number) => void;
}

export function ChapterRail({ active, onSeek }: Props) {
  return (
    <nav className={styles.rail} aria-label="Video chapters">
      {CHAPTERS.map((c, i) => (
        <button
          key={c.t}
          type="button"
          onClick={() => onSeek(c.t)}
          className={i === active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
          aria-current={i === active}
        >
          <span className={styles.chipTime}>{format(c.t)}</span>
          <span className={styles.chipLabel}>{c.label}</span>
        </button>
      ))}
    </nav>
  );
}
