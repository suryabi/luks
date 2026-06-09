import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact, SiNodedotjs, SiPython, SiDocker, SiKubernetes,
  SiPostgresql, SiMongodb, SiTypescript, SiSap, SiGooglecloud,
  SiTerraform, SiGo, SiFlutter, SiNextdotjs,
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";

const ITEMS = [
  { Icon: SiSap, label: "SAP" },
  { Icon: FaAws, label: "AWS" },
  { Icon: SiGooglecloud, label: "GCP" },
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiGo, label: "Go" },
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiKubernetes, label: "Kubernetes" },
  { Icon: SiTerraform, label: "Terraform" },
  { Icon: SiPostgresql, label: "Postgres" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: FaDatabase, label: "Oracle" },
];

export const TechMarquee = () => {
  return (
    <section
      data-testid="tech-stack-marquee"
      className="py-16 sm:py-20 border-y border-red-500/10 bg-[#1A0809]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
              Our Stack
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white mt-2 tracking-tight">
              Powered by best‑in‑class technology
            </h3>
          </div>
          <p className="text-[#A38F91] text-sm max-w-md">
            We architect with proven enterprise platforms and modern open
            source — chosen pragmatically for each engagement.
          </p>
        </div>
      </div>

      <div className="marquee-mask">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {ITEMS.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 text-[#9b8689] hover:text-red-500 transition-colors duration-300 group"
              data-testid={`tech-item-${label.toLowerCase()}`}
            >
              <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
              <span className="font-display text-lg font-medium">{label}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechMarquee;
