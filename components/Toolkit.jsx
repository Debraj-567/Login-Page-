"use client";

import { useState } from "react";
import Icon from "./Icon";
import Pill from "./Pill";
import { TOOLKIT } from "@/data/toolkit";

export default function Toolkit() {
  const [selected, setSelected] = useState([]);

  function toggle(title) {
    setSelected((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
  }

  return (
    <section id="toolkit" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-12" data-aos="fade-up">
          <Pill>The full toolkit</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Twelve systems, three jobs: post, talk, and track</h2>
          <p className="text-inksoft mt-4">Tap a system to mark it as one you want to switch on first.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5" data-aos="fade-up">
          {TOOLKIT.map((item) => {
            const isOn = selected.includes(item.title);
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => toggle(item.title)}
                aria-pressed={isOn}
                className={`group relative text-left bg-surface border rounded-xl p-4 flex gap-3 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer ${
                  isOn ? "border-accent shadow-card ring-1 ring-accent/30" : "border-line hover:border-accent/40"
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-[9px] flex items-center justify-center flex-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    isOn ? "bg-accent text-accentink" : "bg-accentsoft text-accent"
                  }`}
                >
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                  <p className="text-xs text-inksoft">{item.text}</p>
                </div>
                <span
                  className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isOn ? "bg-accent text-accentink scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                >
                  <Icon name="i-check" className="w-3 h-3" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
