import styles from "../checkin.module.css";

const SMALL_FIELDS = [
  ["15 SEX", "M"],
  ["16 HGT", "5'-11\""],
  ["17 WGT", "175 lb"],
  ["18 EYES", "BRN"],
] as const;

function LicField({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.licField}>
      <span className={styles.licFieldLabel}>{label}</span>
      <span className={styles.licFieldValue}>{value}</span>
    </div>
  );
}

export function License() {
  return (
    <>
      <div className={styles.licBand}>
        <span className={styles.licState}>Columbia</span>
        <span className={styles.licDocType}>
          Driver License <b>USA</b>
        </span>
      </div>
      <div className={styles.licBody}>
        <div className={styles.licPhoto} />
        <div className={styles.licInfo}>
          <div className={styles.licTopRow}>
            <LicField label="4d DL NO" value="S536-7742-0891" />
            <LicField label="9 CLASS" value="C" />
          </div>
          <div className={styles.licName}>
            <span className={styles.licFieldLabel}>1</span> SAMPLE
            <br />
            <span className={styles.licFieldLabel}>2</span> JORDAN AVERY
          </div>
          <div className={styles.licAddress}>
            <span className={styles.licFieldLabel}>8</span> 1500 CEDAR POINT DR
            <br />
            LAKESIDE, CB 40012
          </div>
          <div className={styles.licDates}>
            <LicField label="3 DOB" value="04/12/1991" />
            <LicField label="4a ISS" value="04/12/2025" />
            <LicField label="4b EXP" value="04/12/2029" />
          </div>
          <div className={styles.licGrid}>
            {SMALL_FIELDS.map(([k, v]) => (
              <LicField key={k} label={k} value={v} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.licSigRow}>
        <span className={styles.licSignature}>Jordan A. Sample</span>
        <div className={styles.licGhost} />
      </div>
      <div className={styles.licMicroprint}>
        SAMPLE CARD · FICTIONAL DATA · NOT A GOVERNMENT DOCUMENT
      </div>
    </>
  );
}
