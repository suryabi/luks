import React from "react";
import {
  Landmark, HeartPulse, ShoppingBag, Factory, Truck, GraduationCap,
  Plane, Cpu,
} from "lucide-react";

const INDUSTRIES = [
  { Icon: Landmark, name: "Banking & Finance", desc: "Core banking modernization, regulatory tech, secure platforms." },
  { Icon: HeartPulse, name: "Healthcare & Pharma", desc: "HIPAA‑grade platforms, EHR integrations, patient experience." },
  { Icon: ShoppingBag, name: "Retail & E‑commerce", desc: "Omni‑channel commerce, personalization, headless storefronts." },
  { Icon: Factory, name: "Manufacturing", desc: "ERP optimization, IIoT, supply chain automation." },
  { Icon: Truck, name: "Logistics", desc: "Fleet, routing and warehouse software at operating scale." },
  { Icon: GraduationCap, name: "Education", desc: "LMS, assessment platforms and learning analytics." },
  { Icon: Plane, name: "Travel & Hospitality", desc: "Booking engines, loyalty platforms and CRM ecosystems." },
  { Icon: Cpu, name: "SaaS & Tech", desc: "Augmenting product teams to ship faster, safer software." },
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
            Industries we serve
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
            Domain depth across <span className="gradient-text">eight verticals</span>.
          </h2>
          <p className="text-lg text-[#C9B7B9] leading-relaxed mt-6">
            We pair engineering rigor with the regulatory, operational and
            customer nuances that define each industry we operate in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              data-testid="industry-card"
              className="group relative p-6 rounded-xl border border-red-500/12 bg-[#1F0B0E]/60 backdrop-blur-sm hover:border-red-500/40 hover:bg-[#1F0B0E] transition-all duration-300"
            >
              <ind.Icon className="w-7 h-7 text-red-400 mb-5 group-hover:text-orange-400 transition-colors" />
              <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                {ind.name}
              </h3>
              <p className="text-sm text-[#A38F91] mt-2 leading-relaxed">
                {ind.desc}
              </p>
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 pointer-events-none transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
