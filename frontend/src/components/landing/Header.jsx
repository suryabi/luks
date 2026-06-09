import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services", testid: "nav-link-services" },
  { label: "Industries", href: "#industries", testid: "nav-link-industries" },
  { label: "Process", href: "#process", testid: "nav-link-process" },
  { label: "Work", href: "#portfolio", testid: "nav-link-work" },
  { label: "About", href: "#about", testid: "nav-link-about" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#150708]/85 backdrop-blur-xl border-b border-red-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" data-testid="header-logo" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-md rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
            <span className="relative font-display font-bold text-white text-lg z-10">L</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-white tracking-tight">LUKS</span>
            <span className="text-[10px] tracking-[0.25em] text-[#A38F91] uppercase">Solutions Ltd</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm text-[#C9B7B9] hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-gradient-to-r after:from-red-500 after:to-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-cta-contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium hover:shadow-[0_8px_30px_rgba(239,68,68,0.35)] hover:translate-y-[-1px] transition-all duration-300"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-red-500/10 bg-[#150708]/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#C9B7B9] hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium w-fit"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
