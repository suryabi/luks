import React from "react";
import {
  Lightbulb, Code2, Rocket, Cloud, BarChart3, Database, ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    Icon: Lightbulb,
    title: "IT Consulting & Strategy",
    desc: "Roadmaps, architecture reviews and digital transformation guidance from senior advisors who have shipped at scale.",
    bullets: ["Tech strategy", "Cloud migration", "Architecture audits"],
  },
  {
    Icon: Code2,
    title: "Custom Software Services",
    desc: "Web, mobile and back‑office systems engineered for reliability — from greenfield builds to legacy modernization.",
    bullets: ["Web & mobile apps", "API platforms", "Legacy modernization"],
  },
  {
    Icon: Rocket,
    title: "Product Development",
    desc: "End‑to‑end product engineering — discovery, UX, build, launch and iterate as your long‑term innovation partner.",
    bullets: ["Discovery & UX", "MVP delivery", "Growth iteration"],
  },
  {
    Icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Resilient, cost‑aware cloud platforms on AWS, GCP and Azure with full CI/CD, observability and IaC automation.",
    bullets: ["AWS · GCP · Azure", "Kubernetes & IaC", "SRE & observability"],
  },
  {
    Icon: BarChart3,
    title: "Data & Analytics",
    desc: "Modern data stacks, warehouses and BI — turning raw signals into decisions you can act on with confidence.",
    bullets: ["Data platforms", "ML & analytics", "BI dashboards"],
  },
  {
    Icon: Database,
    title: "SAP HCM / HANA",
    desc: "Deep SAP HCM and HANA expertise — implementation, support and offshore delivery with predictable outcomes.",
    bullets: ["Implementation", "Support & AMS", "Offshore delivery"],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
              Services
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
              Everything you need to <span className="gradient-text">ship and scale</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-[#C9B7B9] leading-relaxed">
              One partner across the entire technology lifecycle — from
              strategic consulting to deeply engineered software products that
              earn their place in your business.
            </p>
          </div>
        </div>

        {/* Grid borders layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-red-500/12">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-testid={`service-item-${i + 1}`}
              className="group relative p-8 sm:p-10 border-r border-b border-red-500/12 hover:bg-[#1F0B0E] transition-colors duration-500"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-red-500" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center mb-8">
                <s.Icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-display text-2xl text-white mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-[#A38F91] leading-relaxed text-[15px]">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-[#C9B7B9]"
                  >
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
