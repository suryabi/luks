import React from "react";

/**
 * LuksLogo — geometric "L" mark + wordmark
 * Variants:
 *   - "dark"  : for use on light backgrounds (default)
 *   - "light" : for use on dark navy backgrounds (footer)
 */
export const LuksLogo = ({ variant = "dark", showWordmark = true, className = "" }) => {
  const isDark = variant === "dark";
  const wordColor = isDark ? "text-[#1B2A41]" : "text-white";
  const subColor = isDark ? "text-[#64748B]" : "text-[#94A3B8]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LuksMark className="w-9 h-9" />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-semibold tracking-tight text-base ${wordColor}`}>
            LUKS
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase ${subColor}`}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
};

/* Just the mark (no text) — useful for favicons / compact spots */
export const LuksMark = ({ className = "w-9 h-9" }) => (
  <svg
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Luks Solutions"
  >
    <defs>
      <linearGradient id="luksBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0070F2" />
        <stop offset="100%" stopColor="#1A5CB7" />
      </linearGradient>
    </defs>
    {/* Soft outer container */}
    <rect x="0" y="0" width="36" height="36" rx="9" fill="url(#luksBlue)" />
    {/* Geometric "L" formed by two clean blocks */}
    <rect x="9" y="7" width="6" height="18" rx="1.5" fill="#FFFFFF" />
    <rect x="9" y="22" width="20" height="6" rx="1.5" fill="#FFFFFF" />
    {/* Accent dot — top-right (visual lift, brand recognition) */}
    <circle cx="26" cy="10" r="2.4" fill="#FFFFFF" opacity="0.95" />
  </svg>
);

export default LuksLogo;
