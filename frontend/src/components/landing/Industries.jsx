import React from "react";
import {
  Users, Banknote, BarChart3, MessagesSquare, UserPlus,
  Rocket, GraduationCap, Target, Wallet, TrendingUp,
} from "lucide-react";

const MODULES = [
  { Icon: Users, name: "Employee Central", note: "Core HR & Time Off" },
  { Icon: Banknote, name: "Employee Central Payroll", note: "Cloud payroll engine" },
  { Icon: BarChart3, name: "SAP Analytics Cloud", note: "People analytics" },
  { Icon: MessagesSquare, name: "SAP Jam", note: "Workforce collaboration" },
  { Icon: UserPlus, name: "Recruiting (incl. RMK)", note: "Talent acquisition" },
  { Icon: Rocket, name: "Onboarding", note: "New hire experience" },
  { Icon: GraduationCap, name: "Learning", note: "LMS & compliance" },
  { Icon: Target, name: "Performance & Goals", note: "PMGM cycles" },
  { Icon: Wallet, name: "Compensation", note: "Comp planning" },
  { Icon: TrendingUp, name: "Succession & Development", note: "Career growth" },
];

const BG_IMG =
  "https://images.pexels.com/photos/18618814/pexels-photo-18618814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const Industries = () => {
  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: `url(${BG_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#150708] via-[#150708]/85 to-[#150708]" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
            SAP SuccessFactors Product Range
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
            Ten modules. <span className="gradient-text">One delivery partner</span>.
          </h2>
          <p className="text-lg text-[#C9B7B9] leading-relaxed mt-6">
            Hands-on certified expertise across the full SAP SuccessFactors
            HCM Cloud suite — from Core HR through Talent, Payroll and
            Analytics, glued together with CPI &amp; Dell Boomi integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MODULES.map((m) => (
            <div
              key={m.name}
              data-testid="industry-card"
              className="group relative p-5 rounded-xl border border-red-500/12 bg-[#1F0B0E]/60 backdrop-blur-sm hover:border-red-500/40 hover:bg-[#1F0B0E] transition-all duration-300"
            >
              <m.Icon className="w-6 h-6 text-red-400 mb-4 group-hover:text-orange-400 transition-colors" />
              <h3 className="font-display text-base font-semibold text-white tracking-tight leading-snug">
                {m.name}
              </h3>
              <p className="text-xs text-[#A38F91] mt-1.5 leading-relaxed">
                {m.note}
              </p>
            </div>
          ))}
        </div>

        {/* Integration platforms callout */}
        <div className="mt-10 p-6 rounded-2xl border border-red-500/15 bg-[#1F0B0E]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-red-400 font-semibold">
              Integration Platforms
            </div>
            <div className="font-display text-xl text-white mt-1 tracking-tight">
              SAP HANA Cloud Integration · Dell Boomi
            </div>
          </div>
          <div className="text-sm text-[#A38F91] sm:text-right max-w-md">
            Building, monitoring and break-fixing integrations between
            SuccessFactors and the rest of your HR &amp; finance landscape.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
