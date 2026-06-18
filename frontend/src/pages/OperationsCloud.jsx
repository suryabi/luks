import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Sparkles, Eye, Network, ShieldCheck,
  Zap, BarChart3, ChevronRight, Plug, FolderArchive, Mail, Map, Calculator,
  Briefcase, Megaphone, Factory, Truck, Wallet, LineChart, Users, Cog,
  CheckCircle2, Layers, Globe2,
} from "lucide-react";
import {
  SiZoho, SiSlack, SiGoogledrive, SiDropbox, SiGooglemaps, SiGmail,
  SiQuickbooks, SiXero,
} from "react-icons/si";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

/* ---------- Data ---------- */
const WHY = [
  {
    Icon: Eye,
    title: "End-to-End Business Visibility",
    desc:
      "Manage the complete business lifecycle — from Lead through Production, Dispatch, Returns, Accounting and Analytics — on one connected platform.",
  },
  {
    Icon: Network,
    title: "Multi-Tenant & Role-Based",
    desc:
      "Support multiple companies, business units, distributors, warehouses and departments with granular access controls.",
  },
  {
    Icon: ShieldCheck,
    title: "Complete Traceability",
    desc:
      "Track inventory, batches, orders, deliveries, returns and financial transactions with full audit trails.",
  },
  {
    Icon: Zap,
    title: "Automation-Driven Operations",
    desc:
      "Replace manual effort with integrated workflows, approvals, notifications, accounting sync and logistics automation.",
  },
  {
    Icon: BarChart3,
    title: "Data-Driven Decision Making",
    desc:
      "Real-time insights into sales, inventory movement, production efficiency, profitability and team productivity.",
  },
];

const LIFECYCLE = [
  "Lead", "Opportunity", "Order", "Production", "Quality",
  "Inventory", "Dispatch", "Delivery", "Returns", "Accounting", "Analytics",
];

const MODULES = [
  {
    id: "sales-crm",
    n: "01",
    name: "Sales & CRM",
    Icon: Briefcase,
    tagline: "Transform opportunities into predictable revenue.",
    groups: [
      {
        title: "Lead & Opportunity Management",
        items: [
          "Lead capture and qualification",
          "Customizable sales pipelines",
          "Kanban-based opportunity tracking",
          "Territory and account ownership management",
        ],
      },
      {
        title: "Smart Prospecting",
        items: [
          "Discover potential customers by geography, category and industry",
          "Prospect database management",
          "Lead enrichment capabilities",
        ],
      },
      {
        title: "AI-Powered Sales Intelligence",
        items: [
          "Lead scoring and prioritization",
          "Opportunity forecasting",
          "Sales trend analysis",
        ],
      },
      {
        title: "Accounts & Customer 360°",
        items: [
          "360° account view (Accounts / Customers / Contacts)",
          "Contact management & relationship history",
          "Business card scanning",
          "GPS-enabled customer locations",
          "Customer interaction & touchpoint history",
        ],
      },
      {
        title: "Field Sales Operations",
        items: [
          "Geo-tagged check-ins",
          "Visit tracking",
          "Follow-up management",
          "Route planning",
        ],
      },
      {
        title: "Commercial Management",
        items: [
          "Customer-specific pricing",
          "Quotation management",
          "Cost and margin calculators",
          "Sales target planning and allocation",
        ],
      },
    ],
  },
  {
    id: "marketing",
    n: "02",
    name: "Marketing Operations",
    Icon: Megaphone,
    tagline: "Manage campaigns, creative workflows and brand execution.",
    groups: [
      {
        title: "Marketing Request Management",
        items: ["Request intake workflows", "Approval processes", "Cross-functional collaboration"],
      },
      {
        title: "Creative & Design Management",
        items: ["Design requests", "Asset version control", "Review and approval workflows", "Brand asset repository"],
      },
      {
        title: "Campaign Management",
        items: ["Campaign planning", "Marketing calendars", "Campaign performance tracking"],
      },
      {
        title: "Print & Production Workflows",
        items: ["Vendor coordination", "Print approval workflows", "Material production tracking"],
      },
      {
        title: "Digital Marketing Support",
        items: ["Content planning", "Campaign scheduling", "Marketing performance reporting"],
      },
    ],
  },
  {
    id: "production",
    n: "03",
    name: "Production & Manufacturing",
    Icon: Factory,
    tagline: "Deliver consistent quality with complete operational control.",
    groups: [
      {
        title: "Production Planning",
        items: ["Production schedules", "Work order management", "Capacity planning"],
      },
      {
        title: "Batch Management",
        items: ["Batch creation and tracking", "Batch genealogy", "Material consumption tracking"],
      },
      {
        title: "Quality Management",
        items: ["Configurable inspection workflows", "Quality checkpoints", "Non-conformance management", "Rejection tracking"],
      },
      {
        title: "Asset & Maintenance Management",
        items: ["Equipment tracking", "Preventive maintenance schedules", "Breakdown management"],
      },
      {
        title: "Vendor & Procurement Support",
        items: ["Vendor management", "Material tracking", "Purchase planning support"],
      },
    ],
  },
  {
    id: "distribution",
    n: "04",
    name: "Distribution & Warehouse",
    Icon: Truck,
    tagline: "Move inventory efficiently with complete stock visibility.",
    groups: [
      {
        title: "Warehouse Operations",
        items: ["Stock inward and outward processing", "Batch and FIFO inventory management", "Inventory audits"],
      },
      {
        title: "Distributor Management",
        items: ["Distributor onboarding", "Territory allocation", "Warehouse mapping"],
      },
      {
        title: "Stock Transfers",
        items: ["Inter-warehouse transfers", "Delivery challan generation", "Inventory movement tracking"],
      },
      {
        title: "Delivery Operations",
        items: ["Delivery scheduling", "Route planning", "Driver mobile application", "Delivery confirmation tracking"],
      },
      {
        title: "Returns Management",
        items: ["Product returns", "Packaging returns", "Inventory reconciliation"],
      },
      {
        title: "Inventory Visibility",
        items: ["Real-time stock dashboards", "Batch-wise availability", "Aging analysis", "Inventory forecasting"],
      },
    ],
  },
  {
    id: "accounting",
    n: "05",
    name: "Accounting & Financials",
    Icon: Wallet,
    tagline: "Connect operations directly to financial outcomes.",
    groups: [
      {
        title: "Financial Integration",
        items: ["Accounting system integrations", "Invoice synchronization", "Credit note management"],
      },
      {
        title: "Billing & Collections",
        items: ["Customer billing", "Distributor billing", "External billing entries", "Collection tracking"],
      },
      {
        title: "Cost & Profitability Analysis",
        items: ["Product profitability", "Customer profitability", "Territory profitability", "Contribution analysis"],
      },
      {
        title: "Financial Reporting",
        items: ["Revenue tracking", "Outstanding receivables", "Settlement management", "Financial performance dashboards"],
      },
    ],
  },
  {
    id: "bi",
    n: "06",
    name: "Reporting & BI",
    Icon: LineChart,
    tagline: "Make decisions with confidence using real-time data.",
    groups: [
      {
        title: "Executive Dashboards",
        items: ["Revenue performance", "Sales performance", "Operational KPIs", "Financial summaries"],
      },
      {
        title: "Sales Analytics",
        items: ["Pipeline analytics", "Conversion metrics", "Territory performance", "Team performance"],
      },
      {
        title: "Product Analytics",
        items: ["SKU performance", "Product profitability", "Demand trends"],
      },
      {
        title: "Operational Analytics",
        items: ["Production efficiency", "Inventory movement", "Distribution performance"],
      },
      {
        title: "Investor & Leadership Dashboards",
        items: ["Company health metrics", "Growth tracking", "Strategic performance indicators"],
      },
    ],
  },
  {
    id: "workforce",
    n: "07",
    name: "Workforce & Productivity",
    Icon: Users,
    tagline: "Keep teams aligned and accountable.",
    groups: [
      {
        title: "Task Management",
        items: ["Individual tasks", "Team assignments", "Due date tracking"],
      },
      {
        title: "Calendars & Scheduling",
        items: ["Personal calendars", "Team calendars", "Google Calendar integration"],
      },
      {
        title: "Collaboration",
        items: ["Daily status updates", "Meeting minutes", "Action item tracking"],
      },
      {
        title: "Employee Requests",
        items: ["Leave requests", "Travel requests", "Budget approvals", "Internal workflows"],
      },
    ],
  },
  {
    id: "admin",
    n: "08",
    name: "Administration & Security",
    Icon: Cog,
    tagline: "Enterprise-grade controls with business flexibility.",
    groups: [
      {
        title: "Role-Based Access Control (RBAC)",
        items: ["User roles", "Department-level permissions", "Module-level security"],
      },
      {
        title: "Workflow Builder",
        items: ["No-code workflow configuration", "Approval processes", "State machine management"],
      },
      {
        title: "Master Data Management",
        items: ["Customer masters", "Product masters", "Vendor masters", "Location masters"],
      },
      {
        title: "Knowledge Management",
        items: ["Document repository", "Policies and procedures", "Internal knowledge base"],
      },
      {
        title: "Integrations",
        items: [
          "Zoho (Books, CRM, Inventory)",
          "Slack — alerts, approvals & team channels",
          "Document Storage — Google Drive, Dropbox, OneDrive, S3",
          "Accounting Systems (Tally, QuickBooks, Xero, Zoho Books)",
          "Google Maps & geo-services",
          "Email Platforms (Gmail, Outlook, SMTP)",
          "ERP & 3rd-party REST APIs",
        ],
      },
    ],
  },
];

/* ---------- Sub components ---------- */
const SectionEyebrow = ({ children }) => (
  <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
    {children}
  </div>
);

const ProductHero = () => (
  <section
    data-testid="product-hero"
    className="relative isolate pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden"
  >
    <div className="absolute inset-0 -z-10 radial-glow opacity-70" />
    <div
      aria-hidden
      className="absolute inset-0 -z-10 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #0070F2 1px, transparent 1px), linear-gradient(to bottom, #0070F2 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />

    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      <Link
        to="/"
        data-testid="product-back-home"
        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#64748B] hover:text-[#1B2A41] transition-colors mb-10"
      >
        <ChevronRight className="w-3 h-3 rotate-180" /> Back to Luks Solutions
      </Link>

      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0070F2]/30 bg-[#0070F2]/10 backdrop-blur-sm w-fit mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[#F0AB00]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
              A Luks Solutions Product · Multi-Tenant SaaS
            </span>
          </div>

          <h1
            data-testid="product-hero-title"
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-[#1B2A41]"
          >
            Sales &amp; <br className="hidden sm:block" />
            <span className="gradient-text">Operations Cloud</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl">
            One platform to run sales, marketing, distribution, production and
            accounting — a unified business operating system for growing
            manufacturers, distributors, FMCG brands and field‑sales teams.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/#contact"
              data-testid="product-cta-demo"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#0070F2] text-white font-medium hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)] transition-all"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#modules"
              data-testid="product-cta-modules"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#0070F2]/30 text-[#1B2A41] font-medium hover:bg-[#0070F2]/10 hover:border-[#0070F2]/60 transition-all"
            >
              Explore Modules
            </a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="relative rounded-2xl border border-[#0070F2]/20 bg-[#FFFFFF]/70 backdrop-blur-md p-7 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0070F2] rounded-full blur-3xl opacity-40" />
            <div className="relative z-10 space-y-5">
              <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
                Built for
              </div>
              <ul className="space-y-3 text-[15px] text-[#1B2A41]">
                {[
                  "Manufacturers",
                  "Distributors & wholesalers",
                  "FMCG and consumer brands",
                  "Field-sales organizations",
                  "Multi-warehouse operators",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F0AB00] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#0070F2]/10 flex items-center gap-3 text-xs text-[#64748B]">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
                Live with customers across 4 continents
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-16 max-w-4xl text-base text-[#64748B] leading-relaxed">
        From the moment a lead is captured to the final customer delivery and
        financial settlement, every department works from a single source of
        truth. No spreadsheets. No disconnected systems. No operational blind
        spots.
      </p>
    </div>
  </section>
);

const WhyChoose = () => (
  <section
    data-testid="why-choose"
    className="relative py-24 sm:py-28 px-6 sm:px-10 lg:px-12 border-t border-[#0070F2]/10"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 mb-14">
        <div className="lg:col-span-5">
          <SectionEyebrow>Why Teams Choose Operations Cloud</SectionEyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
            Operate with <span className="gradient-text">clarity, control &amp; confidence</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="text-lg text-[#475569] leading-relaxed">
            Five reasons fast‑growing operations teams move off spreadsheets
            and siloed point tools — and consolidate on Operations Cloud.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY.map((w, i) => (
          <div
            key={w.title}
            data-testid={`why-card-${i + 1}`}
            className={`group relative p-7 rounded-2xl border border-[#0070F2]/12 bg-[#FFFFFF]/60 hover:border-[#0070F2]/35 hover:bg-[#FFFFFF] transition-all duration-300 ${
              i === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#0070F2]/10 border border-[#0070F2]/20 flex items-center justify-center mb-5">
              <w.Icon className="w-5 h-5 text-[#0070F2]" />
            </div>
            <h3 className="font-display text-xl text-[#1B2A41] tracking-tight">{w.title}</h3>
            <p className="text-[15px] text-[#64748B] leading-relaxed mt-3">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LifecycleStrip = () => (
  <section
    data-testid="lifecycle-strip"
    className="relative py-20 px-6 sm:px-10 lg:px-12 bg-[#F5F6F7] border-y border-[#0070F2]/10 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <SectionEyebrow>The Complete Business Lifecycle</SectionEyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B2A41] mt-4 tracking-tighter">
          One platform, <span className="gradient-text">eleven stages</span>, zero handoffs.
        </h2>
      </div>

      <div className="relative">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {LIFECYCLE.map((step, i) => (
            <React.Fragment key={step}>
              <div
                data-testid={`lifecycle-step-${i + 1}`}
                className="px-4 py-2.5 rounded-full border border-[#0070F2]/25 bg-[#FFFFFF] text-sm text-[#1B2A41] font-medium tracking-tight"
              >
                {step}
              </div>
              {i < LIFECYCLE.length - 1 && (
                <ChevronRight className="w-4 h-4 text-[#0070F2]/50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ModuleNav = ({ modules, active, onSelect }) => (
  <nav className="lg:sticky lg:top-28 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-thin">
    {modules.map((m) => {
      const isActive = m.id === active;
      return (
        <button
          key={m.id}
          data-testid={`module-tab-${m.id}`}
          onClick={() => onSelect(m.id)}
          className={`group shrink-0 lg:shrink text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
            isActive
              ? "bg-[#FFFFFF] border-[#0070F2]/40"
              : "bg-transparent border-transparent hover:bg-[#FFFFFF]/60 border-[#0070F2]/0 hover:border-[#0070F2]/15"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              isActive
                ? "bg-[#0070F2] text-white"
                : "bg-[#0070F2]/10 text-[#0070F2]"
            }`}
          >
            <m.Icon className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#64748B]">
              {m.n}
            </div>
            <div
              className={`text-sm font-display font-semibold tracking-tight ${
                isActive ? "text-[#1B2A41]" : "text-[#475569] group-hover:text-[#1B2A41]"
              }`}
            >
              {m.name}
            </div>
          </div>
        </button>
      );
    })}
  </nav>
);

const ModulePanel = ({ module: m }) => (
  <div
    key={m.id}
    data-testid={`module-panel-${m.id}`}
    className="relative p-7 sm:p-10 rounded-3xl border border-[#0070F2]/15 bg-[#FFFFFF]/60 backdrop-blur-sm"
  >
    <div className="flex items-start gap-5 mb-8">
      <div className="w-14 h-14 rounded-2xl bg-[#0070F2] flex items-center justify-center shrink-0">
        <m.Icon className="w-6 h-6 text-[#1B2A41]" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
          Module {m.n}
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#1B2A41] tracking-tighter mt-1">
          {m.name}
        </h3>
        <p className="text-[#475569] mt-3 text-base sm:text-lg leading-relaxed max-w-2xl">
          {m.tagline}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
      {m.groups.map((g) => (
        <div key={g.title}>
          <h4 className="font-display font-semibold text-[#1B2A41] text-lg tracking-tight">
            {g.title}
          </h4>
          <ul className="mt-4 space-y-2.5">
            {g.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 text-[15px] text-[#475569] leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0070F2] shrink-0" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Modules = () => {
  const [active, setActive] = useState(MODULES[0].id);
  const current = MODULES.find((m) => m.id === active) || MODULES[0];

  return (
    <section
      id="modules"
      data-testid="modules-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <SectionEyebrow>Platform Modules</SectionEyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
              Eight modules. <span className="gradient-text">One operating system</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-[#475569] leading-relaxed">
              Adopt the platform module-by-module or all at once. Every module
              shares the same data, the same identities, and the same audit
              trail — so cross-functional work just works.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <ModuleNav modules={MODULES} active={active} onSelect={setActive} />
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            <ModulePanel module={current} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Integrations = () => {
  const FEATURED = [
    {
      Icon: SiZoho,
      name: "Zoho",
      desc: "Two-way sync with Zoho Books, Zoho CRM and Zoho Inventory.",
      tags: ["Books", "CRM", "Inventory"],
    },
    {
      Icon: SiSlack,
      name: "Slack",
      desc: "Real-time alerts, approval requests and team channels for every workflow.",
      tags: ["Alerts", "Approvals"],
    },
    {
      Icon: FolderArchive,
      name: "Document Storage",
      desc: "Attach files, contracts and POs from Drive, Dropbox, OneDrive or S3.",
      tags: ["Drive", "Dropbox", "S3"],
      stack: [SiGoogledrive, SiDropbox],
    },
  ];

  const OTHERS = [
    { Icon: SiQuickbooks, name: "QuickBooks" },
    { Icon: SiXero, name: "Xero" },
    { Icon: Calculator, name: "Tally" },
    { Icon: SiGooglemaps, name: "Google Maps" },
    { Icon: SiGmail, name: "Gmail / SMTP" },
    { Icon: Mail, name: "Outlook" },
    { Icon: Map, name: "Geo Services" },
    { Icon: Plug, name: "REST APIs" },
  ];

  return (
    <section
      id="integrations"
      data-testid="integrations-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-[#0070F2]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <SectionEyebrow>Integrations</SectionEyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
              Plays well with the <span className="gradient-text">tools you already use</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-[#475569] leading-relaxed">
              Operations Cloud is API-first. Native connectors for Zoho, Slack
              and major document-storage providers — plus REST endpoints for
              anything else in your stack.
            </p>
          </div>
        </div>

        {/* Featured integrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED.map((f) => (
            <div
              key={f.name}
              data-testid={`integration-featured-${f.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative p-7 rounded-2xl border border-[#0070F2]/15 bg-[#FFFFFF]/70 hover:border-[#0070F2]/40 hover:bg-[#FFFFFF] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0070F2]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#0070F2]/20 flex items-center justify-center">
                    <f.Icon className="w-6 h-6 text-[#1B2A41]" />
                  </div>
                  {f.stack && (
                    <div className="flex -space-x-1.5">
                      {f.stack.map((S, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-[#FFFFFF] border border-[#0070F2]/25 flex items-center justify-center"
                        >
                          <S className="w-3.5 h-3.5 text-[#475569]" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl text-[#1B2A41] tracking-tight">
                  {f.name}
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed mt-3">
                  {f.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] tracking-wider uppercase text-[#475569] px-2.5 py-1 rounded-full border border-[#0070F2]/15 bg-[#FFFFFF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Others */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-[#0070F2]/12 bg-[#FFFFFF]/50">
          <div className="flex items-center justify-between mb-5">
            <div className="text-xs tracking-[0.25em] uppercase text-[#64748B] font-semibold">
              Plus connectors for
            </div>
            <Plug className="w-4 h-4 text-[#0070F2]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {OTHERS.map((o) => (
              <div
                key={o.name}
                data-testid={`integration-other-${o.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl border border-[#0070F2]/8 bg-[#FFFFFF] hover:border-[#0070F2]/30 transition-colors"
              >
                <o.Icon className="w-6 h-6 text-[#475569]" />
                <div className="text-[11px] text-[#64748B] text-center">{o.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BuiltToScale = () => (
  <section
    data-testid="built-to-scale"
    className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 bg-[#F5F6F7] border-t border-[#0070F2]/10 overflow-hidden"
  >
    <div className="absolute inset-0 -z-10 radial-glow opacity-50" />

    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <SectionEyebrow>Built to Scale</SectionEyebrow>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
          From a single facility to a <span className="gradient-text">nationwide network</span>.
        </h2>
        <div className="mt-7 space-y-5 text-lg text-[#475569] leading-relaxed">
          <p>
            Operations Cloud is built on a modern multi-tenant architecture
            that grows alongside your business. Whether you operate a single
            facility, manage multiple warehouses, run a nationwide distribution
            network, or oversee multiple brands, the platform adapts to your
            processes, teams and organizational structure.
          </p>
          <p>
            A single platform for sales, marketing, production, distribution,
            accounting, and business intelligence — designed to help
            organizations operate with clarity, control and confidence.
          </p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="grid grid-cols-2 gap-4">
          {[
            { Icon: Layers, k: "Multi-Tenant", l: "Architecture" },
            { Icon: ShieldCheck, k: "RBAC", l: "Secured by design" },
            { Icon: Globe2, k: "Multi-Region", l: "Multi-currency ready" },
            { Icon: Zap, k: "No-Code", l: "Workflow builder" },
          ].map((c) => (
            <div
              key={c.k}
              className="p-6 rounded-2xl border border-[#0070F2]/15 bg-[#FFFFFF]/70"
            >
              <c.Icon className="w-6 h-6 text-[#0070F2] mb-4" />
              <div className="font-display text-lg text-[#1B2A41] font-semibold tracking-tight">
                {c.k}
              </div>
              <div className="text-sm text-[#64748B] mt-1">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ClosingCTA = () => (
  <section
    data-testid="product-cta"
    className="relative py-24 sm:py-28 px-6 sm:px-10 lg:px-12 overflow-hidden"
  >
    <div className="max-w-5xl mx-auto text-center relative">
      <div className="absolute inset-0 -z-10 radial-glow opacity-60" />
      <SectionEyebrow>Ready to consolidate?</SectionEyebrow>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
        See Operations Cloud <span className="gradient-text">in action</span>.
      </h2>
      <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
        Book a 30‑minute tailored walkthrough with a Luks Solutions partner.
        We&apos;ll map your current workflows onto the platform and show you
        exactly what an end‑to‑end deployment would look like.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="/#contact"
          data-testid="product-cta-final"
          className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#0070F2] text-white font-medium hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)] transition-all"
        >
          Request a Demo
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <Link
          to="/"
          data-testid="product-cta-back"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#0070F2]/30 text-[#1B2A41] font-medium hover:bg-[#0070F2]/10 hover:border-[#0070F2]/60 transition-all"
        >
          Explore Luks Solutions
        </Link>
      </div>
    </div>
  </section>
);

/* ---------- Page ---------- */
export default function OperationsCloud() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Sales & Operations Cloud — Luks Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1B2A41] font-body overflow-x-hidden">
      <Header />
      <main>
        <ProductHero />
        <WhyChoose />
        <LifecycleStrip />
        <Modules />
        <Integrations />
        <BuiltToScale />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
