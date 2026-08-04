"use client";

import { motion } from "motion/react";

const STATS = [
  { value: "5+", label: "Years of Experience", svg: "/icons/years-experience.svg" },
  { value: "500+", label: "Products", svg: "/icons/products.svg" },
  { value: "100+", label: "Business Partners", svg: "/icons/business-partners.svg" },
  { value: "Pan India", label: "Distribution", svg: "/icons/distribution.svg" },
  { value: "24/7", label: "Customer Support", svg: "/icons/customer-support.svg" },
] as const;

export function BottomStats() {
  return (
    <section className="relative w-full bg-white py-6 sm:py-8">
      <div className="shell">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-3 sm:gap-4"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.45_0.16_255)] to-[oklch(0.55_0.19_258)] shadow-[0_4px_16px_oklch(0.45_0.16_255/0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_24px_oklch(0.45_0.16_255/0.5)]">
                <img src={stat.svg} alt="" className="h-8 w-8 brightness-0 invert" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-tight tracking-[-0.02em] text-[oklch(0.21_0.028_264)] sm:text-xl">
                  {stat.value}
                </p>
                <p className="text-[11px] font-medium leading-tight text-[oklch(0.55_0.021_264)] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
