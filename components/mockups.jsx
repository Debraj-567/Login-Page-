import Icon from "./Icon";

// Illustrative product screens. All names and figures are sample data.

export function Frame({ title, icon, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-line bg-surface shadow-cardlg overflow-hidden text-left ${className}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line bg-surface2">
        <span className="flex items-center gap-2 text-[13px] font-bold">
          <Icon name={icon} className="w-4 h-4 text-accent" />
          {title}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-inksoft">Sample view</span>
      </div>
      {children}
    </div>
  );
}

function Av({ name, className = "w-6 h-6 text-[10px]" }) {
  return (
    <span className={`${className} rounded-full bg-accentsoft text-accent font-bold flex items-center justify-center flex-none`}>
      {name[0]}
    </span>
  );
}

function Chip({ tone = "accent", children }) {
  const tones = {
    accent: "bg-accentsoft text-accent",
    ok: "bg-oksoft text-ok",
    warn: "bg-warnsoft text-warn",
    hot: "bg-hotsoft text-hot",
    mute: "bg-surface2 text-inksoft border border-line",
  };
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${tones[tone]}`}>{children}</span>;
}

function Bar({ pct, tone = "bg-accent" }) {
  return (
    <div className="h-1.5 rounded-full bg-accentsoft overflow-hidden">
      <div className={`h-full rounded-full ${tone}`} style={{ width: `${pct}%` }}></div>
    </div>
  );
}

function Stat({ label, value, note }) {
  return (
    <div className="rounded-lg border border-line p-3">
      <div className="text-[10px] font-semibold text-inksoft">{label}</div>
      <div className="text-lg font-extrabold tracking-tight leading-tight mt-0.5">{value}</div>
      {note && <div className="text-[10px] text-inksoft mt-0.5">{note}</div>}
    </div>
  );
}

function Spark({ points, className = "h-10 w-full" }) {
  const max = Math.max(...points);
  const step = 100 / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(36 - (p / max) * 32).toFixed(1)}`).join(" ");
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={className}>
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* ---------- LinkedIn / Instagram ---------- */

export function LinkedInMock() {
  const days = [
    ["M", true], ["T", true], ["W", false], ["T", true], ["F", false], ["S", false], ["S", false],
  ];
  return (
    <Frame title="LinkedIn · Content calendar" icon="i-linkedin">
      <div className="p-4 space-y-3.5">
        <div className="flex gap-1.5">
          {days.map(([d, on], i) => (
            <div key={i} className={`flex-1 rounded-lg border text-center py-1.5 ${i === 1 ? "border-accent bg-accentsoft" : "border-line"}`}>
              <div className="text-[10px] font-semibold text-inksoft">{d}</div>
              <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-1 ${on ? "bg-accent" : "bg-line"}`}></div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-line p-3.5">
          <div className="flex items-center gap-2.5">
            <Av name="Flowbridge" className="w-8 h-8 text-xs" />
            <div className="mr-auto">
              <div className="text-xs font-bold">Flowbridge Studio</div>
              <div className="text-[10px] text-inksoft">Company page</div>
            </div>
            <Chip tone="ok">Approved</Chip>
          </div>
          <p className="text-[12.5px] leading-relaxed mt-3">
            Three follow ups we stopped doing by hand this quarter, and the hours each one gave back to the team.
          </p>
          <p className="text-[12.5px] text-accent mt-1.5">#automation #operations #b2b</p>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-inksoft">
            <Icon name="i-calendar" className="w-3.5 h-3.5 text-accent" /> Tue, 9:30 AM
            <span className="ml-auto">Draft by AI · edited by you</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Queued" value="12" />
          <Stat label="Reactions" value="486" />
          <Stat label="Comments" value="38" />
        </div>
      </div>
    </Frame>
  );
}

export function InstagramMock() {
  return (
    <Frame title="Instagram · Post scheduler" icon="i-instagram">
      <div className="p-4 grid grid-cols-[120px_1fr] gap-4">
        <div className="space-y-2">
          <div className="aspect-square rounded-xl bg-accentsoft border border-line relative overflow-hidden">
            <div className="absolute inset-3 rounded-lg bg-surface border border-line flex flex-col justify-end p-2">
              <div className="h-1.5 w-2/3 rounded bg-accent"></div>
              <div className="h-1.5 w-1/2 rounded bg-line mt-1.5"></div>
            </div>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i === 0 ? "bg-accent" : "bg-line"}`}></div>
            ))}
          </div>
          <div className="text-[10px] text-inksoft text-center">Carousel · 4 slides</div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wide text-inksoft">Caption</div>
          <p className="text-[12.5px] leading-relaxed mt-1">Monday reset: the five-minute checklist our team uses before every client call.</p>
          <p className="text-[12px] text-accent mt-1.5">#smallbusiness #productivity #systems</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Chip tone="ok">Approved</Chip>
            <Chip tone="mute">Thu · 7:00 PM</Chip>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 grid grid-cols-3 gap-2">
        <Stat label="This week" value="5 posts" />
        <Stat label="Reach" value="18.2K" />
        <Stat label="Saves" value="342" />
      </div>
    </Frame>
  );
}

/* ---------- Growth ---------- */

export function LeadGenMock() {
  const funnel = [
    ["Prospects found", 320, 100],
    ["Qualified", 96, 62],
    ["Contacted", 64, 44],
    ["Replied", 21, 24],
  ];
  const leads = [
    ["Meera Kapoor", "Founder · 20–50 staff", 92],
    ["Arjun Nair", "Ops head · Retail chain", 85],
    ["Tanvi Rao", "MD · Clinic group", 78],
  ];
  return (
    <Frame title="Lead generation · This week" icon="i-funnel">
      <div className="p-4 space-y-4">
        <ul className="list-none m-0 p-0 space-y-2">
          {funnel.map(([l, v, w]) => (
            <li key={l} className="flex items-center gap-3 text-xs">
              <span className="w-28 font-semibold flex-none">{l}</span>
              <div className="flex-1"><Bar pct={w} /></div>
              <span className="w-8 text-right font-bold">{v}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-line divide-y divide-line">
          {leads.map(([n, r, s]) => (
            <div key={n} className="flex items-center gap-3 px-3 py-2.5">
              <Av name={n} />
              <div className="mr-auto">
                <div className="text-xs font-bold">{n}</div>
                <div className="text-[10px] text-inksoft">{r}</div>
              </div>
              <Chip tone={s > 88 ? "ok" : "accent"}>Fit {s}</Chip>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function EmailMock() {
  const steps = [["Welcome", "Day 0"], ["Case study", "Day 2"], ["Offer", "Day 5"]];
  return (
    <Frame title="Email · Nurture sequence" icon="i-email">
      <div className="p-4 space-y-4">
        <ol className="list-none m-0 p-0 flex items-center">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex items-center flex-1 last:flex-none">
              <div className="rounded-lg border border-line px-3 py-2">
                <div className="text-xs font-bold">{t}</div>
                <div className="text-[10px] text-inksoft">{d}</div>
              </div>
              {i < steps.length - 1 && <div className="h-px flex-1 bg-line mx-1"></div>}
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Sent" value="4,820" />
          <Stat label="Opened" value="41%" />
          <Stat label="Clicked" value="6.2%" />
        </div>
        <div className="rounded-xl border border-line p-3">
          <div className="text-[10px] font-semibold text-inksoft mb-1">Opens over 14 days</div>
          <Spark points={[18, 22, 20, 28, 31, 30, 38, 36, 44, 41, 48, 52, 50, 58]} />
        </div>
      </div>
    </Frame>
  );
}

export function NewsMock() {
  const items = [
    ["AI", "Open-source model release narrows the gap with closed models", "Summary · 2 sources"],
    ["Chips", "New accelerator generation announced for data centres", "Summary · 3 sources"],
    ["Policy", "Regulators publish updated guidance on AI transparency", "Summary · 2 sources"],
    ["Startups", "Seed funding round for workflow automation platform", "Summary · 1 source"],
  ];
  return (
    <Frame title="Tech digest · 8:00 AM" icon="i-news">
      <div className="p-4">
        <ul className="list-none m-0 p-0 divide-y divide-line">
          {items.map(([tag, t, s]) => (
            <li key={t} className="py-2.5 flex items-start gap-3">
              <Chip tone="accent">{tag}</Chip>
              <div>
                <div className="text-[12.5px] font-bold leading-snug">{t}</div>
                <div className="text-[10px] text-inksoft mt-0.5">{s}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip tone="mute">Email</Chip>
          <Chip tone="mute">WhatsApp</Chip>
          <Chip tone="mute">Slack</Chip>
          <Chip tone="ok">4 drafts added to LinkedIn queue</Chip>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- Conversations ---------- */

export function ChatMock() {
  return (
    <Frame title="WhatsApp · Assistant" icon="i-chatbot">
      <div className="p-4 space-y-2.5 bg-surface2/60">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface border border-line px-3 py-2 text-[12.5px]">
          Hi, is the 2BHK in Whitefield still available?
        </div>
        <div className="max-w-[82%] ml-auto rounded-2xl rounded-tr-sm bg-oksoft px-3 py-2 text-[12.5px]">
          Yes! 2BHK · 1,150 sq ft · ₹85L. Would you like to book a site visit?
          <div className="flex gap-1.5 mt-2">
            <Chip tone="accent">Book a visit</Chip>
            <Chip tone="accent">See photos</Chip>
          </div>
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface border border-line px-3 py-2 text-[12.5px]">
          Saturday, 11 AM works.
        </div>
        <div className="max-w-[82%] ml-auto rounded-2xl rounded-tr-sm bg-oksoft px-3 py-2 text-[12.5px]">
          Booked. Riya from our team will meet you there.
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Chip tone="ok">Lead saved to CRM</Chip>
          <Chip tone="mute">Handed to Riya</Chip>
        </div>
      </div>
    </Frame>
  );
}

export function BulkMock() {
  const rows = [
    ["Sent", "2,480", 100],
    ["Delivered", "2,431", 98],
    ["Read", "1,764", 71],
    ["Replied", "212", 9],
  ];
  return (
    <Frame title="WhatsApp · Campaign" icon="i-bulk">
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="mr-auto">
            <div className="text-sm font-extrabold">Festive offer · Template</div>
            <div className="text-[11px] text-inksoft">Hi {"{{name}}"}, your 20% festive offer ends Sunday.</div>
          </div>
          <Chip tone="ok">Approved</Chip>
        </div>
        <ul className="list-none m-0 p-0 space-y-2.5">
          {rows.map(([l, v, p]) => (
            <li key={l} className="flex items-center gap-3 text-xs">
              <span className="w-16 font-semibold flex-none">{l}</span>
              <div className="flex-1"><Bar pct={p} /></div>
              <span className="w-10 text-right font-bold">{v}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          <Chip tone="mute">Customers · 1,900</Chip>
          <Chip tone="mute">Leads · 580</Chip>
          <Chip tone="warn">Opted out · 14</Chip>
        </div>
      </div>
    </Frame>
  );
}

export function VoiceMock() {
  const bars = [8, 16, 10, 24, 30, 18, 26, 12, 20, 32, 22, 14, 28, 18, 10, 22, 16, 8];
  return (
    <Frame title="Voice agent · Live call" icon="i-voice">
      <div className="p-4 space-y-3.5">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-accent text-accentink flex items-center justify-center flex-none">
            <Icon name="i-voice" className="w-4 h-4" />
          </span>
          <div className="mr-auto">
            <div className="text-xs font-bold">Appointment reminder</div>
            <div className="text-[10px] text-inksoft">Outbound · Mr. Sharma</div>
          </div>
          <span className="text-xs font-bold tabular-nums">01:24</span>
        </div>
        <div className="flex items-end gap-1 h-9" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-full bg-accent/70" style={{ height: `${h}px` }}></span>
          ))}
        </div>
        <div className="space-y-2 text-[12px]">
          <p><span className="font-bold text-accent">Agent</span> · Good morning! This is a reminder for your check-up tomorrow at 10.</p>
          <p><span className="font-bold text-inksoft">Caller</span> · Can we move it to 11?</p>
          <p><span className="font-bold text-accent">Agent</span> · Of course, I have moved it to 11:00 AM.</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Chip tone="ok">Rescheduled</Chip>
          <Chip tone="mute">CRM updated</Chip>
          <Chip tone="mute">Transcript saved</Chip>
        </div>
      </div>
    </Frame>
  );
}

export function AvatarMock() {
  return (
    <Frame title="AI avatar · Video studio" icon="i-avatar">
      <div className="p-4 space-y-3.5">
        <div className="relative rounded-xl bg-accentsoft border border-line aspect-video overflow-hidden flex items-end justify-center">
          <svg viewBox="0 0 120 100" className="h-[86%]" aria-hidden="true">
            <circle cx="60" cy="38" r="20" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <path d="M18 100c2-24 18-36 42-36s40 12 42 36z" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          </svg>
          <span className="absolute top-2.5 left-2.5"><Chip tone="accent">Branded avatar</Chip></span>
          <span className="absolute bottom-2.5 inset-x-6 text-center text-[11px] font-bold bg-surface/90 rounded px-2 py-1">
            Welcome to the team! Here is how your first week works.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <Chip tone="ok">English</Chip>
          <Chip tone="mute">हिन्दी</Chip>
          <Chip tone="mute">தமிழ்</Chip>
          <Chip tone="mute">Generated in 2 min</Chip>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- Operations ---------- */

export function TaskFlowMock() {
  const cols = [
    ["To do", [["Draft client proposal", "Riya", "Fri", null], ["Update pricing sheet", "Kabir", "Mon", null]]],
    ["In progress", [["Onboard new hire", "Ishaan", "Today", "warn"], ["Fix invoice template", "Kabir", "Overdue", "hot"]]],
    ["Done", [["Publish weekly report", "Riya", "Done", "ok"]]],
  ];
  return (
    <Frame title="TaskFlow · Team board" icon="i-taskflow">
      <div className="p-3 grid grid-cols-3 gap-2.5">
        {cols.map(([name, cards]) => (
          <div key={name} className="rounded-lg bg-surface2 border border-line p-2">
            <div className="text-[10px] font-bold uppercase tracking-wide text-inksoft mb-2">{name}</div>
            <div className="space-y-2">
              {cards.map(([t, who, due, tone]) => (
                <div key={t} className="rounded-md bg-surface border border-line p-2">
                  <div className="text-[11.5px] font-bold leading-snug">{t}</div>
                  <div className="flex items-center justify-between mt-2">
                    <Av name={who} className="w-5 h-5 text-[9px]" />
                    <Chip tone={tone || "mute"}>{due}</Chip>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function AttendanceMock() {
  const rows = [
    ["Riya", "9:02 AM", "Remote", "ok"],
    ["Kabir", "9:15 AM", "Field", "ok"],
    ["Ishaan", "10:12 AM", "Remote", "warn"],
    ["Neha", "On leave", "Leave", "mute"],
  ];
  return (
    <Frame title="Attendance · Today" icon="i-attendance">
      <div className="p-4 space-y-3.5">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Checked in" value="32 / 36" />
          <Stat label="Late marks" value="3" />
          <Stat label="On leave" value="1" />
        </div>
        <div className="rounded-xl border border-line divide-y divide-line">
          {rows.map(([n, t, m, tone]) => (
            <div key={n} className="flex items-center gap-3 px-3 py-2.5">
              <Av name={n} />
              <div className="mr-auto text-xs font-bold">{n}</div>
              <span className="text-[11px] text-inksoft">{t}</span>
              <Chip tone={tone === "ok" ? "accent" : tone}>{m}</Chip>
              {tone === "ok" && <Icon name="i-check" className="w-3.5 h-3.5 text-ok" />}
            </div>
          ))}
        </div>
        <div className="text-[10px] text-inksoft">Location and selfie verified where enabled by policy.</div>
      </div>
    </Frame>
  );
}

/* ---------- Dashboards ---------- */

export function MetaCrmMock() {
  const rows = [
    ["Aarav Mehta", "Diwali Lead Form", "Qualified", "accent", "Riya", "Today, 4:30 PM", "High", "hot"],
    ["Sana Khan", "Retargeting", "Proposal", "warn", "Kabir", "Tomorrow", "High", "hot"],
    ["Rohan Das", "Summer Offer", "New", "accent", "Riya", "Today, 6:00 PM", "Medium", "warn"],
  ];
  return (
    <Frame title="Meta Leads CRM" icon="i-meta">
      <div className="p-4 space-y-3.5">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Leads today" value="34" />
          <Stat label="Cost per lead" value="₹142" />
          <Stat label="Follow ups due" value="9" />
        </div>
        <div className="rounded-xl border border-line overflow-x-auto">
          <table className="w-full min-w-[420px] text-[11px] border-collapse">
            <thead>
              <tr className="bg-surface2 text-left text-[9px] uppercase tracking-wide text-inksoft">
                {["Lead", "Campaign", "Stage", "Owner", "Next follow up", "Priority"].map((h) => (
                  <th key={h} className="px-2.5 py-2 font-bold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([n, c, s, st, o, f, p, pt]) => (
                <tr key={n} className="border-t border-line">
                  <td className="px-2.5 py-2 font-bold whitespace-nowrap">{n}</td>
                  <td className="px-2.5 py-2 text-inksoft whitespace-nowrap">{c}</td>
                  <td className="px-2.5 py-2"><Chip tone={st}>{s}</Chip></td>
                  <td className="px-2.5 py-2 font-semibold">{o}</td>
                  <td className="px-2.5 py-2 whitespace-nowrap">{f}</td>
                  <td className="px-2.5 py-2"><Chip tone={pt}>{p}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-line p-3">
          <div className="text-[10px] font-semibold text-inksoft mb-2">Leads by source</div>
          <div className="flex h-2 rounded-full overflow-hidden">
            <span className="bg-accent" style={{ width: "62%" }}></span>
            <span className="bg-violet" style={{ width: "26%" }}></span>
            <span className="bg-line" style={{ width: "12%" }}></span>
          </div>
          <div className="flex gap-4 mt-2 text-[10px] font-semibold text-inksoft">
            <span>Facebook 62%</span>
            <span>Instagram 26%</span>
            <span>Other 12%</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function FinanceMock() {
  const months = [["Apr", 52], ["May", 60], ["Jun", 48], ["Jul", 70], ["Aug", 64], ["Sep", 82]];
  return (
    <Frame title="Finance dashboard" icon="i-report">
      <div className="p-4 space-y-3.5">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Revenue" value="₹42.8L" />
          <Stat label="Expenses" value="₹27.1L" />
          <Stat label="Profit" value="₹15.7L" />
        </div>
        <div className="rounded-xl border border-line p-3">
          <div className="text-[10px] font-semibold text-inksoft mb-2">Monthly revenue</div>
          <div className="flex items-end gap-2 h-20">
            {months.map(([m, h], i) => (
              <div key={m} className="flex-1 h-full flex flex-col justify-end items-center gap-1">
                <div className={`w-full rounded-t ${i === months.length - 1 ? "bg-accent" : "bg-accentsoft"}`} style={{ height: `${h}%` }}></div>
                <span className="text-[9px] text-inksoft">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-line divide-y divide-line text-xs">
          {[["Invoice #1042 · Khan Logistics", "₹3.2L", "Due in 3 days", "warn"], ["Invoice #1038 · Mehta Interiors", "₹1.8L", "12 days overdue", "hot"]].map(([n, a, s, t]) => (
            <div key={n} className="flex items-center gap-2 px-3 py-2">
              <span className="mr-auto font-semibold">{n}</span>
              <span className="font-bold">{a}</span>
              <Chip tone={t}>{s}</Chip>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function CeoMock() {
  const kpis = [
    ["Revenue vs target", "82%", 82],
    ["Lead response time", "6 min", 55],
    ["On-time delivery", "94%", 94],
    ["Team attendance", "89%", 89],
  ];
  return (
    <Frame title="CEO dashboard · Today" icon="i-grid">
      <div className="p-4 space-y-3.5">
        <div className="grid grid-cols-2 gap-2">
          {kpis.map(([l, v, p]) => (
            <div key={l} className="rounded-lg border border-line p-3">
              <div className="text-[10px] font-semibold text-inksoft">{l}</div>
              <div className="text-lg font-extrabold tracking-tight mt-0.5">{v}</div>
              <div className="mt-2"><Bar pct={p} tone={p < 60 ? "bg-warn" : "bg-accent"} /></div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-line p-3">
          <div className="text-[10px] font-semibold text-inksoft mb-1">Pipeline value · 30 days</div>
          <Spark points={[30, 34, 32, 40, 46, 44, 52, 58, 56, 66]} />
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-warnsoft px-3 py-2 text-[11px] font-semibold text-warn">
          <Icon name="i-bolt" className="w-3.5 h-3.5" /> Lead response time is above target in 2 campaigns
        </div>
      </div>
    </Frame>
  );
}

export function ApprovalMock() {
  const items = [
    ["i-linkedin", "LinkedIn post", "Three follow ups we stopped doing by hand", "Tue, 9:30 AM", true],
    ["i-bulk", "WhatsApp broadcast", "Festive offer to 2,480 contacts", "Sat, 10:00 AM", false],
    ["i-email", "Email sequence", "Case study email, step 2 of 3", "Mon, 8:00 AM", false],
  ];
  return (
    <Frame title="Approval queue" icon="i-shield">
      <div className="p-4 space-y-3">
        {items.map(([icon, kind, text, when, done]) => (
          <div key={kind} className="rounded-xl border border-line p-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-accentsoft text-accent flex items-center justify-center flex-none">
                <Icon name={icon} className="w-4 h-4" />
              </span>
              <div className="mr-auto min-w-0">
                <div className="text-xs font-bold">{kind}</div>
                <div className="text-[11px] text-inksoft truncate">{text}</div>
              </div>
              <span className="text-[10px] font-semibold text-inksoft whitespace-nowrap">{when}</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              {done ? (
                <Chip tone="ok">Approved by you</Chip>
              ) : (
                <>
                  <span className="px-3 py-1 rounded-full bg-accent text-accentink text-[11px] font-bold">Approve</span>
                  <span className="px-3 py-1 rounded-full border border-line text-[11px] font-bold">Edit</span>
                  <span className="px-3 py-1 rounded-full border border-line text-[11px] font-bold text-inksoft">Skip</span>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="text-[11px] text-inksoft text-center">Nothing goes out until you say so.</div>
      </div>
    </Frame>
  );
}

export const MOCKUPS = {
  linkedin: LinkedInMock,
  instagram: InstagramMock,
  leadgen: LeadGenMock,
  email: EmailMock,
  news: NewsMock,
  chatbot: ChatMock,
  bulk: BulkMock,
  voice: VoiceMock,
  avatar: AvatarMock,
  taskflow: TaskFlowMock,
  attendance: AttendanceMock,
  metacrm: MetaCrmMock,
  finance: FinanceMock,
  ceo: CeoMock,
};
