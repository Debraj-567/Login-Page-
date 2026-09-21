"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { NAV_LINKS, NAV_CTA } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(null);

  useEffect(() => {
    const sections = NAV_LINKS.map(([href]) => document.querySelector(href)).filter(Boolean);
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
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/90 border-b border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 py-3.5">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-[9px] bg-accent text-accentink flex items-center justify-center flex-none">
            <Icon name="i-node" />
          </span>
          Flowbridge
        </a>

        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(([href, label]) => {
            const active = activeHref === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`inline-block text-sm font-semibold px-3.5 py-2 rounded-full transition-colors duration-200 ${
                    active ? "text-accent bg-accentsoft" : "text-inksoft hover:text-ink"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full bg-accent text-accentink hover:brightness-110 transition"
          >
            {NAV_CTA}
          </a>
          <button
            className="lg:hidden w-9 h-9 rounded-full border border-line bg-surface flex items-center justify-center text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <Icon name={open ? "i-close" : "i-menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <ul className="flex flex-col gap-1 p-4 list-none m-0">
            {NAV_LINKS.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-inksoft">
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex font-bold text-sm px-5 py-2.5 rounded-full bg-accent text-accentink"
              >
                {NAV_CTA}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
