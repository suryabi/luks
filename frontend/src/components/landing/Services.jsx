import React from "react";
import { Link } from "react-router-dom";
import {
  Settings2, GitBranch, Workflow, Cloud, ShieldCheck, GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    Icon: Settings2,
    title: "Configuration Services",
    desc: "Hands-on SuccessFactors configuration delivered by certified consultants using configuration workbooks and best practices.",
    bullets: [
      "Instance pre-configuration & updates",
      "SuccessFactors configuration from workbooks",
      "Report building & embedded analytics",
      "Driving integration & system testing",
    ],
  },
  {
    Icon: GitBranch,
    title: "Integration & Testing Support",
    desc: "Deep CPI / Dell Boomi expertise to migrate legacy HR systems and connect SuccessFactors to internal & 3rd-party platforms.",
    bullets: [
      "SFSF suite integration monitoring",
      "Builds on Dell Boomi & SAP HCI",
      "Break-fix & integration test support",
      "Legacy HR system migrations",
    ],
  },
  {
    Icon: Workflow,
    title: "Functional Services",
    desc: "Business-led delivery — workshops, use case prototyping and process redesign that turn requirements into working configuration.",
    bullets: [
      "Functional workshops & blueprinting",
      "Configuration workbooks",
      "Use case prototyping & process redesign",
      "End-to-end functional testing",
    ],
  },
  {
    Icon: Cloud,
    title: "Operations Cloud (Product)",
    desc: "Our own multi-tenant business operating platform unifying Sales, Marketing, Production, Distribution, Accounting & BI.",
    bullets: [
      "Sales & CRM, Marketing, Production",
      "Distribution, Warehouse, Accounting",
      "Integrations: Zoho · Slack · Drive",
      "Built for FMCG & manufacturers",
    ],
    href: "/products/operations-cloud",
  },
  {
    Icon: ShieldCheck,
    title: "Delivery Assurance",
    desc: "Quality is core to our delivery mantra — governance models, communication frameworks and configuration assurance against requirements.",
    bullets: [
      "Governance & status models",
      "Solution configuration assurance",
      "Stakeholder communication",
      "Delivery quality reviews",
    ],
  },
  {
    Icon: GraduationCap,
    title: "Training & Certifications",
    desc: "Continuous SuccessFactors certification, delta exams and module specialisation — so our consultants stay sharp every release.",
    bullets: [
      "Regular certification training",
      "Delta exams every release",
      "Cross-module upskilling",
      "Investment in consultant growth",
    ],
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
            <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
              Services
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
              SAP &amp; HCM Cloud delivery, <span className="gradient-text">done right</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-[#475569] leading-relaxed">
              Three disciplined service practices — Configuration, Integration
              and Functional — plus our own Operations Cloud product. Built on
              a Business Use Case methodology that anchors every engagement.
            </p>
          </div>
        </div>

        {/* Grid borders layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0070F2]/12">
          {SERVICES.map((s, i) => {
            const Wrapper = s.href ? Link : "article";
            const wrapperProps = s.href
              ? { to: s.href }
              : {};
            return (
              <Wrapper
                key={s.title}
                data-testid={`service-item-${i + 1}`}
                {...wrapperProps}
                className={`group relative p-8 sm:p-10 border-r border-b border-[#0070F2]/12 hover:bg-[#FFFFFF] transition-colors duration-500 block ${
                  s.href ? "cursor-pointer" : ""
                }`}
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-[#0070F2]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0070F2]/10 border border-[#0070F2]/20 flex items-center justify-center mb-8">
                  <s.Icon className="w-5 h-5 text-[#0070F2]" />
                </div>
                <h3 className="font-display text-2xl text-[#1B2A41] mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-[15px]">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-[#475569]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#0070F2]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
