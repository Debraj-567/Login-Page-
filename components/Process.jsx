import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[760px]" data-aos="fade-up">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">{PROCESS.label}</p>
          <h2 className="text-4xl sm:text-6xl mt-4">{PROCESS.heading}</h2>
        </div>

        <ol className="list-none m-0 p-0 grid sm:grid-cols-2 lg:grid-cols-4 mt-12 border-t border-ink">
          {PROCESS.steps.map((s, i) => (
            <li
              key={s.n}
              data-aos="fade-up"
              data-aos-delay={i * 70}
              className="py-7 sm:pr-8 lg:border-r lg:last:border-r-0 border-line lg:pl-8 lg:first:pl-0"
            >
              <span className="text-xs font-semibold text-accent">{s.n}</span>
              <h3 className="font-display text-4xl mt-3">{s.title}</h3>
              <p className="text-inksoft text-sm leading-relaxed mt-3">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
