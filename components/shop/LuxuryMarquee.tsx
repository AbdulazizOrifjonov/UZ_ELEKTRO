"use client";

import React from "react";

const BRANDS = [
  "DEWALT",
  "BOSCH",
  "MAKITA",
  "TOTAL",
  "INGCO",
  "CROWN",
  "RESANTA",
  "HILTI",
  "MILWAUKEE",
  "EDON",
  "HILDA",
  "PIT",
  "DWT",
];

export function LuxuryMarquee() {
  return (
    <section className="w-full bg-navy-950 py-3 border-y border-[#FF5B00]/30 overflow-hidden select-none shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        {BRANDS.map((brand, idx) => (
          <div key={`b1-${idx}`} className="flex items-center gap-5 mx-5 shrink-0">
            <span className="text-white/90 font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase font-mono hover:text-[#FF5B00] transition-colors">
              {brand}
            </span>
            <span className="text-[#FF5B00] text-xs select-none">⚡</span>
          </div>
        ))}
        {BRANDS.map((brand, idx) => (
          <div key={`b2-${idx}`} className="flex items-center gap-5 mx-5 shrink-0">
            <span className="text-white/90 font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase font-mono hover:text-[#FF5B00] transition-colors">
              {brand}
            </span>
            <span className="text-[#FF5B00] text-xs select-none">⚡</span>
          </div>
        ))}
      </div>
    </section>
  );
}
