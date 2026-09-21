"use client";

import { useState } from "react";
import Icon from "./Icon";
import { MOCKUPS } from "./mockups";
import { TONES } from "./tones";
import { CATEGORIES, SYSTEMS, SYSTEMS_INTRO, CONTACT_EMAIL } from "@/data/content";

export default function Systems() {
  const [activeId, setActiveId] = useState(SYSTEMS[0].id);
  const active = SYSTEMS.find((s) => s.id === activeId);
  const Mock = MOCKUPS[active.id];
  const index = SYSTEMS.findIndex((s) => s.id === activeId) + 1;
  const activeTone = TONES[active.category];

  return (
    <section id="systems" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[720px]" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{SYSTEMS_INTRO.label}</p>
          <h2 className="text-4xl sm:text-5xl mt-4">{SYSTEMS_INTRO.heading}</h2>
          <p className="text-inksoft text-base sm:text-lg mt-5 max-w-[58ch]">{SYSTEMS_INTRO.copy}</p>
        </div>

        {/* mobile: horizontal chip scroller so the detail stays right under it */}
        <div className="lg:hidden mt-8 -mx-5 px-5 overflow-x-auto flex gap-2 pb-3" role="tablist" aria-label="Systems">
          {SYSTEMS.map((s) => {
            const on = s.id === activeId;
            const tone = TONES[s.category];
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActiveId(s.id)}
                className={`flex-none flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-bold whitespace-nowrap transition-colors ${
                  on ? `${tone.solid} text-white border-transparent` : "bg-surface border-line"
                }`}
              >
                <Icon name={s.icon} className="w-3.5 h-3.5" />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="mt-6 lg:mt-12 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-10 items-start">
          <nav aria-label="Systems" className="hidden lg:block space-y-6" data-aos="fade-up">
            {CATEGORIES.map((cat) => {
              const tone = TONES[cat.id];
              return (
                <div key={cat.id}>
                  <h3 className="font-body text-[11px] uppercase tracking-[0.18em] text-inksoft font-bold pb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tone.solid}`}></span>
                    {cat.label}
                  </h3>
                  <ul className="list-none m-0 p-0 space-y-1">
                    {SYSTEMS.filter((s) => s.category === cat.id).map((s) => {
                      const on = s.id === activeId;
                      return (
                        <li key={s.id}>
                          <button
                            onClick={() => setActiveId(s.id)}
                            aria-current={on}
                            className={`w-full flex items-center gap-3 text-left rounded-xl px-3 py-2.5 transition-all ${
                              on ? "bg-surface border border-line shadow-card" : "border border-transparent hover:bg-surface2"
                            }`}
                          >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-none ${tone.soft} ${tone.text}`}>
                              <Icon name={s.icon} className="w-4 h-4" />
                            </span>
                            <span className={`flex-1 text-[14.5px] ${on ? "font-extrabold" : "font-semibold"}`}>{s.title}</span>
                            {on && <Icon name="i-chevron" className="w-4 h-4 -rotate-90 text-inksoft" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>

          <div className="lg:sticky lg:top-24" data-aos="fade-up" data-aos-delay="80">
            <div key={active.id} className="rounded-xl2 border border-line bg-surface2 p-5 sm:p-8 animate-[fadeIn_.35s_ease-out]">
              <div className="flex items-center gap-3">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${activeTone.solid} text-white`}>
                  <Icon name={active.icon} className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-inksoft">
                  {String(index).padStart(2, "0")} / {SYSTEMS.length}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl leading-[1.05] mt-4">{active.title}</h3>
              <p className={`text-lg sm:text-xl font-bold mt-3 max-w-[40ch] ${activeTone.text}`}>{active.tagline}</p>
              <p className="text-inksoft text-[15px] leading-relaxed mt-3 max-w-[60ch]">{active.text}</p>

              <div className="grid md:grid-cols-[1fr_1.05fr] gap-7 mt-7 items-start">
                <div>
                  <ul className="list-none m-0 p-0 space-y-3">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-none mt-px ${activeTone.soft} ${activeTone.text}`}>
                          <Icon name="i-check" className="w-3 h-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl bg-surface border border-line px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-inksoft">Best for</div>
                    <div className="text-sm font-bold mt-0.5">{active.bestFor}</div>
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(active.title)}`}
                    className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full bg-accent text-accentink hover:brightness-110 transition mt-5"
                  >
                    Ask about this system
                  </a>
                </div>
                <Mock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
