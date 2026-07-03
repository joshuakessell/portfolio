"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hydration-safe wrapper around useReducedMotion.
 *
 * useReducedMotion() returns null on the server and the real preference on
 * the client. Branching render trees on it directly causes a hydration
 * mismatch for reduced-motion users, which React refuses to patch up and
 * leaves animated elements stuck at their initial (hidden) state.
 *
 * This hook always returns false for the server render and the first client
 * render (so the trees match), then flips to the real preference after mount.
 */
export function useReducedMotionSafe(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? Boolean(prefersReducedMotion) : false;
}
