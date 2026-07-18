/**
 * Central Design Token System
 * ----------------------------------------------------------------
 * Single source of truth for colors, spacing, radius, typography.
 * Repixm badalni ho to sirf yahan edit karo — poori app update ho jayegi.
 */

export const colors = {
  background: "#FFFBFE", // app ka background — near-white
  surface: "#FFFFFF",    // cards, panels
  border: "#D0CFCF",     // hairlines, dividers
  muted: "#7A7D7D",      // secondary text, icons
  foreground: "#565254", // primary text, headings
} as const;

export const radius = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
  "2xl": "64px",
} as const;

export const motion = {
  fast: "120ms",
  base: "200ms",
  slow: "400ms",
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const designTokens = { colors, radius, spacing, motion } as const;
export type DesignTokens = typeof designTokens;