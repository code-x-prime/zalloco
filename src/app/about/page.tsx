"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    IconCheck,
    IconShieldCheck,
    IconTruck,
    IconTarget,
    IconEye,
    IconHeartHandshake,
    IconCertificate,
    IconBrain,
    IconHandStop,
    IconRocket,
    IconUsers,
    IconChefHat,
    IconShoppingCart,
    IconBuildingStore,
    IconBuilding,
    IconStethoscope,
    IconBriefcase,
    IconReceipt,
    IconMessageCircle,
    IconPhone,
} from "@tabler/icons-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  Framer Motion variants                                            */
/* ------------------------------------------------------------------ */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const CORE_VALUES = [
    { icon: IconShieldCheck, title: "Integrity", body: "Transparent dealings, honest weights and ethical business practices at every level." },
    { icon: IconCertificate, title: "Quality", body: "Batch-wise inspection on grade, moisture and packing before any consignment leaves." },
    { icon: IconBrain, title: "Innovation", body: "Adopting modern logistics, digital invoicing and data-driven inventory management." },
    { icon: IconHeartHandshake, title: "Customer first", body: "Every process is designed around our partner's convenience, timelines and margin." },
    { icon: IconRocket, title: "Commitment", body: "Dispatch within 48 hours, dedicated account managers and zero compromise on timelines." },
    { icon: IconHandStop, title: "Long-term partnership", body: "We invest in relationships, not one-off transactions — consistent pricing and reliability." },
];

const INDUSTRIES = [
    { icon: IconChefHat, name: "Restaurants" },
    { icon: IconShoppingCart, name: "Retail stores" },
    { icon: IconTruck, name: "Distributors" },
    { icon: IconBuildingStore, name: "Supermarkets" },
    { icon: IconBuilding, name: "Hotels" },
    { icon: IconStethoscope, name: "Hospitals" },
    { icon: IconBriefcase, name: "Corporate offices" },
    { icon: IconReceipt, name: "Wholesalers" },
];

const PROCESS_STEPS = [
    { title: "Receive inquiry", body: "Share your requirement list with grades, pack sizes and volumes." },
    { title: "Product selection", body: "We curate the best options from 500+ SKUs across 15 categories." },
    { title: "Quotation", body: "GST-inclusive bulk quote with MOQ, packing detail and delivery timeline." },
    { title: "Delivery", body: "Dispatch within 48 hours with LR tracking and account manager support." },
];

/* ------------------------------------------------------------------ */
/*  Counter Hook & StatCounter                                        */
/* ------------------------------------------------------------------ */

function useCounter(target: number, duration = 1600) {
    const [display, setDisplay] = useState(0);
    const [started, setStarted] = useState(false);

    const start = () => {
        if (started) return;
        setStarted(true);
        const t0 = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setDisplay(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    return { display, start };
}

function StatCounter({
    index,
    value,
    suffix,
    label,
    note,
}: {
    index: number;
    value?: number;
    suffix?: string;
    label: string;
    note: string;
}) {
    const { display, start } = useCounter(value ?? 0);

    return (
        <motion.div
            onViewportEnter={start}
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="border border-white/15 p-6 sm:p-8"
        >
            <span className="font-mono text-[11px] tracking-[0.15em] text-white/40">
                {String(index).padStart(2, "0")} / 04
            </span>
            <p className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                {value !== undefined ? (
                    <>
                        {display}
                        {suffix}
                    </>
                ) : (
                    "Pan India"
                )}
            </p>
            <p className="mt-2 text-sm font-semibold text-white/90">{label}</p>
            <p className="mt-1 text-xs text-white/50">{note}</p>
        </motion.div>
    );
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="PG.01 / ABOUT"
                title="Built on trust,"
                highlight="not promises."
                description="Zalloco Industries Private Limited serves wholesalers, retailers, distributors and institutional buyers with reliable supply chains and competitive pricing, across every category we carry."
            />

            {/* ───────── COMPANY STORY ───────── */}
            <section className="bg-surface py-12 md:py-16">
                <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <div className="relative">
                            <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-[2rem] border border-border lg:block" />
                            <img
                                src="/about-warehouse.jpg"
                                alt="Zalloco Industries modern warehouse facility"
                                width={1200}
                                height={1408}
                                loading="lazy"
                                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                            />
                            <div className="absolute -bottom-8 -right-4 w-56 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-card)] sm:right-6 lg:-right-10">
                                <p className="text-3xl font-bold tracking-[-0.03em] text-primary">12,000+</p>
                                <p className="mt-1 text-sm text-muted-foreground">sq. ft. managed warehousing space</p>
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                ABT.01 / WHO WE ARE
                            </span>
                            <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                India&apos;s trusted <span className="text-gradient">wholesale partner</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                            className="mt-5 text-base leading-relaxed text-muted-foreground"
                        >
                            Zalloco Industries Private Limited is an Indian import, export and wholesale distribution
                            company serving retail chains, kirana distributors, HoReCa buyers and institutional
                            purchasers. We work directly with mills, processors and manufacturers, which lets us hold
                            competitive bulk rates without compromising on grade.
                        </motion.p>

                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                            className="mt-4 text-base leading-relaxed text-muted-foreground"
                        >
                            From staple grains and spices to personal care, household and industrial supplies, our
                            team manages sourcing, quality inspection, packing and last-mile logistics under one
                            accountable roof — as an importer, exporter, manufacturer, distributor and wholesale
                            supplier, all in one place.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 grid gap-5 sm:grid-cols-3"
                        >
                            {[
                                { icon: IconCertificate, value: "8+", label: "Years experience" },
                                { icon: IconUsers, value: "500+", label: "Happy clients" },
                                { icon: IconTarget, value: "15+", label: "Categories" },
                            ].map((item, i) => (
                                <motion.div key={item.label} variants={fadeUp} custom={i + 3} className="card-surface group bg-background p-5 text-center">
                                    <span className="icon-tile mx-auto h-11 w-11">
                                        <item.icon className="h-5 w-5" />
                                    </span>
                                    <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-primary">{item.value}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ───────── MISSION & VISION ───────── */}
            <section className="py-12 md:py-16">
                <div className="shell">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.span variants={fadeUp} custom={0} className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            ABT.02 / PURPOSE AND DIRECTION
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our mission <span className="text-gradient">and vision</span>
                        </motion.h2>
                    </motion.div>

                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {[
                            {
                                icon: IconTarget,
                                title: "Our mission",
                                body: "To make quality wholesale supply predictable — right grade, right quantity, right time, at a price that protects our partner's margin. We bridge the gap between manufacturers and businesses with a supply chain that is transparent, efficient and dependable.",
                            },
                            {
                                icon: IconEye,
                                title: "Our vision",
                                body: "To become India's most dependable multi-category distribution house, connecting verified manufacturers with growing businesses nationwide. We envision a future where every business, regardless of size, has access to reliable wholesale supply.",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                custom={i}
                                className="card-surface group relative overflow-hidden bg-background p-8 sm:p-10"
                            >
                                <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="flex items-start justify-between gap-3">
                                    <span className="icon-tile h-16 w-16 transition-transform duration-500 group-hover:-rotate-6">
                                        <card.icon className="h-7 w-7" />
                                    </span>
                                    <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                        {String(i + 1).padStart(2, "0")} / 02
                                    </span>
                                </div>
                                <h3 className="mt-7 text-2xl font-bold tracking-[-0.02em] text-foreground">{card.title}</h3>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{card.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── CORE VALUES ───────── */}
            <section className="bg-surface py-12 md:py-16">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            ABT.03 / WHAT DRIVES US
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our core <span className="text-gradient">values</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Six principles that guide every decision, every dispatch and every relationship we build.
                        </motion.p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CORE_VALUES.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                variants={fadeUp}
                                custom={i}
                                className="card-surface group relative flex h-full flex-col overflow-hidden bg-background p-6 sm:p-8"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="flex items-start justify-between gap-3">
                                    <span className="icon-tile h-12 w-12 shrink-0 transition-transform duration-500 group-hover:-rotate-6 sm:h-14 sm:w-14">
                                        <v.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </span>
                                    <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                        CV.{String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-foreground sm:mt-7 sm:text-xl">{v.title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── WHY PARTNER WITH US ───────── */}
            <section className="py-12 md:py-16">
                <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="relative"
                    >
                        <img
                            src="/about-warehouse.jpg"
                            alt="Zalloco Industries distribution centre"
                            width={1200}
                            height={1408}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                        />
                        <div className="absolute -bottom-6 -right-4 w-48 rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-card)] sm:right-6 lg:-right-8">
                            <p className="text-3xl font-bold tracking-[-0.03em] text-primary">22+</p>
                            <p className="mt-1 text-sm text-muted-foreground">states covered pan-India</p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                ABT.04 / WHY PARTNER WITH US
                            </span>
                            <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                Built for businesses that <span className="text-gradient">cannot afford surprises</span>
                            </h2>
                        </motion.div>

                        <div className="mt-8 divide-y divide-border border-y border-border">
                            {[
                                "Reliable supply chain",
                                "Bulk order support",
                                "Competitive pricing",
                                "Fast 48-hour dispatch",
                                "Trusted distribution network",
                                "Premium quality products",
                            ].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i + 1}
                                    className="flex items-center gap-4 py-3.5"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-success/10 text-success">
                                        <IconCheck className="h-4 w-4" />
                                    </span>
                                    <span className="text-base font-medium text-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── COMPANY STATS ───────── */}
            <section className="relative overflow-hidden bg-[#0B4A8B] py-16 sm:py-20">
                <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-20" />

                <div className="shell relative">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="font-mono text-[11px] font-medium tracking-[0.15em] text-white/60">
                            ABT.05 / OUR NUMBERS
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                            Scale you can rely on
                        </motion.h2>
                    </motion.div>

                    <div className="mt-14 grid gap-px overflow-hidden border border-white/15 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCounter index={1} value={15} suffix="+" label="Product categories" note="Grocery to industrial" />
                        <StatCounter index={2} value={500} suffix="+" label="Products" note="Active wholesale SKUs" />
                        <StatCounter index={3} value={100} suffix="+" label="Business clients" note="Retail and institutional" />
                        <StatCounter index={4} label="Delivery" note="22 states covered" />
                    </div>
                </div>
            </section>

            {/* ───────── INDUSTRIES WE SERVE ───────── */}
            <section className="py-12 md:py-16">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            ABT.06 / WHO WE SERVE
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Industries we <span className="text-gradient">serve</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
                            From neighbourhood kirana stores to large institutional buyers — our supply chain scales to every business.
                        </motion.p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {INDUSTRIES.map((ind, i) => (
                            <motion.div
                                key={ind.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                variants={fadeUp}
                                custom={i}
                                className="card-surface group flex items-center gap-4 bg-background p-5"
                            >
                                <span className="icon-tile h-12 w-12 shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <ind.icon className="h-5 w-5" />
                                </span>
                                <div className="min-w-0">
                                    <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">{ind.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── OUR PROCESS ───────── */}
            <section id="our-process" className="bg-surface py-12 md:py-16">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            ABT.07 / HOW IT WORKS
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our <span className="text-gradient">process</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Four clear steps from enquiry to delivered consignment — no hidden handoffs.
                        </motion.p>
                    </motion.div>

                    <div className="mx-auto mt-16 max-w-2xl">
                        {PROCESS_STEPS.map((step, i) => {
                            const isLast = i === PROCESS_STEPS.length - 1;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="relative flex gap-5 sm:gap-6"
                                >
                                    <div className="relative flex shrink-0 flex-col items-center">
                                        <span className="icon-tile z-10 grid h-12 w-12 shrink-0 place-items-center font-mono text-sm font-semibold sm:h-14 sm:w-14">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {!isLast && (
                                            <span
                                                aria-hidden
                                                className="my-2 w-px flex-1 bg-linear-to-b from-accent/60 via-primary/25 to-transparent"
                                            />
                                        )}
                                    </div>

                                    <div className={`card-surface min-w-0 flex-1 bg-background p-5 sm:p-6 ${isLast ? "" : "mb-8"}`}>
                                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                            STEP {String(i + 1).padStart(2, "0")} / {String(PROCESS_STEPS.length).padStart(2, "0")}
                                        </span>
                                        <h3 className="mt-1.5 text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ───────── CTA ───────── */}
            <section id="contact" className="py-12 md:py-16">
                <div className="shell">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[var(--shadow-card)] sm:grid-cols-[1.2fr_1fr]"
                    >
                        <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12 lg:py-16">
                            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" />
                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                ABT.08 / GET IN TOUCH
                            </span>
                            <h2 className="mt-4 max-w-md text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                                Let&apos;s grow your business,
                                <br />
                                <span className="text-gradient">together.</span>
                            </h2>
                            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                                We&apos;re always ready to fulfill wholesale and retail requirements across India.
                                Send your requirement list and get a competitive bulk quote within one working day.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-3 border-t border-dashed border-border bg-surface px-8 py-12 sm:border-l sm:border-t-0 sm:px-12">
                            <a href={`mailto:${SITE.email}`} className="btn-base btn-primary w-full !py-4">
                                <IconMessageCircle className="h-4 w-4" />
                                Contact us
                            </a>
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-base btn-whatsapp w-full !py-4"
                            >
                                <IconPhone className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <FAQ />
        </>
    );
}