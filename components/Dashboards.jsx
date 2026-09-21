import { MOCKUPS } from "./mockups";
import { DASHBOARDS, SYSTEMS } from "@/data/content";

export default function Dashboards() {
  return (
    <section id="dashboards" className="py-16 sm:py-24 bg-surface2 border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-end" data-aos="fade-up">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">{DASHBOARDS.label}</p>
            <h2 className="text-4xl sm:text-6xl mt-4">{DASHBOARDS.heading}</h2>
          </div>
          <p className="text-inksoft text-base sm:text-lg max-w-[52ch]">{DASHBOARDS.copy}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {DASHBOARDS.ids.map((id, i) => {
            const sys = SYSTEMS.find((s) => s.id === id);
            const Mock = MOCKUPS[id];
            return (
              <article key={id} data-aos="fade-up" data-aos-delay={i * 80} className="flex flex-col">
                <div className="flex-1 flex [&>div]:w-full [&>div]:h-full">
                  <Mock />
                </div>
                <h3 className="text-xl mt-5">{sys.title}</h3>
                <p className="text-inksoft text-sm mt-1.5 min-h-[2.6rem]">{DASHBOARDS.blurbs[id]}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
