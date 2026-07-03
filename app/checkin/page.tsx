import type { Metadata } from "next";
import Link from "next/link";
import styles from "./checkin.module.css";
import { Opening } from "./scenes/Opening";
import { Problem } from "./scenes/Problem";
import { Scan } from "./scenes/Scan";
import { Race } from "./scenes/Race";
import { Square } from "./scenes/Square";
import { Desk } from "./scenes/Desk";
import { SpecsOutro } from "./scenes/SpecsOutro";

export const metadata: Metadata = {
  title: "The Check-In, Reinvented — Joshua Kessell",
  description:
    "Case study: a member check-in platform for a private club chain. License-scan check-ins, Square sync, peak-hour check-in time cut 50%. Delivered solo, from scoping through deployment.",
};

export default function CheckinPage() {
  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <Link href="/">← JK■</Link>
        <a href="/#contact">Contact</a>
      </div>
      <Opening />
      <Problem />
      <Scan />
      <Race />
      <Square />
      <Desk />
      <SpecsOutro />
    </main>
  );
}
