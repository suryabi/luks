import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown, Cloud } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "/#services", testid: "nav-link-services" },
  { label: "Industries", href: "/#industries", testid: "nav-link-industries" },
  { label: "Process", href: "/#process", testid: "nav-link-process" },
  { label: "Work", href: "/#portfolio", testid: "nav-link-work" },
  { label: "About", href: "/#about", testid: "nav-link-about" },
];

const PRODUCTS = [
  {
    name: "Sales & Operations Cloud",
    href: "/products/operations-cloud",
    desc: "One platform to run sales, marketing, distribution, production & accounting.",
    Icon: Cloud,
    testid: "nav-product-operations-cloud",
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always glass after scroll OR when not on landing page
  const isLanding = location.pathname === "/";
  const showGlass = scrolled || !isLanding;

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      data-testid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showGlass
          ? "bg-[#150708]/85 backdrop-blur-xl border-b border-red-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" data-testid="header-logo" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-md rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
            <span className="relative font-display font-bold text-white text-lg z-10">L</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-white tracking-tight">LUKS</span>
            <span className="text-[10px] tracking-[0.25em] text-[#A38F91] uppercase">Solutions</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={scheduleClose}
          >
            <button
              data-testid="nav-link-products"
              onClick={() => setProductsOpen((v) => !v)}
              className="text-sm text-[#C9B7B9] hover:text-white transition-colors inline-flex items-center gap-1.5"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              data-testid="products-dropdown"
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[420px] ${
                productsOpen ? "block" : "hidden"
              }`}
              role="menu"
              onMouseEnter={openProducts}
              onMouseLeave={scheduleClose}
            >
              <div className="rounded-2xl border border-red-500/15 bg-[#1F0B0E]/95 backdrop-blur-xl p-3 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    data-testid={p.testid}
                    onClick={() => setProductsOpen(false)}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-red-500/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/25 to-orange-500/15 border border-red-500/25 flex items-center justify-center shrink-0">
                      <p.Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-display font-semibold text-white tracking-tight">
                          {p.name}
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#A38F91] group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="text-sm text-[#A38F91] mt-1 leading-snug">
                        {p.desc}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="mt-1 px-4 pb-1 pt-2 text-[10px] tracking-[0.25em] uppercase text-[#6f5b5d]">
                  More products coming soon
                </div>
              </div>
            </div>
          </div>

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
            href="/#contact"
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
          <div className="px-6 py-6 flex flex-col gap-1">
            <div className="text-[10px] tracking-[0.25em] uppercase text-red-500 font-semibold mb-2">
              Products
            </div>
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                onClick={() => setMobileOpen(false)}
                data-testid={`mobile-${p.testid}`}
                className="flex items-center gap-3 py-3 text-base text-white"
              >
                <p.Icon className="w-4 h-4 text-red-400" />
                {p.name}
              </Link>
            ))}
            <div className="h-px bg-red-500/10 my-3" />
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-base text-[#C9B7B9] hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium w-fit"
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
