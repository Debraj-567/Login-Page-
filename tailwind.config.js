/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-soft)",
        ink: "var(--ink)",
        inksoft: "var(--ink-soft)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentink: "var(--accent-ink)",
        accentsoft: "var(--accent-soft)",
        warn: "var(--warn)",
        warnsoft: "var(--warn-soft)",
        teal: "var(--teal)",
        tealsoft: "var(--teal-soft)",
      },
      borderRadius: {
        xl2: "26px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,26,.05), 0 20px 40px -22px rgba(20,22,26,.18)",
        cardlg: "0 1px 2px rgba(20,22,26,.05), 0 32px 64px -28px rgba(20,22,26,.28)",
      },
    },
  },
  plugins: [],
};
