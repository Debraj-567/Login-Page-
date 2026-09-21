"use client";

import { useState } from "react";
import Icon from "./Icon";
import { FAQ, CONTACT_EMAIL } from "@/data/content";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-base sm:text-lg">{item.q}</span>
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-none transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-accentsoft text-accent border-transparent" : "border-line text-inksoft"
          }`}
        >
          <Icon name="i-chevron" className="w-3.5 h-3.5" />
        </span>
      </button>
      <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="text-inksoft text-sm sm:text-base pb-5 pr-10 max-w-[64ch]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20">
        <div data-aos="fade-up">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
          <h2 className="text-4xl sm:text-5xl mt-4">{FAQ.heading}</h2>

          <div className="mt-10 max-w-[420px] rounded-2xl border border-line bg-surface2 p-6 lg:sticky lg:top-28">
            <span className="w-11 h-11 rounded-xl bg-accentsoft text-accent flex items-center justify-center">
              <Icon name="i-chatbot" className="w-5 h-5" />
            </span>
            <h3 className="text-xl mt-4">Still have a question?</h3>
            <p className="text-inksoft text-sm mt-2 leading-relaxed">
              Tell us what you are trying to fix and we will tell you honestly whether a system can help, and which one.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("A question about Flowbridge")}`}
                className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full bg-accent text-accentink hover:brightness-110 transition"
              >
                Ask us directly
              </a>
              <a
                href="#stack"
                className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full bg-surface border border-line hover:border-accent hover:text-accent transition-colors"
              >
                Build your stack
              </a>
            </div>
            <p className="text-xs text-inksoft mt-4">{CONTACT_EMAIL}</p>
          </div>
        </div>

        <div className="border-t border-ink" data-aos="fade-up" data-aos-delay="80">
          {FAQ.items.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
