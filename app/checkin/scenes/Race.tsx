"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import styles from "../checkin.module.css";

export function Race() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const fastScale = useTransform(p, [0.25, 0.5], [0, 1]);
  const fastDone = useTransform(p, [0.5, 0.55], [0, 1]);
  const slowScale = useTransform(p, [0.25, 0.95], [0, 0.34]);
  const slowTime = useTransform(p, [0.25, 0.95], [0, 94], { clamp: true });
  const slowTimeText = useTransform(slowTime, (v) => `${Math.round(v)}s — still typing…`);
  const fastTime = useTransform(p, [0.25, 0.5], [0, 6], { clamp: true });
  const fastTimeText = useTransform(fastTime, (v) => `${v.toFixed(1)}s`);

  const inner = (
    <div className={styles.raceInner}>
      <span className={styles.sceneLabel} style={{ background: "var(--acid)", color: "var(--black)" }}>
        Head to head
      </span>
      <h2 className={styles.sceneTitle}>Seconds, not minutes.</h2>
      <p className={styles.sceneSub}>
        Less typing means faster lines, fewer errors, and a front desk that
        looks up at members instead of down at a keyboard. In production,
        average peak-hour check-in time fell 50% — three minutes saved on
        every visit — and member satisfaction rose with it.
      </p>

      <div className={styles.lane}>
        <div className={styles.laneHead}>
          <span className={styles.laneName}>Manual entry</span>
          <span className={styles.laneTime}>
            {reduce ? "90+ seconds" : <motion.span>{slowTimeText}</motion.span>}
          </span>
        </div>
        <div className={styles.laneTrack}>
          <motion.div
            className={`${styles.laneFill} ${styles.laneFillSlow}`}
            style={reduce ? { transform: "scaleX(0.34)" } : { scaleX: slowScale }}
          />
        </div>
      </div>

      <div className={styles.lane}>
        <div className={styles.laneHead}>
          <span className={styles.laneName} style={{ color: "var(--acid)" }}>
            License scan
          </span>
          <span className={styles.laneTime}>
            {reduce ? "Seconds" : <motion.span>{fastTimeText}</motion.span>}
          </span>
        </div>
        <div className={styles.laneTrack}>
          <motion.div
            className={`${styles.laneFill} ${styles.laneFillFast}`}
            style={reduce ? { transform: "scaleX(1)" } : { scaleX: fastScale }}
          />
          <motion.span className={styles.laneDone} style={reduce ? undefined : { opacity: fastDone }}>
            ✓ Checked in
          </motion.span>
        </div>
      </div>
    </div>
  );

  if (reduce) {
    return (
      <section className={styles.race} style={{ height: "auto", padding: "120px 0", display: "flex", justifyContent: "center" }}>
        {inner}
      </section>
    );
  }

  return (
    <section ref={ref} className={styles.race}>
      <div className={styles.sticky}>{inner}</div>
    </section>
  );
}
