"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "../checkin.module.css";
import { useReducedMotionSafe } from "@/components/useReducedMotionSafe";

export function Opening() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0.3, 1], ["0vh", "-24vh"]);
  const fade = useTransform(scrollYProgress, [0.3, 0.85], [1, 0]);

  const stagger = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section ref={ref} className={styles.opening} style={reduce ? { height: "auto", padding: "140px 0" } : undefined}>
      <div className={reduce ? styles.center : `${styles.sticky} ${styles.center}`}>
        <motion.div style={reduce ? undefined : { y: titleY, opacity: fade }}>
          <motion.div
            className={styles.openKicker}
            variants={stagger}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? { opacity: 1, y: 0 } : "show"}
            custom={0}
          >
            Case Study — Private Club Chain
          </motion.div>
          <h1 className={styles.openTitle}>
            <motion.span
              style={{ display: "block" }}
              variants={stagger}
              initial={reduce ? undefined : "hidden"}
              animate={reduce ? { opacity: 1, y: 0 } : "show"}
              custom={1}
            >
              The Check-In,
            </motion.span>
            <motion.span
              className={styles.acid}
              style={{ display: "block" }}
              variants={stagger}
              initial={reduce ? undefined : "hidden"}
              animate={reduce ? { opacity: 1, y: 0 } : "show"}
              custom={2}
            >
              Reinvented.
            </motion.span>
          </h1>
          <motion.p
            className={styles.openSub}
            variants={stagger}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? { opacity: 1, y: 0 } : "show"}
            custom={3}
          >
            A production member check-in platform, designed and built solo.
            Scan a license. Sync with Square. Done in seconds.
          </motion.p>
        </motion.div>
        {!reduce && <div className={styles.scrollHint}>Scroll</div>}
      </div>
    </section>
  );
}
