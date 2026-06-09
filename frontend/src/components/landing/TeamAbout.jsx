import React from "react";
import { Award, Globe2, Users, Workflow } from "lucide-react";

const TEAM_IMG =
  "https://images.unsplash.com/photo-1599837565318-67429bde7162?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjB0ZWNoJTIwdGVhbSUyMGRhcmt8ZW58MHx8fHwxNzgxMDA5MTE0fDA&ixlib=rb-4.1.0&q=85";

const FACTS = [
  { Icon: Users, k: "150+", l: "Engineers & Consultants" },
  { Icon: Globe2, k: "12", l: "Countries Delivered In" },
  { Icon: Workflow, k: "20+", l: "Active Engagements" },
  { Icon: Award, k: "ISO 27001", l: "Certified Practices" },
];

export const TeamAbout = () => {
  return (
    <section
      id="about"
      data-testid="team-about-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 bg-[#1A0809]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image side */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-red-500/15 aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-h-[80vh]">
            <img
              src={TEAM_IMG}
              alt="Luks Solutions team at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150708] via-[#150708]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-red-300 font-semibold">
                  Established
                </div>
                <div className="font-display text-3xl text-white mt-1">2013</div>
              </div>
              <div className="flex -space-x-2">
                {["#EF4444", "#F97316", "#fbbf24", "#a78bfa"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#150708]"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="lg:col-span-6">
          <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
            About Luks Solutions
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
            A senior team that <span className="gradient-text">stays in the room</span>.
          </h2>
          <div className="space-y-5 mt-7 text-[#C9B7B9] text-lg leading-relaxed">
            <p>
              We are a global consulting and product engineering firm built on
              a simple idea: senior people, accountable to outcomes. Founded in
              2013, we partner with ambitious organisations across finance,
              healthcare, retail and SaaS.
            </p>
            <p>
              From SAP HCM specialisation to modern cloud product engineering,
              our practice areas reinforce each other — letting us solve hard
              problems end‑to‑end without handoffs that break momentum.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            {FACTS.map((f) => (
              <div
                key={f.l}
                className="p-5 rounded-xl border border-red-500/12 bg-[#1F0B0E]/70"
                data-testid={`about-fact-${f.l.split(' ')[0].toLowerCase()}`}
              >
                <f.Icon className="w-5 h-5 text-red-400 mb-3" />
                <div className="font-display text-2xl text-white font-semibold">
                  {f.k}
                </div>
                <div className="text-sm text-[#A38F91] mt-1">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
