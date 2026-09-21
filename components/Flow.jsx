import Icon from "./Icon";
import { FLOW } from "@/data/content";

export default function Flow() {
  return (
    <section id="flow" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[720px]" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{FLOW.label}</p>
          <h2 className="text-4xl sm:text-5xl mt-4">{FLOW.heading}</h2>
          <p className="text-inksoft text-base sm:text-lg mt-5 max-w-[58ch]">{FLOW.copy}</p>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-[34px] left-[8%] right-[8%] h-[2px] flow-line opacity-60" aria-hidden="true"></div>
          <ol className="relative list-none m-0 p-0 grid sm:grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-9">
            {FLOW.steps.map((s, i) => (
              <li key={s.title} data-aos="fade-up" data-aos-delay={i * 70} className="text-left lg:text-center">
                <div className="flex lg:justify-center">
                  <span className="relative w-[68px] h-[68px] rounded-2xl bg-surface border border-line shadow-card flex items-center justify-center text-accent">
                    <Icon name={s.icon} className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accentink text-[11px] font-extrabold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </span>
                </div>
                <h3 className="text-base mt-4">{s.title}</h3>
                <p className="text-inksoft text-[13px] leading-relaxed mt-1.5">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
