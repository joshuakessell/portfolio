"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";
import styles from "../checkin.module.css";

const FIELDS = [
  ["First name", "Jordan"],
  ["Last name", "Sample"],
  ["Date of birth", "04/12/1991"],
  ["Phone", "(555) 014-2288"],
  ["Email", "jordan@example.com"],
  ["Member ID", "TC-20481"],
  ["Emergency contact", "Casey Sample"],
  ["Signature", "✕ ______________"],
] as const;

function Field({
  p,
  index,
  label,
  value,
}: {
  p: MotionValue<number>;
  index: number;
  label: string;
  value: string;
}) {
  const start = 0.06 + index * 0.075;
  const opacity = useTransform(p, [start, start + 0.05], [0, 1]);
  const caretOpacity = useTransform(
    p,
    [start, start + 0.05, start + 0.075],
    [0, 1, 0],
  );
  return (
    <div className={styles.fRow}>
      <div className={styles.fLabel}>{label}</div>
      <div className={styles.fInput}>
        <motion.span style={{ opacity }}>{value}</motion.span>
        <motion.span className={styles.caret} style={{ opacity: caretOpacity }} />
      </div>
    </div>
  );
}

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const keystrokes = useTransform(p, [0.06, 0.72], [0, 63], { clamp: true });
  const keystrokesText = useTransform(keystrokes, (v) => String(Math.round(v)));
  const seconds = useTransform(p, [0.06, 0.72], [0, 94], { clamp: true });
  const secondsText = useTransform(seconds, (v) => `${Math.round(v)}s`);
  const stampScale = useTransform(p, [0.8, 0.9], [2.4, 1]);
  const stampOpacity = useTransform(p, [0.8, 0.88], [0, 1]);

  if (reduce) {
    return (
      <section className={styles.problem} style={{ height: "auto", padding: "120px 0" }}>
        <div className={styles.problemGrid} style={{ margin: "0 auto" }}>
          <div>
            <span className={styles.sceneLabel} style={{ background: "var(--coral)", color: "var(--cream)" }}>
              The old way
            </span>
            <h2 className={styles.sceneTitle}>Every visit started with a form.</h2>
            <p className={styles.sceneSub}>
              Manual entry at the front desk: eight fields, sixty-plus
              keystrokes, a line forming behind every new arrival.
            </p>
          </div>
          <div className={styles.fakeForm}>
            <div className={styles.fakeFormHead}>New member intake — manual entry</div>
            {FIELDS.map(([label, value]) => (
              <div key={label} className={styles.fRow}>
                <div className={styles.fLabel}>{label}</div>
                <div className={styles.fInput}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={styles.problem}>
      <div className={styles.sticky}>
        <div className={styles.problemGrid}>
          <div>
            <span className={styles.sceneLabel} style={{ background: "var(--coral)", color: "var(--cream)" }}>
              The old way
            </span>
            <h2 className={styles.sceneTitle}>Every visit started with a form.</h2>
            <p className={styles.sceneSub}>
              Manual entry at the front desk. Watch the cost add up — keystroke
              by keystroke.
            </p>
            <div className={styles.counters}>
              <div className={styles.counter}>
                <div className={styles.counterN}>
                  <motion.span>{keystrokesText}</motion.span>
                </div>
                <div className={styles.counterL}>Keystrokes</div>
              </div>
              <div className={styles.counter}>
                <div className={styles.counterN}>
                  <motion.span>{secondsText}</motion.span>
                </div>
                <div className={styles.counterL}>Elapsed</div>
              </div>
            </div>
          </div>
          <div className={styles.fakeForm}>
            <div className={styles.fakeFormHead}>New member intake — manual entry</div>
            {FIELDS.map(([label, value], i) => (
              <Field key={label} p={p} index={i} label={label} value={value} />
            ))}
          </div>
        </div>
        <motion.div className={styles.slowStamp} style={{ opacity: stampOpacity }}>
          <motion.div className={styles.slowStampInner} style={{ scale: stampScale }}>
            Too Slow.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
