import Pill from "./Pill";
import { STEPS } from "@/data/steps";

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[620px] mx-auto mb-12" data-aos="fade-up">
          <Pill>How a build ships</Pill>
          <h2 className="text-3xl sm:text-4xl mt-3">Four stages, same order every time</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              data-aos="fade-up"
              data-aos-delay={i * 90}
              className="bg-surface border border-line rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="text-xs font-extrabold text-accent mb-3">{step.n}</div>
              <h4 className="font-extrabold mb-1.5">{step.title}</h4>
              <p className="text-inksoft text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
