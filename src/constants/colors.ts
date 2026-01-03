/**
 * Mutech Business Color System
 * 
 * Color is used as control, not decoration.
 * No gradients. No bright colors. No "happy" palettes.
 */

export const colors = {
  // Background Colors
  background: {
    primary: '#0F172A', // Deep slate / almost-black blue
    surface: '#111827', // Slightly lighter than background
  },
  
  // Text Colors
  text: {
    primary: '#E5E7EB', // Main readable text
    secondary: '#9CA3AF', // Supporting text
  },
  
  // Accent Color (Use Sparingly - 5-10% of screen max)
  accent: {
    primary: '#0E7490', // Deep, controlled teal
    hover: '#155E75', // Accent hover / active
  },
} as const

/**
 * Forbidden Colors & Styles:
 * - Gradients
 * - Neon / bright blues
 * - Greens associated with "growth" or "success"
 * - Purples / futuristic hues
 * - Pastels
 * - Warm tones (orange, yellow, red)
 */

