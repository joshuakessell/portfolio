import type { Metadata } from "next";
import Link from "next/link";
import styles from "./checkin.module.css";
import { VideoTour } from "./_video/VideoTour";

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
      <VideoTour />
    </main>
  );
}
