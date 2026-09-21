"use client";

import { useState } from "react";
import Icon from "./Icon";
import { TONES } from "./tones";
import { STACK, SYSTEMS, CONTACT_EMAIL } from "@/data/content";

export default function StackBuilder() {
  const [picked, setPicked] = useState([]);

  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const applyBundle = (ids) => setPicked(ids);

  const titles = SYSTEMS.filter((s) => picked.includes(s.id)).map((s) => s.title);
  const body = titles.length
    ? `Hi Flowbridge,\n\nI'm interested in these systems:\n${titles.map((t) => `- ${t}`).join("\n")}\n\nHere is a little about my business:\n`
    : "Hi Flowbridge,\n\nI'd like a free audit.\n";
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("My Flowbridge stack")}&body=${encodeURIComponent(body)}`;

  return (
    <section id="stack" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-end" data-aos="fade-up">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{STACK.label}</p>
            <h2 className="text-4xl sm:text-5xl mt-4">{STACK.heading}</h2>
          </div>
          <p className="text-inksoft text-base sm:text-lg max-w-[52ch]">{STACK.copy}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-inksoft mr-1">Start from a bundle</span>
          {STACK.bundles.map((b) => (
            <button
              key={b.name}
              onClick={() => applyBundle(b.ids)}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold hover:border-accent hover:text-accent transition-colors"
            >
              {b.name}
            </button>
          ))}
          {picked.length > 0 && (
            <button onClick={() => setPicked([])} className="text-sm font-semibold text-inksoft underline underline-offset-4 ml-1">
              Clear
            </button>
          )}
        </div>

        <ul className="list-none m-0 p-0 mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3" data-aos="fade-up" data-aos-delay="60">
          {SYSTEMS.map((s) => {
            const on = picked.includes(s.id);
            const tone = TONES[s.category];
            return (
              <li key={s.id}>
                <button
                  onClick={() => toggle(s.id)}
                  aria-pressed={on}
                  className={`w-full h-full text-left rounded-2xl border p-4 flex items-center gap-3 transition-all ${
                    on ? "border-accent bg-accentsoft shadow-card" : "border-line bg-surface hover:border-accent/50"
                  }`}
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-none ${tone.soft} ${tone.text}`}>
                    <Icon name={s.icon} className="w-5 h-5" />
                  </span>
                  <span className="flex-1 text-sm font-bold leading-snug">{s.title}</span>
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-none ${
                      on ? "bg-accent border-accent text-accentink" : "border-line"
                    }`}
                  >
                    {on && <Icon name="i-check" className="w-3 h-3" />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-2xl bg-surface border border-line text-ink px-5 sm:px-7 py-5 flex items-center justify-between gap-4 flex-wrap sticky bottom-4 z-20 shadow-cardlg">
          <div>
            <div className="font-display text-xl font-semibold">
              {picked.length ? `${picked.length} system${picked.length > 1 ? "s" : ""} selected` : "Nothing selected yet"}
            </div>
            <div className="text-sm text-inksoft mt-0.5 max-w-[60ch]">
              {picked.length ? titles.join(" · ") : "Pick a few, or just ask for a free audit and we will recommend."}
            </div>
          </div>
          <a
            href={href}
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full bg-accent text-accentink hover:brightness-110 transition"
          >
            {picked.length ? "Send this to Flowbridge" : "Get a free audit"}
          </a>
        </div>
      </div>
    </section>
  );
}
