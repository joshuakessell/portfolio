import Link from "next/link";
import styles from "./home.module.css";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const MARQUEE_ITEMS = (
  <>
    <span>Full-Stack Developer</span>
    <span>■</span>
    <span><b>AI-Accelerated</b></span>
    <span>■</span>
    <span>Dallas, TX</span>
    <span>■</span>
    <span>TypeScript / React / Java / Spring</span>
    <span>■</span>
    <span><b>Open to Work</b></span>
    <span>■</span>
  </>
);

export default function HomePage() {
  return (
    <>
      <nav className={styles.nav} aria-label="Main">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            JK<span>■</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/checkin">Flagship</Link></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="/Joshua-Kessell-Resume.pdf">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-inner">
          {MARQUEE_ITEMS}
          {MARQUEE_ITEMS}
        </div>
      </div>

      <header className={styles.hero}>
        <div className="wrap">
          <h1 className={styles.heroTitle}>
            Beyond<br />
            <span className={styles.outline}>Vibe</span>{" "}
            <span className={styles.blue}>Coding</span>
          </h1>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p>
                I&apos;m <b>Joshua Kessell</b> — six years of enterprise
                Java/Spring and React/TypeScript, now shipping production
                software solo with AI-assisted workflows.
              </p>
              <p>
                Experience is the difference between generating code and{" "}
                <b>engineering software</b>. I bring both.
              </p>
              <div className={styles.cta}>
                <Link className="btn fill" href="/checkin">
                  See the Flagship
                </Link>
                <a className="btn out" href="/Joshua-Kessell-Resume.pdf">
                  Resume PDF
                </a>
              </div>
            </div>
            <div className={styles.stamp}>
              1 year independent<br />
              <em>full products</em><br />
              shipped solo
            </div>
          </div>
        </div>
      </header>

      <div className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <div className={styles.statN}>6+</div>
            <div className={styles.statL}>Years Enterprise Dev</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statN}>4</div>
            <div className={styles.statL}>Industries Served</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statN}>200+</div>
            <div className={styles.statL}>Daily Users Supported</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statN}>50%</div>
            <div className={styles.statL}>Faster Peak-Hour Check-Ins</div>
          </div>
        </div>
      </div>

      <section className={styles.flagship} id="work">
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">The Flagship</div>
            <h2 className="sec-title">One project. Full production value.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/checkin" className={styles.flagCard}>
              <div className={styles.flagGlow} aria-hidden="true" />
              <span className={styles.flagBadge}>
                Client Product · Private Codebase
              </span>
              <div className={styles.flagTitle}>
                The Check-In,<br />
                <span>Reinvented.</span>
              </div>
              <p className={styles.flagDesc}>
                A member check-in platform for a private club chain. Scan a
                license, sync with Square, done in seconds — not keystrokes.
                Delivered end to end: peak-hour check-in time down 50%, three
                minutes saved on every visit.
              </p>
              <div className={styles.flagMeta}>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>PostgreSQL</span>
                <span>Square API</span>
                <span>Barcode Scanning</span>
              </div>
              <div className={styles.flagArrow}>
                Take the tour →
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.xpWrap} id="experience">
        <div className="wrap">
          <Reveal>
            <div className="sec-tag acid">Track Record</div>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              Enterprise Foundations
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={styles.xpItem}>
              <span className={styles.xpWhen}>2025—NOW</span>
              <div>
                <h3>Independent Product Engineer</h3>
                <div className={styles.xpOrg}>AI-assisted full-stack development</div>
                <p>
                  Full production applications designed, built, and shipped
                  solo — including a client check-in platform delivered from
                  scoping through deployment, cutting peak-hour check-in time
                  50% — using AI coding agents held to enterprise engineering
                  standards.
                </p>
              </div>
            </div>
            <div className={styles.xpItem}>
              <span className={styles.xpWhen}>2022—2025</span>
              <div>
                <h3>Android / Java Developer</h3>
                <div className={styles.xpOrg}>United Airlines · via TEKsystems</div>
                <p>
                  Luggage-tracking apps used by 200+ airport staff daily;
                  Spring Boot REST APIs streaming real-time status; PIN-based
                  SSO cutting login time 50%. Mentored junior developers
                  across TEKsystems client engagements.
                </p>
              </div>
            </div>
            <div className={styles.xpItem}>
              <span className={styles.xpWhen}>2021—2022</span>
              <div>
                <h3>Backend Java Developer</h3>
                <div className={styles.xpOrg}>GM / OnStar</div>
                <p>
                  Spring Boot product-fulfillment API processing hundreds of
                  orders per day; Kafka messaging pipeline at 99.9% delivery
                  reliability.
                </p>
              </div>
            </div>
            <div className={styles.xpItem}>
              <span className={styles.xpWhen}>2019—2021</span>
              <div>
                <h3>Angular Dev · Automation Engineer</h3>
                <div className={styles.xpOrg}>Relias Healthcare · Perspecta</div>
                <p>
                  HIPAA-compliant .NET-to-Angular 10 migration with 50% faster
                  loads; Ansible automation for AWS GovCloud cutting
                  provisioning from 4 hours to 15 minutes.
                </p>
              </div>
            </div>
            <div className={styles.xpItem}>
              <span className={styles.xpWhen}>EDUCATION</span>
              <div>
                <h3>Education &amp; Certifications</h3>
                <div className={styles.xpOrg}>
                  University of Texas at Austin · SMU · University of Phoenix
                </div>
                <p>
                  Post Graduate Program, Generative AI for Business
                  Applications, UT Austin, 4.33 GPA (May 2026){" "}
                  <a
                    className={styles.certLink}
                    href="https://www.mygreatlearning.com/certificate/GPEBFLXO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    verify credential ↗
                  </a>
                  &nbsp;· AI on Cloud &amp; Introduction to SQL with MySQL
                  certifications (May 2026) · Full-Stack Web Development
                  Certificate, SMU (2018) · BA, Computer Science, University
                  of Phoenix (in progress).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className={styles.contact} id="contact">
        <div className="wrap">
          <div className="sec-tag">Contact</div>
          <h2 className={styles.contactTitle}>
            Let&apos;s ship <span>something real.</span>
          </h2>
          <p className={styles.contactSub}>
            Looking for teams that treat AI tooling as a force multiplier — and
            want engineers who verify, architect, and deliver.
          </p>
          <div className={styles.contactGrid}>
            <ContactForm />
            <div>
              <div className={styles.footLinks}>
                <a href="mailto:jckessell@gmail.com">Email</a>
                <a
                  href="https://github.com/joshuakessell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/joshuakessell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className={styles.tiny}>
                © 2026 Joshua Kessell — Dallas, TX
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
