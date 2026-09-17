"use client";

import { useState } from "react";
import Icon from "./Icon";
import Pill from "./Pill";
import { FAQ } from "@/data/faq";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-base sm:text-lg">{item.q}</span>
        <span
          className={`w-7 h-7 rounded-full border border-line flex items-center justify-center flex-none text-inksoft transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-accentsoft text-accent border-transparent" : ""
          }`}
        >
          <Icon name="i-chevron" className="w-3.5 h-3.5" />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-inksoft text-sm pb-5 pr-10">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[560px] mx-auto mb-10" data-aos="fade-up">
          <Pill>Questions</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Before you book a call</h2>
        </div>

        <div className="bg-surface border border-line rounded-xl px-6" data-aos="fade-up">
          {FAQ.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
