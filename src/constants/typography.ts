/**
 * Mutech Business Typography System
 * 
 * Primary Typeface: IBM Plex Sans
 * Rationale: Designed for structured thinking, not marketing.
 * Industrial, sober, rational. Does not feel "startup".
 */

export const typography = {
  fontFamily: {
    primary: '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  
  weights: {
    regular: 400, // Body text
    medium: 500, // Subheadings, Buttons / CTAs
    semibold: 600, // Headings (H1-H3)
  },
  
  usage: {
    headings: {
      h1: { weight: 600, lineHeight: 1.2 },
      h2: { weight: 600, lineHeight: 1.2 },
      h3: { weight: 600, lineHeight: 1.2 },
    },
    subheadings: {
      weight: 500,
      lineHeight: 1.3,
    },
    body: {
      weight: 400,
      lineHeight: 1.6,
    },
    buttons: {
      weight: 500,
    },
  },
} as const

/**
 * Font Characteristics:
 * - No playful fonts
 * - No rounded "friendly" fonts
 * - No decorative typography
 * - No serif fonts
 * 
 * All text must remain highly legible and neutral.
 */

