import Icon from "./Icon";
import Pill from "./Pill";
import { TOOLKIT } from "@/data/toolkit";

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-12" data-aos="fade-up">
          <Pill>The full toolkit</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Twelve systems, three jobs: post, talk, and track</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5" data-aos="fade-up">
          {TOOLKIT.map((item) => (
            <div
              key={item.title}
              className="group bg-surface border border-line rounded-xl p-4 flex gap-3 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-accent/40"
            >
              <span className="w-9 h-9 rounded-[9px] bg-accentsoft text-accent flex items-center justify-center flex-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={item.icon} />
              </span>
              <div>
                <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                <p className="text-xs text-inksoft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
