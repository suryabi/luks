import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const ITEMS = [
  {
    q: "Luks Solutions has been our reliable offshore partner for SuccessFactors delivery — disciplined, certification-driven and unfailingly transparent on governance.",
    name: "Project Director",
    role: "Global SuccessFactors SI Partner",
  },
  {
    q: "Their Business Use Case methodology turned ambiguous HR requirements into clean configuration workbooks. Programme tracking has never been this calm.",
    name: "HCM Transformation Lead",
    role: "FTSE 100 Retailer",
  },
  {
    q: "From SF Employee Central to RMK, Comp and CPI integrations — one team, one accountable PM, and consultants who genuinely know the product.",
    name: "VP Human Capital Systems",
    role: "European Financial Services Group",
  },
];

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setIdx((i) => (i + 1) % ITEMS.length);
  const item = ITEMS[idx];

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 radial-glow opacity-50" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-red-500 font-semibold">
          Voices of our clients
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tighter leading-[1.05]">
          Trusted by teams that <span className="gradient-text">ship for a living</span>.
        </h2>

        <div
          data-testid="testimonial-carousel"
          className="relative mt-14 p-8 sm:p-14 rounded-3xl border border-red-500/15 bg-[#1F0B0E]/70 backdrop-blur-sm"
        >
          <Quote className="absolute top-6 left-6 w-10 h-10 text-red-500/30" />

          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-orange-400 text-orange-400"
              />
            ))}
          </div>

          <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
            “{item.q}”
          </p>

          <div className="mt-10">
            <div className="font-display font-semibold text-white text-lg">
              {item.name}
            </div>
            <div className="text-sm text-[#A38F91] mt-1">{item.role}</div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              data-testid="testimonial-prev-btn"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-red-500/30 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-red-500" : "w-2 bg-red-500/30"
                  }`}
                />
              ))}
            </div>
            <button
              data-testid="testimonial-next-btn"
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-red-500/30 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
