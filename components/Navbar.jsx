"use client";

import { useState } from "react";
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

  return (
    <header className="sticky z-40 backdrop-blur bg-bg/85" style={{ top: "env(safe-area-inset-top,0px)" }}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="w-8 h-8 rounded-[9px] bg-ink flex items-center justify-center flex-none">
            <Icon name="i-node" />
          </span>
          Flowbridge
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-sm font-semibold text-inksoft hover:text-ink">
                {label}
              </a>
            </li>
          ))}
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
