import Icon from "./Icon";
import { LinkedInMock, ChatMock, MetaCrmMock } from "./mockups";
import { HERO } from "@/data/content";

function Toast({ className = "", icon, tone, title, text, delay = "0s" }) {
  return (
    <div
      className={`animate-float flex items-center gap-3 rounded-2xl bg-surface border border-line shadow-cardlg pl-3 pr-4 py-2.5 ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-none ${tone}`}>
        <Icon name={icon} className="w-[18px] h-[18px]" />
      </span>
      <div>
        <div className="text-xs font-extrabold">{title}</div>
        <div className="text-[11px] text-inksoft">{text}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-70" style={{ maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%)" }}></div>
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[#BFD3FF] opacity-50 blur-[120px]"></div>
        <div className="absolute -top-24 right-[-120px] w-[520px] h-[520px] rounded-full bg-[#DCCBFF] opacity-50 blur-[120px]"></div>
        <div className="absolute top-[320px] left-[38%] w-[420px] h-[420px] rounded-full bg-[#FFD9C2] opacity-40 blur-[120px]"></div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-6 items-center">
          <div>
            <p
              className="inline-flex items-center gap-2 rounded-full bg-surface border border-line shadow-card pl-2 pr-4 py-1.5 text-xs font-bold"
              data-aos="fade-up"
            >
              <span className="w-5 h-5 rounded-full bg-accent text-accentink flex items-center justify-center">
                <Icon name="i-spark" className="w-3 h-3" />
              </span>
              {HERO.label}
            </p>
            <h1 className="mt-6 text-[2.9rem] sm:text-[4rem] lg:text-[3.9rem]" data-aos="fade-up" data-aos-delay="60">
              {HERO.headline.map((line, i) => (
                <span key={line} className="block">
                  {i === 1 ? <em>{line}</em> : line}
                </span>
              ))}
            </h1>
            <p className="text-inksoft text-base sm:text-lg max-w-[50ch] mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="140">
              {HERO.copy}
            </p>
            <div className="flex items-center gap-3 flex-wrap mt-8" data-aos="fade-up" data-aos-delay="220">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full bg-accent text-accentink shadow-[0_14px_30px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-transform"
              >
                {HERO.primary}
                <Icon name="i-chevron" className="w-4 h-4 -rotate-90" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full bg-surface border border-line hover:border-accent hover:text-accent transition-colors"
              >
                {HERO.secondary}
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div className="hidden lg:block relative h-[660px]">
              <div className="absolute top-0 left-0 right-0">
                <MetaCrmMock />
              </div>
              <div className="absolute top-[316px] left-0 w-[56%] z-10">
                <ChatMock />
              </div>
              <div className="absolute top-[336px] right-0 w-[40%] flex flex-col gap-4 z-10">
                <Toast icon="i-bolt" tone="bg-accentsoft text-accent" title="New lead" text="Aarav M. via Meta form, assigned to Riya" />
                <Toast icon="i-check" tone="bg-oksoft text-ok" title="Reply sent" text="WhatsApp assistant answered in 4 sec" delay="-2s" />
                <Toast icon="i-calendar" tone="bg-violetsoft text-violet" title="Post scheduled" text="LinkedIn · Tue, 9:30 AM · approved" delay="-4s" />
              </div>
            </div>
            <div className="lg:hidden grid sm:grid-cols-2 gap-4 max-w-[760px]">
              <LinkedInMock />
              <ChatMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
