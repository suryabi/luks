import React from "react";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&w=1920&q=80";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative isolate min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt="Abstract blue technology"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white" />
        <div className="absolute inset-0 radial-glow opacity-90" />
      </div>

      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0070F2 1px, transparent 1px), linear-gradient(to bottom, #0070F2 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0070F2]/30 bg-[#0070F2]/10 backdrop-blur-sm w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#F0AB00]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#0070F2] font-semibold">
              SAP · SuccessFactors · HCM Cloud · Software Services
            </span>
          </div>

          <h1
            data-testid="hero-headline"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] text-[#1B2A41]"
          >
            Delivering <br className="hidden sm:block" />
            <span className="gradient-text inline-block">
              SAP SuccessFactors
            </span>{" "}
            with Assurance.
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-[#475569] leading-relaxed">
            Luks Solutions is an India‑based consultancy partnering with global
            implementation firms to deliver SAP, SuccessFactors and HCM Cloud
            programmes — backed by a Business Use Case driven methodology and
            our own Operations Cloud product.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#services"
              data-testid="hero-cta-explore"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#0070F2] text-white font-medium hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)] transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              data-testid="hero-cta-learn"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#0070F2]/30 text-[#1B2A41] font-medium hover:bg-[#0070F2]/10 hover:border-[#0070F2]/60 transition-all duration-300"
            >
              <PlayCircle className="w-4 h-4 text-[#F0AB00]" />
              See Our Work
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-10 mt-2 border-t border-[#0070F2]/10">
            {[
              { n: "27+", l: "Certified Consultants" },
              { n: "10", l: "SuccessFactors Modules" },
              { n: "8+", l: "Global Engagements" },
              { n: "20yrs", l: "Leadership Experience" },
            ].map((s) => (
              <div key={s.l} data-testid={`hero-stat-${s.l.split(' ')[0].toLowerCase()}`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#1B2A41]">
                  {s.n}
                </div>
                <div className="text-xs sm:text-sm text-[#64748B] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent */}
        <div className="lg:col-span-4 relative hidden lg:flex justify-end">
          <div className="relative w-[360px] h-[460px]">
            <div className="absolute inset-0 rounded-2xl border border-[#0070F2]/20 bg-[#FFFFFF]/70 backdrop-blur-md p-8 overflow-hidden animate-float">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0070F2] rounded-full blur-3xl opacity-40" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
                    Engagement Models
                  </div>
                  <div className="mt-3 font-display text-2xl text-[#1B2A41] leading-tight">
                    Configure · Integrate · Support
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { k: "Fixed Price", v: "Scoped" },
                    { k: "Time & Materials", v: "Flexible" },
                    { k: "Dedicated Pod", v: "Monthly" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-center justify-between text-sm border-b border-[#0070F2]/10 pb-2"
                    >
                      <span className="text-[#475569]">{r.k}</span>
                      <span className="text-[#1B2A41] font-medium">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
                  <span className="text-xs text-[#64748B]">Partnering with global SIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FFFFFF]" />
    </section>
  );
};

export default Hero;
