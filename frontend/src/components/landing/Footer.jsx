import React from "react";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { l: "Configuration Services", h: "#services", t: "footer-link" },
      { l: "Integration & Testing", h: "#services", t: "footer-link" },
      { l: "Functional Services", h: "#services", t: "footer-link" },
      { l: "Operations Cloud", h: "/products/operations-cloud", t: "footer-link" },
      { l: "Support & AMS", h: "#services", t: "footer-link" },
    ],
  },
  {
    title: "Company",
    links: [
      { l: "About", h: "#about", t: "footer-link" },
      { l: "Work", h: "#portfolio", t: "footer-link" },
      { l: "SF Product Range", h: "#industries", t: "footer-link" },
      { l: "Engagement Models", h: "#engagement", t: "footer-link" },
      { l: "Contact", h: "#contact", t: "footer-link" },
    ],
  },
  {
    title: "Resources",
    links: [
      { l: "Insights", h: "#", t: "footer-link" },
      { l: "Case Studies", h: "#portfolio", t: "footer-link" },
      { l: "Careers", h: "#", t: "footer-link" },
      { l: "Press", h: "#", t: "footer-link" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-[#0070F2]/10 bg-[#0A2540]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070F2] to-[#F0AB00] rounded-md rotate-45" />
                <span className="relative font-display font-bold text-white text-lg z-10">
                  L
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-white tracking-tight text-lg">
                  LUKS
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#94A3B8] uppercase">
                  Solutions
                </span>
              </div>
            </a>
            <p className="text-[#94A3B8] leading-relaxed mt-6 max-w-md">
              India-based SAP, SuccessFactors and HCM Cloud consultancy —
              delivering Configuration, Integration and Functional services to
              global SIs and enterprises, plus our own Operations Cloud product.
            </p>

            <div className="flex items-center gap-3 mt-8">
              {[Linkedin, Twitter, Github, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#0070F2] hover:bg-[#0070F2]/15 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-xs tracking-[0.25em] uppercase text-[#F0AB00] font-semibold">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((lnk) => (
                    <li key={lnk.l}>
                      <a
                        href={lnk.h}
                        data-testid={lnk.t}
                        className="text-[#CBD5E1] hover:text-white text-sm transition-colors"
                      >
                        {lnk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-20 pt-10 border-t border-white/10 overflow-hidden">
          <div className="font-display font-bold text-[18vw] sm:text-[14vw] lg:text-[180px] leading-none tracking-tighter bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent select-none">
            LUKS
          </div>
        </div>

        {/* Legal */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>© {new Date().getFullYear()} Luks Solutions. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" data-testid="footer-link" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" data-testid="footer-link" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" data-testid="footer-link" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
