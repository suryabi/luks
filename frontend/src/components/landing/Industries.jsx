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
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&w=1920&q=80";

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/85 to-[#FFFFFF]" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
            SAP SuccessFactors Product Range
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
            Ten modules. <span className="gradient-text">One delivery partner</span>.
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed mt-6">
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
              className="group relative p-5 rounded-xl border border-[#0070F2]/12 bg-[#FFFFFF]/60 backdrop-blur-sm hover:border-[#0070F2]/40 hover:bg-[#FFFFFF] transition-all duration-300"
            >
              <m.Icon className="w-6 h-6 text-[#0070F2] mb-4 group-hover:text-[#1A5CB7] transition-colors" />
              <h3 className="font-display text-base font-semibold text-[#1B2A41] tracking-tight leading-snug">
                {m.name}
              </h3>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                {m.note}
              </p>
            </div>
          ))}
        </div>

        {/* Integration platforms callout */}
        <div className="mt-10 p-6 rounded-2xl border border-[#0070F2]/15 bg-[#FFFFFF]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
              Integration Platforms
            </div>
            <div className="font-display text-xl text-[#1B2A41] mt-1 tracking-tight">
              SAP HANA Cloud Integration · Dell Boomi
            </div>
          </div>
          <div className="text-sm text-[#64748B] sm:text-right max-w-md">
            Building, monitoring and break-fixing integrations between
            SuccessFactors and the rest of your HR &amp; finance landscape.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
