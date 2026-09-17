"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  ["#solutions", "Solutions"],
  ["#toolkit", "Toolkit"],
  ["#process", "Process"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);

  // Highlights whichever section is currently in view, so the active pill
  // tracks real scroll position instead of being hardcoded.
  useEffect(() => {
    const sections = LINKS.map(([href]) => document.querySelector(href)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActiveHref(`#${top.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky z-40 backdrop-blur bg-bg/85" style={{ top: "env(safe-area-inset-top,0px)" }}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-[9px] bg-ink flex items-center justify-center flex-none">
            <Icon name="i-node" />
          </span>
          Flowbridge
        </a>

        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
          {LINKS.map(([href, label]) => {
            const active = activeHref === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`inline-block text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                    active
                      ? "text-accent bg-[rgba(59,130,246,0.14)] shadow-[0_0_0_1px_rgba(70,140,255,0.35),0_0_18px_-6px_rgba(59,130,246,0.6)]"
                      : "text-inksoft hover:text-ink"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full bg-ink text-bg hover:brightness-125"
          >
            Get in touch
          </a>
          <button
            className="md:hidden w-9 h-9 rounded-full border border-line bg-surface flex items-center justify-center text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <Icon name={open ? "i-close" : "i-menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <ul className="flex flex-col gap-1 p-4 list-none m-0">
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-inksoft">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
