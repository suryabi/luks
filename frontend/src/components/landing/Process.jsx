import React from "react";
import { Search, PenTool, Hammer, Rocket, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    n: "01",
    Icon: Search,
    title: "Discover",
    desc: "Stakeholder workshops, technical audits and a clear point‑of‑view on what to build, change or retire.",
  },
  {
    n: "02",
    Icon: PenTool,
    title: "Design",
    desc: "System architecture, UX flows and delivery roadmap — costed, risk‑profiled and committed to.",
  },
  {
    n: "03",
    Icon: Hammer,
    title: "Build",
    desc: "Cross‑functional squads ship in bi‑weekly sprints with transparent demos, metrics and accountability.",
  },
  {
    n: "04",
    Icon: Rocket,
    title: "Deploy",
    desc: "Zero‑downtime releases, performance SLOs, observability and a launch plan your operations team owns.",
  },
  {
    n: "05",
    Icon: LifeBuoy,
    title: "Support",
    desc: "AMS, SRE and continuous improvement — we stay accountable for the systems we build.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 bg-[#1A0809]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
              How we work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
              A pragmatic <span className="gradient-text">delivery process</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-[#C9B7B9] leading-relaxed">
              Built around five disciplined phases — designed to de‑risk
              ambition, surface trade‑offs early, and ship outcomes that
              compound over time.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-[68px] left-12 right-12 h-px bg-gradient-to-r from-red-500/30 via-orange-500/30 to-red-500/0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6">
            {STEPS.map((s) => (
              <div
                key={s.n}
                data-testid="process-step"
                className="relative flex flex-col"
              >
                <div className="relative w-[68px] h-[68px] flex items-center justify-center rounded-full border border-red-500/30 bg-[#1F0B0E] mb-6 z-10">
                  <s.Icon className="w-6 h-6 text-red-400" />
                  <span className="absolute -top-2 -right-2 text-[10px] tracking-[0.2em] text-orange-400 font-display font-semibold">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#A38F91] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
