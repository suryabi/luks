import React from "react";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1624533358643-7336036c9482?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjByZWR8ZW58MHx8fHwxNzgxMDA5MTI1fDA&ixlib=rb-4.1.0&q=85";

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
          alt="Abstract red technology"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#150708]/70 via-[#150708]/60 to-[#150708]" />
        <div className="absolute inset-0 radial-glow opacity-80" />
      </div>

      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EF4444 1px, transparent 1px), linear-gradient(to bottom, #EF4444 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm w-fit">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#F8C5C7] font-semibold">
              IT Consulting · Software · Product Engineering
            </span>
          </div>

          <h1
            data-testid="hero-headline"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] text-white"
          >
            Build the future <br className="hidden sm:block" />
            with{" "}
            <span className="gradient-text inline-block">
              Expert IT Consulting
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-[#C9B7B9] leading-relaxed">
            Luks Solutions Ltd delivers strategic technology consulting, custom
            software services, and end‑to‑end product development for
            forward‑thinking enterprises across the globe.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#services"
              data-testid="hero-cta-explore"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)] transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              data-testid="hero-cta-learn"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-red-500/30 text-white font-medium hover:bg-red-500/10 hover:border-red-500/60 transition-all duration-300"
            >
              <PlayCircle className="w-4 h-4 text-orange-400" />
              See Our Work
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-10 mt-2 border-t border-red-500/10">
            {[
              { n: "12+", l: "Years of Expertise" },
              { n: "180+", l: "Projects Delivered" },
              { n: "40+", l: "Global Clients" },
              { n: "98%", l: "Retention Rate" },
            ].map((s) => (
              <div key={s.l} data-testid={`hero-stat-${s.l.split(' ')[0].toLowerCase()}`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                  {s.n}
                </div>
                <div className="text-xs sm:text-sm text-[#A38F91] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent */}
        <div className="lg:col-span-4 relative hidden lg:flex justify-end">
          <div className="relative w-[360px] h-[460px]">
            <div className="absolute inset-0 rounded-2xl border border-red-500/20 bg-[#1F0B0E]/70 backdrop-blur-md p-8 overflow-hidden animate-float">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-3xl opacity-40" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-red-400 font-semibold">
                    Engagement
                  </div>
                  <div className="mt-3 font-display text-2xl text-white leading-tight">
                    Strategy · Build · Scale
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { k: "Discovery", v: "Week 1" },
                    { k: "MVP", v: "Week 4" },
                    { k: "Launch", v: "Week 12" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-center justify-between text-sm border-b border-red-500/10 pb-2"
                    >
                      <span className="text-[#C9B7B9]">{r.k}</span>
                      <span className="text-white font-medium">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
                  <span className="text-xs text-[#A38F91]">Onboarding new clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#150708]" />
    </section>
  );
};

export default Hero;
