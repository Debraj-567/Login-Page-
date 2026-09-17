"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const STATS = [
  { icon: "i-grid", value: 12, suffix: "", label: "automation systems in the toolkit" },
  { icon: "i-report", value: 1, suffix: "", label: "dashboard for every channel you run" },
  { icon: "i-shield", value: 0, suffix: "", label: "tools you have to rip out to start" },
  { icon: "i-spark", value: 4, suffix: "-step", label: "process from audit to hand-off" },
];

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatCell({ stat }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = useCountUp(stat.value, active);

  return (
    <div ref={ref} className="bg-surface border border-line rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="w-10 h-10 rounded-[10px] bg-accentsoft text-accent flex items-center justify-center mx-auto mb-3">
        <Icon name={stat.icon} className="w-5 h-5" />
      </div>
      <div className="text-3xl font-extrabold tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs text-inksoft font-semibold mt-1.5">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="pt-6 sm:pt-10 pb-4">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
          {STATS.map((stat) => (
            <StatCell key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
