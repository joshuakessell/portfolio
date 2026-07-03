"use client";

import Link from "next/link";
import { motion } from "motion/react";
import styles from "../checkin.module.css";
import { useReducedMotionSafe } from "@/components/useReducedMotionSafe";

const SPECS = [
  ["TypeScript, end to end", "One language, one type system, from kiosk UI to API to database schema."],
  ["Next.js + PostgreSQL", "Server-rendered where it matters, relational where it counts — legacy records passively restructured into a clean schema that powers management reporting."],
  ["AAMVA barcode pipeline", "Driver's license PDF417 parsing built against the standard — not guesswork."],
  ["Square API integration", "Bi-directional sync with the club's existing point of sale."],
  ["Built with AI agents", "Claude Code with custom Skills — every PR reviewed by Claude, Gemini, and Codex, findings merged and cross-checked before anything lands."],
  ["Engineered, not vibed", "Six years of enterprise practice deciding what ships and what gets rewritten."],
] as const;

export function SpecsOutro() {
  const reduce = useReducedMotionSafe();
  return (
    <>
      <section className={styles.specs}>
        <div className="wrap">
          <span className={styles.sceneLabel} style={{ background: "var(--acid)", color: "var(--black)" }}>
            Under the hood
          </span>
          <h2 className={styles.sceneTitle}>Enterprise habits, startup speed.</h2>
          <div className={styles.specGrid}>
            {SPECS.map(([title, body], i) => (
              <motion.div
                key={title}
                className={styles.specCard}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                animate={reduce ? { opacity: 1, y: 0 } : undefined}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <h4>{title}</h4>
                <p>{body}</p>
              </motion.div>
            ))}
          </div>
          <div className={styles.statusBadge}>
            Status: Delivered · In production
          </div>
        </div>
      </section>

      <section className={styles.outro}>
        <div className="wrap">
          <h2 className={styles.outroTitle}>
            One engineer.<br />
            <span>Full production value.</span>
          </h2>
          <p className={styles.outroSub}>
            This is what AI-assisted development looks like when it&apos;s
            grounded in real engineering experience. Imagine it pointed at
            your roadmap.
          </p>
          <div className={styles.outroCta}>
            <a className="btn fill" href="/#contact" style={{ borderColor: "var(--black)" }}>
              Get in touch
            </a>
            <Link className="btn inverse" href="/">
              Back to portfolio
            </Link>
          </div>
          <p className={styles.disclaimer}>
            All interface visuals are stylized recreations with fictional data.
            The production codebase and client identity are private.
          </p>
        </div>
      </section>
    </>
  );
}
