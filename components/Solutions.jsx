import Icon from "./Icon";
import Pill from "./Pill";

const COLUMNS = [
  { icon: "i-inbox", bg: "bg-accentsoft", fg: "text-accent", text: "Route every DM, comment and form fill to the right inbox, so nothing sits unanswered overnight." },
  { icon: "i-funnel", bg: "bg-tealsoft", fg: "text-teal", text: "Score and prioritize leads automatically, so your team spends calls on the ones ready to buy." },
  { icon: "i-report", bg: "bg-warnsoft", fg: "text-warn", text: "See every channel's numbers in one dashboard, without chasing five different logins for a status update." },
];

const NAV_ITEMS = [
  { icon: "i-home", label: "Home", active: true },
  { icon: "i-taskflow", label: "My runs · 22" },
  { icon: "i-inbox", label: "Inbox · 15" },
  { icon: "i-report", label: "Reporting" },
  { icon: "i-grid", label: "Channels" },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-12" data-aos="fade-up">
          <Pill>Solutions</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Solve your team&apos;s biggest bottlenecks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line mt-8" data-aos="fade-up">
          {COLUMNS.map((c, i) => (
            <div key={c.icon} className={`group p-6 pt-7 border-t md:border-t-0 md:border-l border-line ${i === 0 ? "md:border-l-0 border-t-0" : ""}`}>
              <div className={`w-9 h-9 rounded-[9px] ${c.bg} ${c.fg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <Icon name={c.icon} />
              </div>
              <p className="text-inksoft text-sm">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 rounded-xl2 bg-accent p-4 sm:p-8 shadow-cardlg" data-aos="fade-up">
          <div className="rounded-[18px] overflow-hidden bg-surface grid grid-cols-1 md:grid-cols-[190px_1fr] min-h-[340px]">
            <div className="hidden md:block bg-surface2 border-r border-line p-5 text-left">
              <div className="flex items-center gap-2 font-extrabold text-sm mb-5">
                <span className="grid grid-cols-2 gap-[3px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                  <span className="w-[5px] h-[5px] rounded-full bg-ink"></span>
                  <span className="w-[5px] h-[5px] rounded-full bg-ink"></span>
                  <span className="w-[5px] h-[5px] rounded-full bg-ink"></span>
                </span>
                Flowbridge
              </div>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm font-semibold mb-1 ${
                    item.active ? "bg-accentsoft text-accent" : "text-inksoft"
                  }`}
                >
                  <Icon name={item.icon} className="w-3.5 h-3.5" /> {item.label}
                </div>
              ))}
            </div>
            <div className="p-5 sm:p-7 text-left">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-extrabold">Good morning, team 👋</h4>
                <Pill>Customize</Pill>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr] gap-4">
                <div className="bg-surface2 border border-line rounded-xl p-4">
                  <h5 className="text-xs font-bold text-inksoft mb-3">To-do list</h5>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <input type="checkbox" checked readOnly className="accent-accent" /> Approve Instagram queue
                  </label>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <input type="checkbox" readOnly className="accent-accent" /> Review lead scoring rules
                  </label>
                  <label className="flex items-center gap-2 text-sm font-semibold">
                    <input type="checkbox" readOnly className="accent-accent" /> Confirm call script v2
                  </label>
                </div>
                <div className="bg-surface2 border border-line rounded-xl p-4">
                  <h5 className="text-xs font-bold text-inksoft mb-3">Time saved</h5>
                  <div className="text-2xl font-extrabold tabular-nums">04:21:58</div>
                  <div className="text-xs text-inksoft mt-1">this week, across all runs</div>
                </div>
                <div className="bg-surface2 border border-line rounded-xl p-4 flex items-center justify-center">
                  <svg width="76" height="76" viewBox="0 0 76 76">
                    <circle cx="38" cy="38" r="30" fill="none" stroke="var(--line)" strokeWidth="9" />
                    <circle
                      cx="38"
                      cy="38"
                      r="30"
                      fill="none"
                      stroke="var(--warn)"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray="141 188.5"
                      transform="rotate(-90 38 38)"
                    />
                    <text x="38" y="42" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="15" fontWeight="800" fill="var(--ink)">
                      75%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
