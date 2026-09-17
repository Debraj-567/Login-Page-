import Pill from "./Pill";
import BentoCard from "./BentoCard";

const INBOX_ROWS = [
  { bg: "#DBEAFE", text: "New lead from Instagram DM — Priya wants pricing." },
  { bg: "#DCFCE7", text: "WhatsApp: order #245 confirmed automatically." },
  { bg: "#FCE7F3", text: "Missed call follow-up sent via SMS." },
];

const SCHEDULE_ROWS = [
  { color: "bg-accent", label: "Mon · LinkedIn post — 09:00" },
  { color: "bg-teal", label: "Tue · Voice follow-ups — 11:00" },
  { color: "bg-warn", label: "Wed · Email digest — 08:00" },
  { color: "bg-accent", label: "Thu · Attendance report — 18:00" },
];

const WIDGET_CHIPS = ["Themes", "Widgets", "Runs view", "Channels"];

export default function Bento() {
  return (
    <section id="keep" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-12" data-aos="fade-up">
          <Pill>Everything, connected</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Keep every channel in one place</h2>
          <p className="text-inksoft mt-4">Forget switching between six tabs to see what&apos;s actually happening in your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BentoCard title="One inbox, every channel" text="WhatsApp, Instagram, email and calls land in a single feed, tagged and routed to the right person.">
            <div className="w-full text-left space-y-2.5">
              {INBOX_ROWS.map((row) => (
                <div className="flex gap-2 items-start text-xs" key={row.text}>
                  <span className="w-6 h-6 rounded-full flex-none" style={{ background: row.bg }}></span>
                  <span className="bg-surface border border-line rounded-lg px-2.5 py-1.5 font-semibold">{row.text}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard delay="100" title="Live run tracking" text="Every automation shows its status in real time, so you always know what ran, what's queued, and what needs a human.">
            <div className="flex items-center gap-5">
              <svg width="88" height="88" viewBox="0 0 88 88">
                <circle cx="44" cy="44" r="34" fill="none" stroke="var(--line)" strokeWidth="10" />
                <circle
                  cx="44"
                  cy="44"
                  r="34"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="160 213.6"
                  transform="rotate(-90 44 44)"
                />
                <text x="44" y="49" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="17" fontWeight="800" fill="var(--ink)">
                  75%
                </text>
              </svg>
              <div className="text-left">
                <div className="flex">
                  <span className="w-6 h-6 rounded-full border-2 border-surface2" style={{ background: "#DBEAFE" }}></span>
                  <span className="w-6 h-6 rounded-full border-2 border-surface2 -ml-2" style={{ background: "#DCFCE7" }}></span>
                  <span className="w-6 h-6 rounded-full border-2 border-surface2 -ml-2" style={{ background: "#FCE7F3" }}></span>
                </div>
                <div className="text-xs text-inksoft font-semibold mt-2">Team workload</div>
              </div>
            </div>
          </BentoCard>

          <BentoCard title="A schedule that runs itself" text="Set the cadence once — every post, message and report fires on time without anyone pressing send.">
            <div className="w-full text-left">
              {SCHEDULE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center gap-2 text-xs font-semibold py-1.5 ${i < SCHEDULE_ROWS.length - 1 ? "border-b border-dashed border-line" : ""}`}
                >
                  <span className={`w-2 h-2 rounded-full ${row.color}`}></span>
                  {row.label}
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard delay="100" title="Dashboards built for you" text="Pick the widgets that matter to your business and we'll arrange the dashboard around them, not the other way round.">
            <div className="flex gap-2 flex-wrap justify-center">
              {WIDGET_CHIPS.map((chip) => (
                <span key={chip} className="px-4 py-2 rounded-full bg-surface border border-line text-sm font-bold">
                  {chip}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
