import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://www.totemgrid.io', // Site domain
    title: 'Totem Grid', // Site title
    author: 'Totem Grid', // Author name
    description:
      'Find your tribe, instantly. Seamless connection at crowded events, no compass or cell service required.', // Site description
    language: 'en-US' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '845px', // Content area width - wider for landing page
    centeredLayout: true, // Use centered layout (false for left-aligned)
    favicon: false, // Show favicon on index page
    themeToggle: false, // Show theme toggle button (uses system theme by default)
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // TOTEM GRID SPECIFIC SETTINGS ///////////////////////////////////////////////////////////////////////
  totemGrid: {
    betaSignupEnabled: true, // Enable beta signup form
    videoDemo: true, // Show video demo section
    testimonials: true // Show testimonials section
  }
}
