"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
    IconArrowRight,
    IconChevronDown,
    IconCheck,
    IconShieldCheck,
    IconTruck,
    IconPackage,
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
    { icon: IconHeartHandshake, title: "Customer First", body: "Every process is designed around our partner's convenience, timelines and margin." },
    { icon: IconRocket, title: "Commitment", body: "Dispatch within 48 hours, dedicated account managers and zero compromise on timelines." },
    { icon: IconHandStop, title: "Long Term Partnership", body: "We invest in relationships, not one-off transactions — consistent pricing and reliability." },
];

const INDUSTRIES = [
    { icon: IconChefHat, name: "Restaurants" },
    { icon: IconShoppingCart, name: "Retail Stores" },
    { icon: IconTruck, name: "Distributors" },
    { icon: IconBuildingStore, name: "Supermarkets" },
    { icon: IconBuilding, name: "Hotels" },
    { icon: IconStethoscope, name: "Hospitals" },
    { icon: IconBriefcase, name: "Corporate Offices" },
    { icon: IconReceipt, name: "Wholesalers" },
];

const PROCESS_STEPS = [
    { num: "01", title: "Receive Inquiry", body: "Share your requirement list with grades, pack sizes and volumes." },
    { num: "02", title: "Product Selection", body: "We curate the best options from 500+ SKUs across 15 categories." },
    { num: "03", title: "Quotation", body: "GST-inclusive bulk quote with MOQ, packing detail and delivery timeline." },
    { num: "04", title: "Delivery", body: "Dispatch within 48 hours with LR tracking and account manager support." },
];

const FAQS = [
    { q: "Who can place wholesale orders?", a: "Any registered business — retailers, distributors, kirana stores, HoReCa buyers, institutional caterers, exporters and corporate procurement teams can place wholesale orders with Zalloco Industries." },
    { q: "What is the minimum order quantity?", a: "MOQ varies by product category. For grocery staples it starts at 50 sacks, for spices at 25 kg, and for personal care at carton-level quantities. Contact us for category-specific MOQs." },
    { q: "Which locations do you deliver to?", a: "We deliver pan-India across 22 states through our network of vetted transport partners. Metro, tier-2 and tier-3 cities are all covered." },
    { q: "What payment methods are accepted?", a: "We accept NEFT/RTGS bank transfers, UPI, post-dated cheques and LC (letter of credit) for large recurring orders. Credit terms are available for verified business partners." },
    { q: "How can I request a quotation?", a: "You can email us at Zallocoindustrys@gmail.com, message on WhatsApp at +91 98765 43210, or use the contact form on our website. We revert within one working day." },
    { q: "How can I contact the sales team?", a: "Call us at +91 98765 43210, WhatsApp us, or email Zallocoindustrys@gmail.com. A dedicated account manager is assigned to every business client." },
];

/* ------------------------------------------------------------------ */
/*  Counter Hook                                                      */
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

function StatCounter({ value, suffix, label, note }: { value?: number; suffix?: string; label: string; note: string }) {
    const { display, start } = useCounter(value ?? 0);

    return (
        <motion.div
            onViewportEnter={start}
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm"
        >
            <p className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                {value !== undefined ? <>{display}{suffix}</> : "Pan India"}
            </p>
            <p className="mt-2 text-base font-semibold text-white/90">{label}</p>
            <p className="mt-1 text-sm text-white/60">{note}</p>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  Accordion Item                                                    */
/* ------------------------------------------------------------------ */

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-border">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
                {q}
                <IconChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */

export default function AboutPage() {
    return (
        <>
            {/* ───────── 1. PAGE HERO ───────── */}
            <section className="relative overflow-hidden bg-white pt-32 pb-0" style={{ minHeight: "65vh" }}>
                {/* BG decorations */}
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-accent/40 blur-[140px]" />
                    <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[120px]" />
                    <div className="absolute inset-0 grid-lines opacity-40" />
                </div>

                <div className="shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
                    <div>
                        {/* breadcrumb */}
                        <motion.nav
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 text-sm text-muted-foreground"
                        >
                            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-foreground font-medium">About Us</span>
                        </motion.nav>

                        <motion.span
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                        >
                            About Zalloco
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="mt-6 text-[2.4rem] font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem]"
                        >
                            Building Trust Through
                            <br />
                            <span className="text-gradient">Quality Wholesale</span> Distribution
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.18 }}
                            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                        >
                            Zalloco Industries Private Limited is committed to delivering premium quality products
                            across India. We serve wholesalers, retailers, distributors and businesses with reliable
                            supply chains and competitive pricing.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.26 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a href="#contact" className="btn-base btn-primary !px-7 !py-4">
                                Get in Touch
                                <IconArrowRight className="h-4 w-4" />
                            </a>
                            <a href="#our-process" className="btn-base btn-ghost !px-7 !py-4">
                                Our Process
                            </a>
                        </motion.div>
                    </div>

                    {/* right visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative mx-auto hidden w-full max-w-[520px] lg:block"
                    >
                        <div className="absolute inset-8 -z-10 rounded-[3rem] bg-linear-to-br from-accent/20 via-primary/10 to-transparent blur-2xl" />
                        <img
                            src="/hero-3d.png"
                            alt="Zalloco Industries global logistics and distribution"
                            width={1200}
                            height={1200}
                            className="relative w-full drop-shadow-[0_40px_60px_rgba(11,74,139,0.18)]"
                        />

                        {/* floating cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 top-12 rounded-2xl p-4 glass-card"
                        >
                            <div className="flex items-center gap-3">
                                <span className="icon-tile h-10 w-10"><IconShieldCheck className="h-5 w-5" /></span>
                                <p className="text-sm font-semibold text-foreground">Trusted Supplier</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -right-4 bottom-32 rounded-2xl p-4 glass-card"
                        >
                            <div className="flex items-center gap-3">
                                <span className="icon-tile h-10 w-10"><IconTruck className="h-5 w-5" /></span>
                                <p className="text-sm font-semibold text-foreground">Pan India Delivery</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 glass-card"
                        >
                            <div className="flex items-center gap-2">
                                <span className="icon-tile h-8 w-8"><IconPackage className="h-4 w-4" /></span>
                                <p className="text-xs font-semibold text-foreground">Bulk Orders Welcome</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 80L60 73.3C120 66.7 240 53.3 360 48.3C480 43.3 600 46.7 720 51.7C840 56.7 960 63.3 1080 63.3C1200 63.3 1320 56.7 1380 53.3L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="var(--color-surface)" />
                    </svg>
                </div>
            </section>

            {/* ───────── 2. COMPANY STORY ───────── */}
            <section className="section-pad bg-surface">
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
                            <div className="absolute -bottom-8 -right-4 w-56 rounded-3xl p-5 glass-card sm:right-6 lg:-right-10">
                                <p className="text-3xl font-bold tracking-[-0.03em] text-primary">12,000+</p>
                                <p className="mt-1 text-sm text-muted-foreground">sq. ft. managed warehousing space</p>
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Who We Are
                            </span>
                            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                India&apos;s Trusted <span className="text-gradient">Wholesale Partner</span>
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
                            accountable roof. We operate as an importer, exporter, manufacturer, distributor and
                            wholesale supplier — all under one roof.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 grid gap-5 sm:grid-cols-3"
                        >
                            {[
                                { icon: IconCertificate, value: "8+", label: "Years Experience" },
                                { icon: IconUsers, value: "500+", label: "Happy Clients" },
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

            {/* ───────── 3. MISSION & VISION ───────── */}
            <section className="section-pad">
                <div className="shell">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Purpose & Direction
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our Mission <span className="text-gradient">& Vision</span>
                        </motion.h2>
                    </motion.div>

                    <div className="mt-14 grid gap-8 lg:grid-cols-2">
                        {[
                            {
                                icon: IconTarget,
                                title: "Our Mission",
                                body: "To make quality wholesale supply predictable — right grade, right quantity, right time, at a price that protects our partner's margin. We bridge the gap between manufacturers and businesses with a supply chain that is transparent, efficient and dependable.",
                            },
                            {
                                icon: IconEye,
                                title: "Our Vision",
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
                                className="card-surface group relative overflow-hidden bg-background p-10"
                            >
                                <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                                <span className="icon-tile h-16 w-16 transition-transform duration-500 group-hover:-rotate-6">
                                    <card.icon className="h-7 w-7" />
                                </span>
                                <h3 className="mt-7 text-2xl font-bold tracking-[-0.02em] text-foreground">{card.title}</h3>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{card.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── 4. CORE VALUES ───────── */}
            <section className="section-pad bg-surface">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            What Drives Us
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our Core <span className="text-gradient">Values</span>
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
                                className="card-surface group relative h-full overflow-hidden bg-background p-8"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                                <span className="icon-tile h-14 w-14 transition-transform duration-500 group-hover:-rotate-6">
                                    <v.icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-foreground">{v.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── 5. WHY PARTNER WITH US ───────── */}
            <section className="section-pad">
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
                        <div className="absolute -bottom-6 -right-4 w-48 rounded-3xl p-5 glass-card sm:right-6 lg:-right-8">
                            <p className="text-3xl font-bold tracking-[-0.03em] text-primary">22+</p>
                            <p className="mt-1 text-sm text-muted-foreground">States covered pan-India</p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Why Partner With Us
                            </span>
                            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                Built for Businesses That <span className="text-gradient">Cannot Afford Surprises</span>
                            </h2>
                        </motion.div>

                        <div className="mt-8 space-y-4">
                            {[
                                "Reliable Supply Chain",
                                "Bulk Order Support",
                                "Competitive Pricing",
                                "Fast 48-Hour Dispatch",
                                "Trusted Distribution Network",
                                "Premium Quality Products",
                            ].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={i + 1}
                                    className="flex items-center gap-4"
                                >
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-success/10 text-success">
                                        <IconCheck className="h-5 w-5" />
                                    </span>
                                    <span className="text-base font-medium text-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── 6. COMPANY STATS ───────── */}
            <section className="relative overflow-hidden bg-linear-to-br from-[#0B4A8B] via-[#123B73] to-[#0B4A8B] py-24">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px]" />
                    <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
                    <div className="absolute inset-0 grid-lines opacity-20" />
                </div>

                <div className="shell relative">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                            Our Numbers
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                            Scale You Can Rely On
                        </motion.h2>
                    </motion.div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCounter value={15} suffix="+" label="Product Categories" note="Grocery to industrial" />
                        <StatCounter value={500} suffix="+" label="Products" note="Active wholesale SKUs" />
                        <StatCounter value={100} suffix="+" label="Business Clients" note="Retail & institutional" />
                        <StatCounter label="Delivery" note="22 states covered" />
                    </div>
                </div>
            </section>

            {/* ───────── 7. INDUSTRIES WE SERVE ───────── */}
            <section className="section-pad">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Who We Serve
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Industries We <span className="text-gradient">Serve</span>
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
                                className="card-surface group flex items-center gap-5 bg-background p-6"
                            >
                                <span className="icon-tile h-14 w-14 shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <ind.icon className="h-6 w-6" />
                                </span>
                                <h3 className="text-base font-semibold tracking-[-0.02em] text-foreground">{ind.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── 8. OUR PROCESS ───────── */}
            <section id="our-process" className="section-pad bg-surface">
                <div className="shell">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
                        <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            How It Works
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Our <span className="text-gradient">Process</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Four clear steps from enquiry to delivered consignment — no hidden handoffs.
                        </motion.p>
                    </motion.div>

                    <div className="relative mt-16">
                        {/* connector line */}
                        <div aria-hidden className="absolute left-0 top-8 hidden h-px w-full bg-linear-to-r from-transparent via-accent/40 to-transparent lg:block" />

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {PROCESS_STEPS.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="relative text-center"
                                >
                                    <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-2xl font-bold text-white shadow-[var(--shadow-glow)]">
                                        {step.num}
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── 9. CTA ───────── */}
            <section id="contact" className="section-pad">
                <div className="shell">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2rem] gradient-deep px-8 py-16 text-center sm:px-14 lg:py-24"
                    >
                        <div aria-hidden className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
                            <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
                            <div className="absolute right-10 top-10 h-56 w-56 rounded-full border border-primary-foreground/20" />
                        </div>

                        <div className="relative mx-auto max-w-2xl">
                            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-primary-foreground sm:text-4xl lg:text-5xl">
                                Let&apos;s Grow Your Business <span className="text-white/70">Together</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                                We are always ready to fulfill wholesale and retail requirements across India.
                                Send us your requirement list and get a competitive bulk quote within one working day.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={2} className="mt-9 flex flex-wrap justify-center gap-4">
                                <a href={`mailto:${SITE.email}`} className="btn-base btn-invert !px-7 !py-4">
                                    <IconMessageCircle className="h-4 w-4" />
                                    Contact Us
                                </a>
                                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="btn-base btn-outline-light !px-7 !py-4">
                                    <IconPhone className="h-4 w-4" />
                                    WhatsApp
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ───────── 10. FAQ ───────── */}
            <section className="section-pad bg-surface">
                <div className="shell">
                    <div className="mx-auto grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                        <div>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                    FAQ
                                </motion.span>
                                <motion.h2 variants={fadeUp} custom={1} className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                    Frequently Asked <span className="text-gradient">Questions</span>
                                </motion.h2>
                                <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    Everything you need to know about ordering wholesale from Zalloco Industries.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={3}
                                className="mt-8"
                            >
                                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="btn-base btn-primary !px-7 !py-4">
                                    <IconMessageCircle className="h-4 w-4" />
                                    Chat on WhatsApp
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                            className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8"
                        >
                            {FAQS.map((faq) => (
                                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
