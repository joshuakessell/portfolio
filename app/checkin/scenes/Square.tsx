"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";
import styles from "../checkin.module.css";

const LEDGER = [
  ["Check-in · J. Sample", "synced → Square"],
  ["Day pass · guest", "synced → Square"],
  ["Renewal · C. Sample", "synced → Square"],
] as const;

function StaticLedgerRow({ label, status }: { label: string; status: string }) {
  return (
    <div className={styles.ledgerRow}>
      <span>{label}</span>
      <b>{status}</b>
    </div>
  );
}

function LedgerRow({
  p,
  index,
  label,
  status,
}: {
  p: MotionValue<number>;
  index: number;
  label: string;
  status: string;
}) {
  const start = 0.62 + index * 0.07;
  const opacity = useTransform(p, [start, start + 0.05], [0, 1]);
  const x = useTransform(p, [start, start + 0.05], [-18, 0]);
  return (
    <motion.div className={styles.ledgerRow} style={{ opacity, x }}>
      <span>{label}</span>
      <b>{status}</b>
    </motion.div>
  );
}

export function Square() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(p, [0.18, 0.5], ["0%", "62%"]);
  const rightX = useTransform(p, [0.18, 0.5], ["0%", "-62%"]);
  const cardY = "-50%";
  const ringScale = useTransform(p, [0.5, 0.58], [0, 1]);
  const ringOpacity = useTransform(p, [0.5, 0.56], [0, 1]);

  const copy = (
    <div>
      <span className={styles.sceneLabel} style={{ background: "#fff", color: "var(--black)" }}>
        No rip and replace
      </span>
      <h2 className={styles.sceneTitle}>
        Plays nice with <span style={{ color: "var(--acid)" }}>Square.</span>
      </h2>
      <p className={styles.sceneSub}>
        The club already ran on Square. So the platform syncs with it —
        memberships, transactions, and check-ins stay consistent across both
        systems. No double entry. No migration pain.
      </p>
    </div>
  );

  if (reduce) {
    return (
      <section className={styles.square} style={{ height: "auto", padding: "120px 0", display: "flex", justifyContent: "center" }}>
        <div className={styles.squareStage}>
          {copy}
          <div>
            <div className={styles.ledger}>
              {LEDGER.map(([label, status]) => (
                <StaticLedgerRow key={label} label={label} status={status} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={styles.square}>
      <div className={styles.sticky}>
        <div className={styles.squareStage}>
          {copy}
          <div>
            <div className={styles.sysPair}>
              <motion.div
                className={`${styles.sysCard} ${styles.sysCardLeft}`}
                style={{ x: leftX, y: cardY }}
              >
                <h4>Square POS</h4>
                <p>The club&apos;s existing system of record for payments and members.</p>
              </motion.div>
              <motion.div
                className={`${styles.sysCard} ${styles.sysCardRight}`}
                style={{ x: rightX, y: cardY }}
              >
                <h4>Check-In Platform</h4>
                <p>Scan-based check-ins, member matching, front-desk workflows.</p>
              </motion.div>
              <motion.div
                className={styles.syncRing}
                style={{ scale: ringScale, opacity: ringOpacity }}
              >
                Sync
              </motion.div>
            </div>
            <div className={styles.ledger}>
              {LEDGER.map(([label, status], i) => (
                <LedgerRow key={label} p={p} index={i} label={label} status={status} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
