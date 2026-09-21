import { ApprovalMock } from "./mockups";
import { WHY } from "@/data/content";

export default function Why() {
  return (
    <section className="py-16 sm:py-24 bg-surface2 border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20">
        <div data-aos="fade-up">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">{WHY.label}</p>
          <h2 className="text-4xl sm:text-5xl mt-4">{WHY.heading}</h2>
          <div className="mt-10 max-w-[440px] lg:sticky lg:top-28">
            <ApprovalMock />
          </div>
        </div>

        <ul className="list-none m-0 p-0" data-aos="fade-up" data-aos-delay="80">
          {WHY.points.map((p, i) => (
            <li key={p.title} className="flex gap-5 py-6 border-t border-line first:border-t-ink">
              <span className="text-xs font-semibold text-accent pt-1.5">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-inksoft text-sm sm:text-base mt-1.5 max-w-[52ch]">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
