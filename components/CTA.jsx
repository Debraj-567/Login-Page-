import Icon from "./Icon";
import { FINAL_CTA, CONTACT_EMAIL } from "@/data/content";

export default function CTA() {
  return (
    <section id="contact" className="pb-16 sm:pb-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div
          className="relative overflow-hidden rounded-xl2 bg-accentsoft border border-line px-6 py-12 sm:px-14 sm:py-16 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="pointer-events-none absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full bg-[#DCCBFF] opacity-50 blur-[100px]" aria-hidden="true"></div>

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl max-w-[16ch]">{FINAL_CTA.heading}</h2>
            <p className="text-inksoft text-base sm:text-lg max-w-[52ch] mt-5">{FINAL_CTA.copy}</p>
            <div className="flex items-center gap-3 flex-wrap mt-8">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(FINAL_CTA.primary)}`}
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-accent text-accentink shadow-[0_14px_30px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-transform"
              >
                {FINAL_CTA.primary}
              </a>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-surface border border-line hover:border-accent hover:text-accent transition-colors"
              >
                {FINAL_CTA.secondary}
              </a>
            </div>
            <p className="text-sm text-inksoft mt-6">{CONTACT_EMAIL}</p>
          </div>

          <div className="relative rounded-2xl bg-surface border border-line shadow-cardlg p-6 sm:p-7">
            <h3 className="text-lg">{FINAL_CTA.auditTitle}</h3>
            <ol className="list-none m-0 p-0 mt-5 space-y-4">
              {FINAL_CTA.audit.map((a, i) => (
                <li key={a} className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-accentsoft text-accent text-xs font-extrabold flex items-center justify-center flex-none">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold leading-snug pt-1">{a}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-inksoft">
              <Icon name="i-shield" className="w-4 h-4 text-ok" /> Free, with no obligation to build anything
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
