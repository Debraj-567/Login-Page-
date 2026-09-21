/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Clash Display"', "Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
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
        ok: "var(--ok)",
        oksoft: "var(--ok-soft)",
        warn: "var(--warn)",
        warnsoft: "var(--warn-soft)",
        hot: "var(--hot)",
        hotsoft: "var(--hot-soft)",
        violet: "var(--violet)",
        violetsoft: "var(--violet-soft)",
      },
      borderRadius: {
        xl2: "22px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,58,.04), 0 8px 24px -14px rgba(11,27,58,.12)",
        cardlg: "0 1px 2px rgba(11,27,58,.05), 0 28px 60px -32px rgba(37,99,235,.28)",
      },
    },
  },
  plugins: [],
};
