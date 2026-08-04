"use client";

import { motion } from "motion/react";
import {
    IconTarget,
    IconEye,
    IconHeartHandshake,
    IconCertificate,
    IconArrowUpRight,
    IconTruck,
    IconBuildingWarehouse,
} from "@tabler/icons-react";
import { SITE } from "@/lib/site";

const PILLARS = [
    {
        icon: IconTarget,
        title: "Our Mission",
        body: "To make quality wholesale supply predictable — right grade, right quantity, right time, at a price that protects our partner's margin.",
    },
    {
        icon: IconEye,
        title: "Our Vision",
        body: "To become India's most dependable multi-category distribution house, connecting verified manufacturers with growing businesses nationwide.",
    },
    {
        icon: IconHeartHandshake,
        title: "Core Values",
        body: "Transparent pricing, honest weights, long-term relationships and complete accountability on every consignment we dispatch.",
    },
    {
        icon: IconCertificate,
        title: "Quality Assurance",
        body: "Every lot is inspected for grade, moisture, packing integrity and batch traceability before it leaves our warehouse.",
    },
];


const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0 },
};

export function About() {
    return (
        <section id="about" className="py-8 md:py-16 overflow-hidden bg-surface">
            <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                {/* ── LEFT: Illustration — unchanged ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto w-full max-w-[560px]"
                >
                    <div className="absolute inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-accent/15 via-primary/10 to-transparent blur-2xl" />
                    <div className="absolute inset-x-10 bottom-8 -z-10 h-40 rounded-[50%] bg-primary/10 blur-3xl" />

                    <img
                        src="/hero-3d.png"
                        alt="3D illustration of container ship, cargo containers and wholesale grocery cartons"
                        width={1200}
                        height={1200}
                        className="float-slow w-full drop-shadow-[0_40px_60px_rgba(11,74,139,0.18)]"
                    />

                    <div className="float-medium absolute -left-2 top-12 rounded-3xl p-4 glass-card sm:-left-6">
                        <div className="flex items-center gap-3">
                            <span className="icon-tile h-10 w-10">
                                <IconTruck className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Dispatch in 48 hrs</p>
                                <p className="text-xs text-muted-foreground">Verified bulk orders</p>
                            </div>
                        </div>
                    </div>

                    <div className="float-slow absolute -right-2 bottom-20 rounded-3xl p-4 glass-card sm:-right-6">
                        <p className="text-2xl font-bold tracking-[-0.03em] text-primary">500+</p>
                        <p className="text-xs font-medium text-muted-foreground">SKUs in active supply</p>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 glass-card whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                            <p className="text-xs font-semibold text-foreground">
                                Serving {SITE.short} clients in 22 states
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: Copy + pillars ── */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <motion.span
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                        >
                            <IconBuildingWarehouse className="h-3.5 w-3.5" />
                            About Us
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]"
                        >
                            About <span className="text-gradient">Zalloco Industries</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-5 max-w-xl border-l-2 border-primary/30 pl-4 text-base leading-relaxed text-foreground/80"
                        >
                            Zalloco Industries Private Limited is an Indian import, export and wholesale
                            distribution company serving retail chains, kirana distributors, HoReCa buyers and
                            institutional purchasers.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
                        >
                            We work directly with mills, processors and manufacturers, which lets us hold
                            competitive bulk rates without compromising on grade. From staple grains and spices to
                            personal care, household and industrial supplies, our team manages sourcing, quality
                            inspection, packing and last-mile logistics under one accountable roof.
                        </motion.p>

                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                        className="mt-10 grid gap-5 sm:grid-cols-2"
                    >
                        {PILLARS.map((p) => (
                            <motion.div
                                key={p.title}
                                variants={{
                                    hidden: { opacity: 0, y: 32, scale: 0.94 },
                                    show: { opacity: 1, y: 0, scale: 1 },
                                }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4 }}
                                className="card-surface group relative h-full overflow-hidden bg-background p-6"
                            >
                                <div
                                    aria-hidden
                                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                <div className="relative flex items-start justify-between gap-3">
                                    <span className="icon-tile h-11 w-11">
                                        <p.icon className="h-5 w-5" />
                                    </span>
                                    <IconArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </div>
                                <h3 className="relative mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">
                                    {p.title}
                                </h3>
                                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}