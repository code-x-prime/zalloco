"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowRight,
} from "@tabler/icons-react";

/* ────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────── */

const HERO_SLIDES = [
  { src: "/hero-1.jpg", alt: "Container ship at golden sunset — Zalloco Industries global import export" },
  { src: "/hero-2.jpg", alt: "Shipping container port terminal with gantry cranes — Zalloco Industries port logistics" },
  { src: "/hero-3.jpg", alt: "Modern warehouse interior with organized shelving — Zalloco Industries distribution" },
  { src: "/hero-4.jpg", alt: "Freight train loaded with shipping containers — Zalloco Industries cargo transport" },
  { src: "/hero-5.jpg", alt: "Cargo airplane being loaded at airport terminal — Zalloco Industries air freight" },
  { src: "/hero-6.jpg", alt: "Wholesale distribution center aerial view — Zalloco Industries logistics hub" },
] as const;



const FEATURES = [
  { svg: "/icons/quality-products.svg", label: "100% Quality Products" },
  // { svg: "/icons/quality-assured.svg", label: "Quality Assured" },
  { svg: "/icons/pan-india-delivery.svg", label: "Pan India Delivery" },
  { svg: "/icons/bulk-order-support.svg", label: "Bulk Order Support" },
] as const;

const AUTOPLAY_MS = 6000;
const THUMB_COUNT = 4;

/* ────────────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────────────── */

export function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
  };

  const handleGoTo = (i: number) => {
    goTo(i);
    restartAutoplay();
  };
  const handleNext = () => {
    next();
    restartAutoplay();
  };
  const handlePrev = () => {
    prev();
    restartAutoplay();
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden"
      aria-label="Zalloco Industries hero"
    >
      {/* ── Background Carousel ───────────────────────────── */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-[oklch(0.14_0.06_260)]">
        <AnimatePresence initial={false}>
          <motion.div
            key={HERO_SLIDES[index].src}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.1, ease: "easeInOut" },
              scale: { duration: AUTOPLAY_MS / 1000 + 1.1, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[index].src}
              alt={HERO_SLIDES[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Gradient Overlays ──────────────────────────────── */}
      {/* Left-to-right readability gradient — kept tight to the text column so the image stays visible on the right/bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[oklch(0.14_0.07_258/0.95)] via-[oklch(0.2_0.1_256/0.6)] to-[oklch(0.28_0.12_254/0.22)]"
      />
      {/* Bottom fade so the stats bar stays legible without washing out the whole photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-19 bg-gradient-to-t from-[oklch(0.1_0.04_260/0.75)] via-[oklch(0.1_0.04_260/0.1)] to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-18 bg-[oklch(0.35_0.16_255/0.1)] mix-blend-overlay"
      />

      {/* ── Noise texture ─────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-17 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Floating circles ──────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 -z-16 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/[0.04]"
            style={{
              width: 50 + i * 30,
              height: 50 + i * 30,
              left: `${8 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -15 - i * 3, 0], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* ── Nav Arrows ─────────────────────────────────────── */}
      <motion.button
        onClick={handlePrev}
        aria-label="Previous slide"
        whileTap={{ scale: 0.92 }}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/[0.14] bg-white/[0.09] text-white/85 shadow-[0_4px_20px_oklch(0_0_0/0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/[0.18] hover:scale-110 hover:border-white/25 hover:shadow-[0_0_28px_oklch(0.5_0.18_255/0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-11 sm:w-11 md:left-6"
      >
        <IconChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.button>
      <motion.button
        onClick={handleNext}
        aria-label="Next slide"
        whileTap={{ scale: 0.92 }}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/[0.14] bg-white/[0.09] text-white/85 shadow-[0_4px_20px_oklch(0_0_0/0.25)] backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/[0.18] hover:scale-110 hover:border-white/25 hover:shadow-[0_0_28px_oklch(0.5_0.18_255/0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-11 sm:w-11 md:right-6"
      >
        <IconChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.button>

      {/* ── Main Content Grid ──────────────────────────────── */}
      <div className="shell relative z-10 flex h-full items-center pt-14 pb-32 sm:pt-16 sm:pb-28 lg:pt-0 lg:pb-16">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[55fr_45fr] lg:gap-6 xl:gap-10">
          {/* LEFT: Text */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-white/85 backdrop-blur-md sm:px-3.5 sm:text-[11px]">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-5" /></svg>
                Proudly from North East India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-white/85 backdrop-blur-md sm:px-3.5 sm:text-[11px]">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                Direct Farm Sourcing
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.65rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
            >
              Your Trusted Partner for
              <br />
              <span className="text-gradient">Wholesale &amp; Bulk</span> Supply
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-md text-[clamp(0.8rem,1.4vw,0.85rem)] leading-relaxed text-white/60"
            >
              Zalloco Industries supplies premium quality products across India.
              We serve wholesalers, retailers, distributors and businesses with
              reliable sourcing, competitive pricing and timely delivery.
            </motion.p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-0 sm:gap-y-0"
            >
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.08 }}
                  className={`flex items-center gap-2.5 px-4 py-1 sm:px-5 ${i < FEATURES.length - 1 ? "sm:border-r sm:border-white/[0.12]" : ""}`}
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center ">
                    <img src={feat.svg} alt="" className="h-[22px] w-[22px] sm:h-10 sm:w-10 brightness-0 invert" />
                  </div>
                  <span className="whitespace-nowrap text-xs font-medium text-white/75 sm:text-[13px]">{feat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#products"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.45_0.16_255)] to-[oklch(0.55_0.19_258)] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_6px_24px_oklch(0.45_0.16_255/0.4)] transition-all duration-300 hover:shadow-[0_10px_36px_oklch(0.45_0.16_255/0.6)] hover:-translate-y-0.5 active:scale-[0.97] sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Explore Products</span>
                <span className="relative z-10 grid h-5 w-5 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-6 sm:w-6">
                  <IconArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.07] px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.25] sm:px-6 sm:py-3 sm:text-sm"
              >
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
                Request Bulk Quote
              </a>
            </motion.div>


          </div>


        </div>
      </div>

      {/* ── Progress Dots ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-20 lg:bottom-24"
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleGoTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-7 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
      </motion.div>

      {/* ── Scroll Indicator (desktop only) ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-20 left-6 z-20 hidden flex-col items-center gap-1.5 lg:bottom-24 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-white/20 p-1"
        >
          <motion.div
            animate={{ height: [4, 8, 4], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto w-0.5 rounded-full bg-white/50"
          />
        </motion.div>
      </motion.div>

      {/* ── Bottom Cluster: Thumbnails + Stats Bar, flush together ── */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* Thumbnails — sit right on top of the stats bar */}
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="flex justify-end gap-1.5 pb-2 sm:gap-2 sm:pb-3"
          >
            {HERO_SLIDES.slice(0, THUMB_COUNT).map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => handleGoTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`group relative h-10 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300 sm:h-14 sm:w-20 sm:rounded-lg lg:h-[72px] lg:w-[104px] ${index === i
                  ? "border-white shadow-[0_0_20px_oklch(0.45_0.16_255/0.5)] scale-105"
                  : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/40"
                  }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="104px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}