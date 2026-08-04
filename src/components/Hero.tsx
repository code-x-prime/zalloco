"use client";
import { motion } from "motion/react";
import { IconArrowRight, IconShieldCheck, IconTruck, IconSparkles, IconPackage } from "@tabler/icons-react";
import { SITE } from "@/lib/site";

export function Hero() {
    return (
        <section id="home" className="relative overflow-hidden pt-28 lg:pt-36">
            {/* background decoration */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 grid-lines opacity-60" />
                <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute -right-32 top-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[140px]" />
                <div className="absolute right-1/3 top-0 h-72 w-72 rounded-full border border-border/70" />
            </div>

            <div className="shell grid items-center gap-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-32">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.08em] text-primary shadow-[var(--shadow-soft)]"
                    >
                        <IconSparkles className="h-3.5 w-3.5 text-accent" />
                        India&apos;s Trusted Wholesale Supplier
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-7 text-[2.6rem] font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[4.2rem]"
                    >
                        Import <span className="text-muted-foreground/40">•</span> Export
                        <br />
                        <span className="text-gradient">Wholesale</span> Distribution
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                        Zalloco Industries Private Limited supplies retailers, distributors, hotels and
                        institutional buyers with quality-checked grocery, FMCG and household goods — sourced
                        directly, packed to specification and delivered in bulk across India.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a href="#products" className="btn-base btn-primary !px-7 !py-4">
                            Explore Products
                            <IconArrowRight className="h-4 w-4" />
                        </a>
                        <a href="#contact" className="btn-base btn-ghost !px-7 !py-4">
                            Contact Us
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8"
                    >
                        {[
                            { icon: IconShieldCheck, label: "FSSAI compliant sourcing" },
                            { icon: IconTruck, label: "Pan-India dispatch" },
                            { icon: IconPackage, label: "Custom bulk packing" },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-2.5">
                                <item.icon className="h-5 w-5 shrink-0 text-accent" />
                                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto w-full max-w-[540px]"
                >
                    <div className="absolute inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-accent/15 via-primary/10 to-transparent blur-2xl" />
                    <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-[2rem] border border-border lg:block" />

                    <img
                        src="/about-warehouse.jpg"
                        alt="Zalloco Industries wholesale warehouse and distribution facility"
                        width={1200}
                        height={1408}
                        className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="float-medium absolute -left-4 top-12 rounded-3xl p-4 glass-card sm:-left-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="icon-tile h-10 w-10">
                                <IconTruck className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Pan-India Network</p>
                                <p className="text-xs text-muted-foreground">Managed Warehousing</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="float-slow absolute -right-4 bottom-20 rounded-3xl p-5 glass-card sm:-right-6"
                    >
                        <p className="text-2xl font-bold tracking-[-0.03em] text-primary">12,000+</p>
                        <p className="text-xs font-medium text-muted-foreground">sq. ft. warehouse space</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
