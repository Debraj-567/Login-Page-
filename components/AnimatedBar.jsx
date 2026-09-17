"use client";

import { useEffect, useRef, useState } from "react";

// A progress bar that stays at 0% until it scrolls into view, then animates
// up to its target percentage.
export default function AnimatedBar({ label, value, colorClass }) {
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

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs font-semibold text-white/70 mb-1.5">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <span
          className={`block h-full rounded-full transition-[width] duration-[1200ms] ease-out ${colorClass}`}
          style={{ width: active ? `${value}%` : "0%" }}
        ></span>
      </div>
    </div>
  );
}
