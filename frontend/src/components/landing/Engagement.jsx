import React from "react";
import { Tag, Clock, Users2, LifeBuoy } from "lucide-react";

const MODELS = [
  {
    Icon: Tag,
    name: "Fixed Price",
    tagline: "Scoped delivery, predictable outcome.",
    desc: "Best for well-defined module implementations and migrations where requirements are stable and timelines are fixed.",
    fit: "Module roll-outs · Integrations",
  },
  {
    Icon: Clock,
    name: "Time & Materials",
    tagline: "Flexible bandwidth for evolving scope.",
    desc: "Pay for the expertise you use. Ideal for discovery phases, blueprinting workshops and continuous improvement programmes.",
    fit: "Discovery · Workshops",
  },
  {
    Icon: Users2,
    name: "Dedicated Resources",
    tagline: "Embedded consultants, your team's tempo.",
    desc: "Named SuccessFactors consultants — full-time or part-time — embedded into your delivery pod for the duration of the engagement.",
    fit: "Programme augmentation",
  },
  {
    Icon: LifeBuoy,
    name: "Support Projects",
    tagline: "AMS, break-fix and continuous care.",
    desc: "Ongoing application managed services for SuccessFactors instances — break-fix, release management, monitoring and enhancements.",
    fit: "Post-go-live · AMS",
  },
];

export const Engagement = () => {
  return (
    <section
      id="engagement"
      data-testid="engagement-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
              Engagement Models
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
              Four ways to <span className="gradient-text">work with us</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-[#475569] leading-relaxed">
              Whether you need a fixed-scope module rollout, a flexible
              discovery pod, embedded consultants, or post-go-live support —
              there&apos;s a contracting model that fits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MODELS.map((m, i) => (
            <div
              key={m.name}
              data-testid={`engagement-card-${i + 1}`}
              className="group relative p-8 rounded-2xl border border-[#0070F2]/15 bg-[#FFFFFF]/60 hover:border-[#0070F2]/40 hover:bg-[#FFFFFF] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#0070F2]/30 to-[#F0AB00]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0070F2]/20 to-[#F0AB00]/10 border border-[#0070F2]/20 flex items-center justify-center">
                    <m.Icon className="w-5 h-5 text-[#0070F2]" />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#64748B]">
                    Model 0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#1B2A41] tracking-tight">
                    {m.name}
                  </h3>
                  <div className="text-[#64748B] text-sm mt-1 font-medium">{m.tagline}</div>
                </div>
                <p className="text-[15px] text-[#64748B] leading-relaxed">
                  {m.desc}
                </p>
                <div className="mt-2 pt-4 border-t border-[#0070F2]/10 flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#64748B]">
                    Best for
                  </span>
                  <span className="text-sm text-[#1B2A41] font-medium">{m.fit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
