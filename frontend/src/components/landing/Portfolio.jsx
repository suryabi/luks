import React from "react";
import { ArrowUpRight } from "lucide-react";

const IMG_1 =
  "https://images.pexels.com/photos/12627677/pexels-photo-12627677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const IMG_2 =
  "https://images.unsplash.com/photo-1605362001336-f91645086f32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcmVkJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc4MTAwOTEyNXww&ixlib=rb-4.1.0&q=85";
const IMG_3 =
  "https://images.unsplash.com/photo-1624533358643-7336036c9482?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjByZWR8ZW58MHx8fHwxNzgxMDA5MTI1fDA&ixlib=rb-4.1.0&q=85";

const CASES = [
  {
    tag: "Strategic Partnership · Global SI",
    title: "Long-running Zalaris partnership across SF EC, PMGM, Comp, Onb & Rec",
    metrics: [{ k: "Active consultants", v: "27+" }],
    img: IMG_1,
    span: "lg:col-span-7",
  },
  {
    tag: "Multi-client · SF Rollouts",
    title: "SuccessFactors implementations for Lloyds Register, L+G, Northern Gas Network & Dun & Bradstreet",
    metrics: [{ k: "Programmes delivered", v: "4" }],
    img: IMG_3,
    span: "lg:col-span-5",
  },
];

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.25em] uppercase text-[#0070F2] font-semibold">
              Selected Work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A41] mt-4 tracking-tighter leading-[1.05]">
              Outcomes we are <span className="gradient-text">proud of</span>.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#1B2A41] group"
            data-testid="portfolio-view-all"
          >
            Request the full case‑study deck
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row-dense auto-rows-[280px] gap-5">
          {CASES.map((c, i) => (
            <article
              key={i}
              data-testid="portfolio-item"
              className={`group relative overflow-hidden rounded-2xl border border-[#0070F2]/15 ${c.span}`}
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/70 to-transparent" />
              <div className="relative h-full p-7 sm:p-9 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#0070F2] font-semibold">
                    {c.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-[#0070F2]/30 flex items-center justify-center group-hover:bg-[#0070F2] group-hover:border-[#0070F2] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#1B2A41]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#1B2A41] tracking-tight leading-tight max-w-xl">
                    {c.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="font-display text-2xl text-[#1B2A41] font-semibold">
                          {m.v}
                        </div>
                        <div className="text-xs text-[#64748B]">{m.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
