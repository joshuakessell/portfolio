import { useEffect, useState, type RefObject } from "react";
import { CHAPTERS } from "./chapters";

function indexForTime(time: number): number {
  let active = 0;
  for (let i = 0; i < CHAPTERS.length; i += 1) {
    if (time >= CHAPTERS[i].t) active = i;
  }
  return active;
}

// Tracks which chapter the video is currently playing, driven by timeupdate.
export function useActiveChapter(ref: RefObject<HTMLVideoElement | null>): number {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setActive(indexForTime(el.currentTime));
    el.addEventListener("timeupdate", onTime);
    return () => el.removeEventListener("timeupdate", onTime);
  }, [ref]);

  return active;
}
