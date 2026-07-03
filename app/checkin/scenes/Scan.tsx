"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import styles from "../checkin.module.css";
import { useReducedMotionSafe } from "@/components/useReducedMotionSafe";

const PROFILE_ROWS = [
  ["Member", "Jordan A. Sample"],
  ["Tier", "Gold — Annual"],
  ["Status", "Active"],
  ["Waiver", "On file"],
] as const;

function ProfileRow({
  p,
  index,
  k,
  v,
}: {
  p: MotionValue<number>;
  index: number;
  k: string;
  v: string;
}) {
  const start = 0.6 + index * 0.05;
  const opacity = useTransform(p, [start, start + 0.04], [0, 1]);
  const x = useTransform(p, [start, start + 0.04], [24, 0]);
  return (
    <motion.div className={styles.profRow} style={{ opacity, x }}>
      <span className={styles.profRowK}>{k}</span>
      <span className={v === "Active" || v === "On file" ? styles.profRowOk : undefined}>
        {v === "Active" ? "● Active" : v}
      </span>
    </motion.div>
  );
}

function ProfileCard({ p }: { p: MotionValue<number> | null }) {
  return (
    <>
      <div className={styles.profHead}>
        <div className={styles.profAvatar} />
        <div>
          <div className={styles.profName}>Jordan A. Sample</div>
          <div className={styles.profSub}>Matched from license scan</div>
        </div>
      </div>
      {PROFILE_ROWS.map(([k, v], i) =>
        p ? (
          <ProfileRow key={k} p={p} index={i} k={k} v={v} />
        ) : (
          <div key={k} className={styles.profRow}>
            <span className={styles.profRowK}>{k}</span>
            <span className={v === "Active" || v === "On file" ? styles.profRowOk : undefined}>
              {v === "Active" ? "● Active" : v}
            </span>
          </div>
        ),
      )}
    </>
  );
}

function License() {
  return (
    <>
      <div className={styles.licHead}>
        <span>
          <b>Sample State</b> · DL
        </span>
        <span>Class C</span>
      </div>
      <div className={styles.licBody}>
        <div className={styles.licPhoto} />
        <div className={styles.licFields}>
          <b>SAMPLE, JORDAN A</b>
          <br />
          DOB 04/12/1991 · EXP 04/12/2029
          <br />
          DL S0000-0000 · Fictional data
        </div>
      </div>
    </>
  );
}

export function Scan() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // license travel
  const cardY = useTransform(p, [0.02, 0.32], ["-64vh", "0vh"]);
  const cardRotate = useTransform(p, [0.02, 0.32], [7, 0]);
  const cardX = useTransform(p, [0.5, 0.68], ["0vw", "-22vw"]);
  const cardScale = useTransform(p, [0.5, 0.68], [1, 0.86]);
  // beam + flash
  const beamOpacity = useTransform(p, [0.2, 0.32, 0.52, 0.6], [0.12, 1, 1, 0.12]);
  const flashOpacity = useTransform(p, [0.32, 0.4, 0.5], [0, 1, 0]);
  const readoutOpacity = useTransform(p, [0.34, 0.38, 0.48, 0.52], [0, 1, 1, 0]);
  // profile panel
  const profX = useTransform(p, [0.52, 0.68], ["64vw", "16vw"]);
  const profOpacity = useTransform(p, [0.52, 0.6], [0, 1]);
  const checkedScale = useTransform(p, [0.82, 0.88], [0, 1]);
  const checkedOpacity = useTransform(p, [0.82, 0.86], [0, 1]);
  // caption
  const capOpacity = useTransform(p, [0.87, 0.94], [0, 1]);
  const capY = useTransform(p, [0.87, 0.94], [40, 0]);

  if (reduce) {
    return (
      <section className={styles.scan} style={{ height: "auto", padding: "120px 24px" }}>
        <div className={styles.center} style={{ maxWidth: 900, margin: "0 auto" }}>
          <span className={styles.sceneLabel} style={{ background: "var(--acid)", color: "var(--black)" }}>
            The new way
          </span>
          <h2 className={styles.sceneTitle}>
            One scan. <span style={{ color: "var(--acid)" }}>Zero typing.</span>
          </h2>
          <p className={styles.sceneSub} style={{ margin: "18px auto 40px" }}>
            The license barcode carries everything the front desk used to type.
            Scan it, match the member, check them in.
          </p>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            <div className={styles.license}>
              <License />
              <div className={styles.licBarcode} />
            </div>
            <div className={styles.profile} style={{ position: "static" }}>
              <ProfileCard p={null} />
              <div className={styles.checkedIn}>✓ Checked In</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={styles.scan}>
      <div className={styles.sticky}>
        <div className={styles.scanStage}>
          <motion.div className={styles.beam} style={{ opacity: beamOpacity }}>
            <div className={styles.beamGlow} />
          </motion.div>

          <motion.div className={styles.readout} style={{ opacity: readoutOpacity }}>
            Reading barcode…
          </motion.div>

          <motion.div
            className={styles.license}
            style={{ y: cardY, x: cardX, rotate: cardRotate, scale: cardScale }}
          >
            <License />
            <div className={styles.licBarcode}>
              <motion.div className={styles.barcodeFlash} style={{ opacity: flashOpacity }} />
            </div>
          </motion.div>

          <motion.div className={styles.profile} style={{ x: profX, opacity: profOpacity }}>
            <ProfileCard p={p} />
            <motion.div
              className={styles.checkedIn}
              style={{ scale: checkedScale, opacity: checkedOpacity }}
            >
              ✓ Checked In
            </motion.div>
          </motion.div>

          <motion.div className={styles.scanCaption} style={{ opacity: capOpacity, y: capY }}>
            <h3>
              One scan. <span>Zero typing.</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
