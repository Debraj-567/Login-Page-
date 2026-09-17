// One inline SVG sprite of every icon glyph used across the page, referenced
// elsewhere via <Icon name="i-..."/> and an SVG <use> element.
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <g id="i-check" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></g>
        <g id="i-clock" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6.8" /><path d="M10 6.5V10l2.6 1.6" /></g>
        <g id="i-node" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="4.5" r="1.8" /><circle cx="4.5" cy="15" r="1.8" /><circle cx="15.5" cy="15" r="1.8" /><path d="M10 6.3v3M8.8 10.5 6 13.4M11.2 10.5 14 13.4" /></g>
        <g id="i-home" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 9.5 10 4l6.5 5.5" /><path d="M5.5 8.5V16h9V8.5" /></g>
        <g id="i-inbox" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 5 5h10l2 6" /><path d="M3 11v4.5h14V11" /><path d="M3 11h4l1 2h4l1-2h4" /></g>
        <g id="i-report" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15.5V9M10 15.5V5M15 15.5v-7" /></g>
        <g id="i-grid" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1.2" /><rect x="11" y="3" width="6" height="6" rx="1.2" /><rect x="3" y="11" width="6" height="6" rx="1.2" /><rect x="11" y="11" width="6" height="6" rx="1.2" /></g>
        <g id="i-taskflow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="3.5" width="4.6" height="13" rx="1" /><rect x="8.7" y="3.5" width="4.6" height="8.5" rx="1" /><rect x="14.9" y="3.5" width="2.6" height="6" rx="1" /></g>
        <g id="i-linkedin" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="14" height="12" rx="1.5" /><path d="M7 12v5M7 9.2v.01" /><path d="M11 17v-3.2c0-1.2.8-1.8 1.8-1.8S14.5 12.6 14.5 13.8V17M11 12.3V17" /></g>
        <g id="i-instagram" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3.2" y="3.2" width="13.6" height="13.6" rx="4" /><circle cx="10" cy="10" r="3.4" /><path d="M14 6v.01" /></g>
        <g id="i-email" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="15" height="11" rx="1.8" /><path d="M3 6l7 5.2L17 6" /></g>
        <g id="i-funnel" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h14l-5.5 6.4v5.1L8.5 17v-6.6z" /></g>
        <g id="i-chatbot" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.5A2 2 0 0 1 5 3.5h10a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H8l-4 3.5V14H5a2 2 0 0 1-2-2z" /><circle cx="7.3" cy="8.5" r=".7" fill="currentColor" stroke="none" /><circle cx="10" cy="8.5" r=".7" fill="currentColor" stroke="none" /><circle cx="12.7" cy="8.5" r=".7" fill="currentColor" stroke="none" /></g>
        <g id="i-bulk" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4h9v7h-9z" /><path d="M8.5 7h9v7h-9z" /><path d="M5 12.5v2.3l2.3-2.3" /></g>
        <g id="i-voice" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3.5a2.6 2.6 0 0 1 2.6 2.6v4.4a2.6 2.6 0 1 1-5.2 0V6.1A2.6 2.6 0 0 1 10 3.5z" /><path d="M5 9.6v.8a5 5 0 0 0 10 0v-.8M10 15.4v1.6M7.5 17h5" /></g>
        <g id="i-avatar" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="3.2" /><path d="M3.6 17c.8-3.4 3.4-5.2 6.4-5.2S16 13.6 16.4 17" /><path d="M14.5 4.2 16 3M16 3l1 1.3M16 3l-1.3.6" /></g>
        <g id="i-attendance" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6.8" /><path d="M10 6.5V10l2.6 1.6" /></g>
        <g id="i-news" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3.5h9a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5H5.8A1.8 1.8 0 0 1 4 14.7z" /><path d="M6.4 7h5.2M6.4 9.5h5.2M6.4 12h3" /></g>
        <g id="i-crm" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="3.5" width="15" height="12" rx="1.6" /><path d="M6 13v-3.2M10 13V7.5M14 13v-5" /></g>
        <g id="i-sun" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="10" cy="10" r="3.3" /><path d="M10 2.8v1.6M10 15.6v1.6M17.2 10h-1.6M4.4 10H2.8M15.1 4.9l-1.1 1.1M6 14l-1.1 1.1M15.1 15.1 14 14M6 6 4.9 4.9" /></g>
        <g id="i-moon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 12.3A6.8 6.8 0 0 1 7.7 3.5 6.8 6.8 0 1 0 16.5 12.3z" /></g>
        <g id="i-menu" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M3 5.5h14M3 10h14M3 14.5h14" /></g>
        <g id="i-close" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M5 5l10 10M15 5 5 15" /></g>
        <g id="i-chevron" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 7.5 10 12l4.5-4.5" /></g>
        <g id="i-calendar" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.2" width="14" height="12.3" rx="1.8" /><path d="M3 8.2h14M7 2.8v3M13 2.8v3" /></g>
        <g id="i-meta" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13.5c0-4.5 2-7.5 4-7.5s2.7 2.3 3 4c.3-1.7 1-4 3-4s4 3 4 7.5c-1 0-2-.6-3-2.3-.6-1-1.2-2.6-1.6-4-.4 1.4-1 3-1.6 4-.8 1.4-1.7 2.3-2.8 2.3s-2-.9-2.8-2.3c-.6-1-1.2-2.6-1.6-4-.4 1.4-1 3-1.6 4-.6 1-1.2 1.7-2 2z" /></g>
        <g id="i-shield" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3 4 5.3v4.4c0 3.7 2.4 6.6 6 7.3 3.6-.7 6-3.6 6-7.3V5.3z" /><path d="M7.3 10 9 11.7l3.7-3.9" /></g>
        <g id="i-spark" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3v3.4M10 13.6V17M3 10h3.4M13.6 10H17M5.4 5.4l2.4 2.4M12.2 12.2l2.4 2.4M14.6 5.4l-2.4 2.4M7.8 12.2l-2.4 2.4" /></g>
      </defs>
    </svg>
  );
}
