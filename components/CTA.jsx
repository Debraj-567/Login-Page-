export default function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="cta-shadow rounded-xl2 bg-ink text-bg p-8 sm:p-14 flex items-center justify-between gap-8 flex-wrap" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl max-w-[22ch] text-bg">Ready to put your busywork on autopilot?</h2>
          <a
            href="mailto:hello@flowbridge.studio"
            className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full bg-accent text-accentink hover:brightness-105 flex-none"
          >
            hello@flowbridge.studio
          </a>
        </div>
      </div>
    </section>
  );
}
