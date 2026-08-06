"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { IconMessageCircle, IconArrowDown } from "@tabler/icons-react";

import { SITE } from "@/lib/site";

export function ContactHero() {
    return (
        <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#0B4A8B] to-[#2F80ED]">
            {/* Background Shapes */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />
                <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-white/[0.03]" />
                <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] rounded-full bg-[#2F80ED]/10 blur-3xl" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            {/* Floating illustration */}
            <motion.div
                className="pointer-events-none absolute right-8 top-1/4 hidden lg:block"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="grid h-40 w-40 place-items-center rounded-3xl bg-white/10 backdrop-blur-sm">
                    <IconMessageCircle size={64} className="text-white/70" stroke={1.5} />
                </div>
            </motion.div>

            <div className="shell relative z-10 w-full py-24">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mb-8 flex items-center gap-2 text-sm text-white/50"
                    aria-label="Breadcrumb"
                >
                    <Link href="/" className="transition hover:text-white/80">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-white/80">Contact</span>
                </motion.nav>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                        Contact Us
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
                >
                    Let&apos;s Build{" "}
                    <span className="bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
                        Business Together
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
                >
                    We are always ready for wholesale, retail and bulk inquiries.
                    Reach out and let&apos;s discuss how we can serve your business.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="mt-8 flex flex-wrap gap-4"
                >
                    <a
                        href={SITE.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-base btn-whatsapp"
                    >
                        <img src="/whatsapp.png" alt="WhatsApp" className="h-5 w-5 object-contain shrink-0" />
                        WhatsApp Us
                    </a>
                    <a href={SITE.mailtoHref} className="btn-base btn-outline-light">
                        Send Email
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16"
                >
                    <a href="#contact-info" className="inline-flex flex-col items-center gap-2 text-white/40 transition hover:text-white/70">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <IconArrowDown size={18} />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
