"use client";

import { motion } from "motion/react";
import styles from "../checkin.module.css";
import { useReducedMotionSafe } from "@/components/useReducedMotionSafe";

const ARRIVALS = [
  ["Jordan Sample", "9:41 AM", "Checked in"],
  ["Casey Sample", "9:43 AM", "Checked in"],
  ["Riley Placeholder", "9:47 AM", "Guest pass"],
  ["Avery Fictional", "9:52 AM", "Checked in"],
  ["Quinn Example", "9:58 AM", "Renewal due"],
] as const;

export function Desk() {
  const reduce = useReducedMotionSafe();
  return (
    <section className={styles.desk}>
      <div className="wrap">
        <div className={styles.deskGrid}>
          <div>
            <span className={styles.sceneLabel} style={{ background: "var(--coral)", color: "var(--cream)" }}>
              For the staff
            </span>
            <h2 className={styles.sceneTitle}>
              The front desk sees everything.
            </h2>
            <p className={styles.sceneSub}>
              Every scan lands in a live arrivals view — who&apos;s in, when
              they arrived, and what needs attention. Less asking, less
              guessing, more hosting.
            </p>
          </div>
          <motion.div
            className={styles.dash}
            initial={reduce ? undefined : { opacity: 0, y: 34 }}
            animate={reduce ? { opacity: 1, y: 0 } : undefined}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.dashHead}>
              <span className={styles.dashTitle}>Arrivals — Today</span>
              <span className={styles.livePill}>Live</span>
            </div>
            {ARRIVALS.map(([name, time, status], i) => (
              <motion.div
                key={name}
                className={styles.arrival}
                initial={reduce ? undefined : { opacity: 0, x: -16 }}
                animate={reduce ? { opacity: 1, x: 0 } : undefined}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
              >
                <span className={styles.arrivalWho}>
                  <span className={styles.arrivalDot} />
                  {name}
                </span>
                <span className={styles.arrivalT}>{time}</span>
                <span
                  className={styles.arrivalSt}
                  style={status !== "Checked in" ? { color: "var(--coral)" } : undefined}
                >
                  {status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
