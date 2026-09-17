"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";
import AnimatedBar from "./AnimatedBar";

// This hero is a deliberately single-theme, cinematic "command center" —
// it keeps its own dark palette regardless of the site-wide light/dark
// toggle, the way a hero on Linear/Vercel/Stripe often commits to one look.
//
// The diagram below is laid out in a fixed 1040x480 coordinate space that
// the container locks to via aspect-ratio, so percentage-positioned cards
// and the pixel-coordinate SVG paths always line up exactly, at any
// rendered width.

const HUB = { x: 520, y: 240 };

const CONNECTORS = [
  { d: "M312,173 C400,200 460,215 520,240", node: [312, 173], color: "#F5A623" },
  { d: "M728,173 C640,200 580,215 520,240", node: [728, 173], color: "#A78BFA" },
  { d: "M312,288 C400,265 460,250 520,240", node: [312, 288], color: "#2DD4BF" },
  { d: "M728,326 C640,295 580,265 520,240", node: [728, 326], color: "#5B8CFF" },
];

function Annotation({ className, color, flip, children }) {
  return (
    <div className={`hidden xl:block absolute font-annotation text-lg leading-tight whitespace-nowrap ${className}`} style={{ color }} aria-hidden="true">
      <div>{children}</div>
      <svg width="46" height="30" viewBox="0 0 46 30" fill="none" className={flip ? "-scale-x-100" : ""}>
        <path d="M4 4c2 10 10 18 20 20" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M20 21 25 25 22 18" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
      </svg>
    </div>
  );
}

function HubCard({ className, delay, floatDelay, iconBg, iconColor, icon, title, children }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      style={{ animationDelay: floatDelay }}
      className={`animate-card-float absolute w-[30%] min-w-[240px] max-w-[320px] rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md p-5 text-left shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08] ${className}`}
    >
      <div className="flex items-center gap-2.5 mb-3.5">
        <span className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-none" style={{ background: iconBg, color: iconColor }}>
          <Icon name={icon} className="w-5 h-5" />
        </span>
        <h4 className="text-[15px] font-bold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
}

export default function Hero() {
  const hubRef = useRef(null);
  const diagramRef = useRef(null);

  // Very small mouse-parallax on the central hub — a handful of pixels, and
  // skipped entirely for reduced-motion users.
  useEffect(() => {
    const diagram = diagramRef.current;
    const hub = hubRef.current;
    if (!diagram || !hub) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMove(e) {
      const rect = diagram.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      hub.style.transform = `translate(-50%, -50%) translate(${px * 10}px, ${py * 10}px)`;
    }
    function onLeave() {
      hub.style.transform = "translate(-50%, -50%)";
    }

    diagram.addEventListener("mousemove", onMove);
    diagram.addEventListener("mouseleave", onLeave);
    return () => {
      diagram.removeEventListener("mousemove", onMove);
      diagram.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#080B10] text-center py-14 sm:py-16">
      {/* ambient background: glow blobs + dot grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#3B5BFF] opacity-[0.16] blur-[110px] animate-drift"></div>
        <div className="absolute top-10 -right-24 w-[380px] h-[380px] rounded-full bg-[#8B5CF6] opacity-[0.16] blur-[110px] animate-drift-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-[340px] h-[340px] rounded-full bg-[#14B8A6] opacity-[0.10] blur-[110px] animate-drift"></div>
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 15%, black 40%, transparent 90%)",
          }}
        ></div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#7DA2FF] mb-4" data-aos="fade-up">
            YOUR AUTOMATION COMMAND CENTER
          </p>
          <h1 className="text-[2.3rem] sm:text-[3.6rem] font-extrabold leading-[1.05] tracking-tight whitespace-normal sm:whitespace-nowrap" data-aos="fade-up" data-aos-delay="100">
            <span className="text-white">Automate. </span>
            <span className="bg-gradient-to-r from-[#5B8CFF] to-[#8B9CFF] bg-clip-text text-transparent">Engage. </span>
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">Grow.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-[46ch] mx-auto mt-5" data-aos="fade-up" data-aos-delay="200">
            Everything you need to manage leads, content and communication — all in one place.
          </p>
        </div>

        {/* ===== desktop: connected diagram (fixed 1040x480 coordinate space) ===== */}
        <div
          ref={diagramRef}
          className="relative max-w-[1040px] w-full mx-auto mt-10 aspect-[1040/480] hidden lg:block"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1040 480" preserveAspectRatio="none">
            {CONNECTORS.map((c) => (
              <g key={c.d}>
                <path d={c.d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <path d={c.d} fill="none" stroke={c.color} strokeWidth="2.4" strokeLinecap="round" className="dash-flow-lg" opacity="0.9" />
                <circle r="3.5" fill={c.color}>
                  <animateMotion dur="3s" repeatCount="indefinite" path={c.d} rotate="auto" />
                </circle>
                <circle cx={c.node[0]} cy={c.node[1]} r="5" fill={c.color} className="animate-dot-pulse" style={{ transformOrigin: `${c.node[0]}px ${c.node[1]}px` }} />
              </g>
            ))}
          </svg>

          <div
            ref={hubRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-[20px] bg-white flex items-center justify-center animate-hub-breathe z-10 transition-transform duration-150 ease-out"
          >
            <Icon name="i-node" className="w-8 h-8 text-[#0B1220]" />
          </div>

          <HubCard className="top-0 left-0" delay="500" floatDelay="0s" icon="i-bolt" iconBg="rgba(245,166,35,0.18)" iconColor="#F5A623" title="Smart Batch Approval">
            <p className="text-[13px] text-white/60 leading-relaxed">
              Approve every lead in one pass and save <span className="font-bold text-white">20 minutes a day.</span>
            </p>
            <span className="absolute -bottom-3 -right-3 w-8 h-8 rounded-[9px] bg-[#5B8CFF] text-white flex items-center justify-center shadow-lg">
              <Icon name="i-check" className="w-4 h-4" />
            </span>
          </HubCard>
          <Annotation className="top-[24%] left-[-13%]" color="#F5A623">
            Less work.
            <br />
            More growth.
          </Annotation>

          <HubCard className="top-0 right-0" delay="600" floatDelay="-1.5s" icon="i-calendar" iconBg="rgba(167,139,250,0.18)" iconColor="#A78BFA" title="Scheduled Sends">
            <div className="text-[13px] font-bold text-white mb-1">Instagram carousel</div>
            <span className="inline-flex items-center gap-1 text-[11px] text-white/50 tabular-nums mb-2.5">
              <Icon name="i-clock" className="w-2.5 h-2.5" /> 10:00 – 10:05
            </span>
            <div className="border-t border-white/10 pt-2.5">
              <div className="text-[13px] font-bold text-white mb-1">WhatsApp broadcast</div>
              <span className="inline-flex items-center gap-1 text-[11px] text-white/50 tabular-nums">
                <Icon name="i-clock" className="w-2.5 h-2.5" /> 14:00 – 14:10
              </span>
            </div>
          </HubCard>
          <Annotation className="top-[20%] right-[-14%]" color="#A78BFA" flip>
            Plan today.
            <br />
            Reach tomorrow.
          </Annotation>

          <HubCard className="bottom-0 left-0" delay="700" floatDelay="-3s" icon="i-report" iconBg="rgba(45,212,191,0.18)" iconColor="#2DD4BF" title="Today's Automations">
            <div className="space-y-2.5">
              <AnimatedBar label="New leads synced" value={60} colorClass="bg-[#5B8CFF]" />
              <AnimatedBar label="Posts queued" value={100} colorClass="bg-[#2DD4BF]" />
              <AnimatedBar label="Calls placed" value={42} colorClass="bg-[#F5A623]" />
            </div>
          </HubCard>
          <Annotation className="bottom-[16%] left-[-13%]" color="#2DD4BF">
            Track progress.
            <br />
            Stay ahead.
          </Annotation>

          <HubCard className="bottom-0 right-0" delay="800" floatDelay="-4.5s" icon="i-plug" iconBg="rgba(91,140,255,0.18)" iconColor="#5B8CFF" title="12+ Integrations">
            <div className="flex gap-2 flex-wrap">
              <span className="w-9 h-9 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(34,197,94,0.18)", color: "#4ADE80" }}>
                <Icon name="i-email" className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(34,197,94,0.18)", color: "#4ADE80" }}>
                <Icon name="i-chatbot" className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(59,130,246,0.18)", color: "#60A5FA" }}>
                <Icon name="i-linkedin" className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(236,72,153,0.18)", color: "#F472B6" }}>
                <Icon name="i-instagram" className="w-4 h-4" />
              </span>
            </div>
          </HubCard>
          <Annotation className="bottom-[18%] right-[-12%]" color="#5B8CFF" flip>
            All your tools.
            <br />
            Connected.
          </Annotation>
        </div>

        {/* ===== mobile / tablet: same content, stacked ===== */}
        <div className="lg:hidden mt-12 flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center animate-hub-breathe">
            <Icon name="i-node" className="w-6 h-6 text-[#0B1220]" />
          </div>

          <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-4 text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-none" style={{ background: "rgba(245,166,35,0.18)", color: "#F5A623" }}>
                <Icon name="i-bolt" className="w-4 h-4" />
              </span>
              <h4 className="text-sm font-bold text-white">Smart Batch Approval</h4>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Approve every lead in one pass and save <span className="font-bold text-white">20 minutes a day.</span>
            </p>
          </div>

          <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-4 text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-none" style={{ background: "rgba(167,139,250,0.18)", color: "#A78BFA" }}>
                <Icon name="i-calendar" className="w-4 h-4" />
              </span>
              <h4 className="text-sm font-bold text-white">Scheduled Sends</h4>
            </div>
            <div className="text-xs font-bold text-white mb-1">Instagram carousel · 10:00–10:05</div>
            <div className="text-xs font-bold text-white">WhatsApp broadcast · 14:00–14:10</div>
          </div>

          <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-4 text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-none" style={{ background: "rgba(45,212,191,0.18)", color: "#2DD4BF" }}>
                <Icon name="i-report" className="w-4 h-4" />
              </span>
              <h4 className="text-sm font-bold text-white">Today&apos;s Automations</h4>
            </div>
            <div className="space-y-2.5">
              <AnimatedBar label="New leads synced" value={60} colorClass="bg-[#5B8CFF]" />
              <AnimatedBar label="Posts queued" value={100} colorClass="bg-[#2DD4BF]" />
              <AnimatedBar label="Calls placed" value={42} colorClass="bg-[#F5A623]" />
            </div>
          </div>

          <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-4 text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-none" style={{ background: "rgba(91,140,255,0.18)", color: "#5B8CFF" }}>
                <Icon name="i-plug" className="w-4 h-4" />
              </span>
              <h4 className="text-sm font-bold text-white">12+ Integrations</h4>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(34,197,94,0.18)", color: "#4ADE80" }}><Icon name="i-email" className="w-4 h-4" /></span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(34,197,94,0.18)", color: "#4ADE80" }}><Icon name="i-chatbot" className="w-4 h-4" /></span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(59,130,246,0.18)", color: "#60A5FA" }}><Icon name="i-linkedin" className="w-4 h-4" /></span>
              <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: "rgba(236,72,153,0.18)", color: "#F472B6" }}><Icon name="i-instagram" className="w-4 h-4" /></span>
            </div>
          </div>
        </div>

        {/* ===== bottom feature row ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 sm:mt-12 max-w-[1080px] mx-auto">
          {[
            { icon: "i-grid", title: "All-in-One Toolkit", text: "Powerful tools, one dashboard." },
            { icon: "i-report", title: "Real-Time Insights", text: "Track what matters." },
            { icon: "i-shield", title: "Built for Scale", text: "From solo creators to growing teams." },
            { icon: "i-spark", title: "Simple & Reliable", text: "Automation that just works." },
          ].map((f, i) => (
            <div
              key={f.title}
              data-aos="fade-up"
              data-aos-delay={900 + i * 60}
              className="group text-left rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="w-9 h-9 rounded-[10px] bg-[#5B8CFF]/15 text-[#7DA2FF] flex items-center justify-center flex-none transition-transform duration-300 group-hover:scale-110">
                <Icon name={f.icon} />
              </span>
              <div>
                <h5 className="text-sm font-bold text-white mb-0.5">{f.title}</h5>
                <p className="text-xs text-white/55">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          data-aos="fade-up"
          className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full bg-white text-[#0B1220] shadow-[0_18px_36px_-14px_rgba(91,140,255,0.55)] hover:brightness-95 transition mt-10"
        >
          Get free audit
        </a>
      </div>
    </section>
  );
}
