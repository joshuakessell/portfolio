import { useEffect, type RefObject } from "react";

// Autoplays and loops the tour unless the visitor prefers reduced motion.
// Playback is started in an effect (not the autoPlay attr) to avoid a
// hydration mismatch and to honor the OS "reduce motion" setting.
export function useAutoplay(ref: RefObject<HTMLVideoElement | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.loop = !reduce;
    if (!reduce) void el.play().catch(() => {});
  }, [ref]);
}
