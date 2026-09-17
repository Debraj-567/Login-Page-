import Icon from "./Icon";

const CHANNELS = [
  { icon: "i-chatbot", label: "WhatsApp" },
  { icon: "i-instagram", label: "Instagram" },
  { icon: "i-linkedin", label: "LinkedIn" },
  { icon: "i-email", label: "Gmail" },
  { icon: "i-meta", label: "Meta Ads" },
  { icon: "i-calendar", label: "Google Calendar" },
  { icon: "i-crm", label: "Your CRM" },
];

// Duplicated once so the CSS animation can loop seamlessly.
const TRACK = [...CHANNELS, ...CHANNELS];

export default function LogosMarquee() {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-inksoft mb-6" data-aos="fade-up">
          Plugs into the tools you already run
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-10 animate-marquee">
          {TRACK.map((c, i) => (
            <div key={`${c.label}-${i}`} className="flex items-center gap-2.5 flex-none px-1">
              <span className="w-9 h-9 rounded-[10px] bg-surface border border-line text-inksoft flex items-center justify-center">
                <Icon name={c.icon} className="w-4 h-4" />
              </span>
              <span className="text-sm font-semibold text-inksoft whitespace-nowrap">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
