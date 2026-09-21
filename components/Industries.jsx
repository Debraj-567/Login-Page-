"use client";

import { useState } from "react";
import Icon from "./Icon";
import { TONES } from "./tones";
import { INDUSTRIES, SYSTEMS } from "@/data/content";

export default function Industries() {
  const [activeId, setActiveId] = useState(INDUSTRIES.items[0].id);
  const active = INDUSTRIES.items.find((i) => i.id === activeId);

  return (
    <section id="industries" className="py-16 sm:py-24 bg-surface2 border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[720px]" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{INDUSTRIES.label}</p>
          <h2 className="text-4xl sm:text-5xl mt-4">{INDUSTRIES.heading}</h2>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap" role="tablist">
          {INDUSTRIES.items.map((it) => {
            const on = it.id === activeId;
            return (
              <button
                key={it.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActiveId(it.id)}
                className={`flex-none rounded-full px-5 py-2.5 text-sm font-bold border transition-colors ${
                  on ? "bg-accent text-accentink border-accent" : "bg-surface border-line hover:border-accent hover:text-accent"
                }`}
              >
                {it.name}
              </button>
            );
          })}
        </div>

        <div key={active.id} className="mt-6 grid lg:grid-cols-[1fr_1.1fr] gap-6 animate-[fadeIn_.35s_ease-out]">
          <div className="rounded-xl2 bg-surface border border-line shadow-card p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-inksoft">The problem</p>
            <p className="font-display text-2xl sm:text-[1.8rem] font-semibold leading-snug tracking-tight mt-3">{active.pain}</p>
            <ul className="list-none m-0 p-0 mt-7 space-y-3">
              {active.wins.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm font-semibold">
                  <span className="w-5 h-5 rounded-full bg-oksoft text-ok flex items-center justify-center flex-none mt-0.5">
                    <Icon name="i-check" className="w-3 h-3" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl2 bg-surface border border-line shadow-card p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-inksoft">Systems we set up</p>
            <ul className="list-none m-0 p-0 mt-4 grid sm:grid-cols-2 gap-3">
              {active.systems.map((id) => {
                const s = SYSTEMS.find((x) => x.id === id);
                const tone = TONES[s.category];
                return (
                  <li key={id} className="rounded-2xl border border-line p-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${tone.soft} ${tone.text}`}>
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <h3 className="text-[15px] mt-3">{s.title}</h3>
                    <p className="text-xs text-inksoft mt-1 leading-relaxed">{s.tagline}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
