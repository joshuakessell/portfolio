"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

type Status = "idle" | "sending" | "ok" | "err";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required maxLength={100} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required maxLength={200} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required maxLength={4000} />
      </div>
      <button className="btn fill" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "ok" ? (
        <p className={`${styles.formStatus} ${styles.ok}`} role="status">
          Message sent. I&apos;ll get back to you soon.
        </p>
      ) : status === "err" ? (
        <p className={`${styles.formStatus} ${styles.err}`} role="alert">
          Something went wrong — email me directly at jckessell@gmail.com.
        </p>
      ) : null}
    </form>
  );
}
