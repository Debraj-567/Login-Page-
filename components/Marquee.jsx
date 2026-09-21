import { INTEGRATIONS, GLANCE } from "@/data/content";

export default function Marquee() {
  const row = [...INTEGRATIONS, ...INTEGRATIONS];
  return (
    <section className="py-10 border-y border-line bg-surface">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-inksoft mb-6">Connects with the tools you already use</p>
      <div className="marquee overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <ul className="animate-marquee flex w-max gap-3 list-none m-0 p-0">
          {row.map(([name, color], i) => (
            <li
              key={name + i}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface2 px-5 py-2.5 text-sm font-bold whitespace-nowrap"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }}></span>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <dl className="max-w-[1180px] mx-auto px-5 sm:px-8 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 m-0">
        {GLANCE.map(([n, l]) => (
          <div key={l} className="lg:border-l lg:border-line lg:pl-6 first:border-l-0 first:pl-0">
            <dt className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-accent">{n}</dt>
            <dd className="text-sm text-inksoft mt-1.5 m-0 max-w-[24ch]">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
