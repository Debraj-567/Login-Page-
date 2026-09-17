import Icon from "./Icon";

const RUN_BARS = [
  { label: "New leads synced — 60%", color: "bg-accent", width: "60%" },
  { label: "Posts queued — 100%", color: "bg-teal", width: "100%" },
  { label: "Calls placed — 42%", color: "bg-warn", width: "42%" },
];

// Hub-and-spoke connector paths, drawn in a 0–100 percentage viewBox so they
// track the four corner cards regardless of the container's actual pixel size.
const CONNECTORS = [
  { d: "M50,50 C 36,36 24,22 15,12", color: "var(--warn)" },
  { d: "M50,50 C 64,36 76,22 85,12", color: "var(--accent)" },
  { d: "M50,50 C 36,64 24,78 15,88", color: "var(--teal)" },
  { d: "M50,50 C 64,64 76,78 85,88", color: "var(--accent)" },
];

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-4 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-accentsoft opacity-60 blur-3xl animate-drift"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute top-10 -right-28 w-[320px] h-[320px] rounded-full bg-tealsoft opacity-50 blur-3xl animate-drift-slow"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto" data-aos="fade-up">
          <h1 className="text-[2.4rem] sm:text-6xl leading-[1.05]">
            Automate, delegate,
            <span className="block text-inksoft">and grow — all in one place.</span>
          </h1>
          <p className="text-inksoft text-lg max-w-[44ch] mx-auto mt-6 mb-8">
            Efficiently offload your busywork to systems that run themselves, and get your team&apos;s time back.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full bg-accent text-accentink shadow-[0_14px_28px_-12px_rgba(47,111,237,.55)] hover:brightness-105"
          >
            Get free audit
          </a>
        </div>

        <div
          className="relative max-w-[980px] mx-auto mt-12 h-[440px] hidden lg:block"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* connector lines, drawn beneath the cards */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {CONNECTORS.map((c) => (
              <g key={c.d}>
                <path d={c.d} fill="none" stroke="var(--line)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
                <path
                  d={c.d}
                  fill="none"
                  stroke={c.color}
                  strokeWidth="0.45"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="dash-flow"
                  opacity="0.85"
                />
              </g>
            ))}
          </svg>

          <div
            className="absolute top-[3%] left-[3%] w-[190px] -rotate-6 bg-warnsoft rounded-xl p-4 text-left text-sm font-semibold shadow-cardlg"
            style={{ color: "#7A5410" }}
          >
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full shadow-card"
              style={{ background: "#E4572E" }}
            ></span>
            Batch-approve every lead in one pass to save 20 minutes a day.
            <span className="absolute -bottom-3.5 -right-2.5 w-8 h-8 rounded-[9px] bg-accent text-white flex items-center justify-center shadow-card">
              <Icon name="i-check" />
            </span>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] rounded-[18px] bg-ink text-bg flex items-center justify-center shadow-cardlg z-10">
            <Icon name="i-node" className="w-7 h-7" />
          </div>

          <div className="absolute top-[3%] right-[3%] w-[190px] rotate-3 bg-surface border border-line rounded-xl p-4 text-left shadow-cardlg">
            <div className="text-xs font-bold text-inksoft mb-2">Scheduled sends</div>
            <div className="text-sm font-bold">Instagram carousel</div>
            <span className="inline-flex items-center gap-1 text-xs text-inksoft bg-surface2 rounded-md px-2 py-0.5 mt-1 tabular-nums">
              <Icon name="i-clock" className="w-2.5 h-2.5" /> 10:00 – 10:05
            </span>
            <div className="text-sm font-bold mt-3">WhatsApp broadcast</div>
            <span className="inline-flex items-center gap-1 text-xs text-inksoft bg-surface2 rounded-md px-2 py-0.5 mt-1 tabular-nums">
              <Icon name="i-clock" className="w-2.5 h-2.5" /> 14:00 – 14:10
            </span>
          </div>

          <div className="absolute bottom-[3%] left-[3%] w-[230px] bg-surface border border-line rounded-xl p-4 text-left shadow-cardlg">
            <div className="text-sm font-bold mb-3">Today&apos;s automations</div>
            {RUN_BARS.map((row, i) => (
              <div className={i < RUN_BARS.length - 1 ? "mb-3" : ""} key={row.label}>
                <div className="flex items-center gap-2 text-xs font-semibold text-inksoft mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${row.color}`}></span>
                  {row.label}
                </div>
                <div className="h-1.5 rounded-full bg-surface2 overflow-hidden">
                  <span className={`block h-full rounded-full ${row.color}`} style={{ width: row.width }}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-[3%] right-[3%] w-[200px] bg-surface border border-line rounded-xl p-4 text-left shadow-cardlg">
            <div className="text-xs font-bold text-inksoft mb-3">12+ integrations</div>
            <div className="flex gap-2 flex-wrap">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "#DCFCE7", color: "#16A34A" }}>
                <Icon name="i-email" />
              </span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "#DCFCE7", color: "#16A34A" }}>
                <Icon name="i-chatbot" />
              </span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "#DBEAFE", color: "#2563EB" }}>
                <Icon name="i-linkedin" />
              </span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "#FCE7F3", color: "#DB2777" }}>
                <Icon name="i-instagram" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
