"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./video.module.css";
import { STATS } from "./chapters";
import { ChapterRail } from "./ChapterRail";
import { useActiveChapter } from "./useActiveChapter";
import { useAutoplay } from "./useAutoplay";

export function VideoTour() {
  const ref = useRef<HTMLVideoElement>(null);
  const active = useActiveChapter(ref);
  useAutoplay(ref);

  const seek = (time: number) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = time;
    void el.play().catch(() => {});
  };

  return (
    <div className={styles.stage}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Case study — private club chain</p>
        <h1 className={styles.title}>
          The Check-In, <span className={styles.acid}>Reinvented.</span>
        </h1>
        <p className={styles.sub}>
          A production member check-in platform — designed and built solo. Scan a
          license, sync with Square, done in seconds.
        </p>
      </header>

      <div className={styles.frame}>
        <video
          ref={ref}
          className={styles.video}
          src="/checkin/tour.mp4"
          poster="/checkin/tour-poster.webp"
          aria-label="Product tour of the member check-in platform"
          controls
          muted
          playsInline
          preload="metadata"
        >
          <track
            kind="captions"
            src="/checkin/tour-captions.vtt"
            srcLang="en"
            label="English"
            default
          />
        </video>
      </div>

      <ChapterRail active={active} onSeek={seek} />

      <ul className={styles.stats}>
        {STATS.map((s) => (
          <li key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Link className="btn fill" href="/#contact">
          Talk to me about your build
        </Link>
      </div>
    </div>
  );
}
