"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown, IconMessageCircle } from "@tabler/icons-react";
import { SITE } from "@/lib/site";

export interface FAQItemData {
    q: string;
    a: string;
}

export interface FAQProps {
    eyebrow?: string;
    title?: string;
    highlight?: string;
    description?: string;
    items?: FAQItemData[];
    ctaText?: string;
    ctaHref?: string;
    className?: string;
}

const DEFAULT_FAQS: FAQItemData[] = [
    {
        q: "Who can place wholesale orders?",
        a: "Any registered business — retailers, distributors, kirana stores, HoReCa buyers, institutional caterers, exporters and corporate procurement teams can place wholesale orders with Zalloco Industries.",
    },
    {
        q: "What is the minimum order quantity?",
        a: "MOQ varies by product category. For grocery staples it starts at 50 sacks, for spices at 25 kg, and for personal care at carton-level quantities. Contact us for category-specific MOQs.",
    },
    {
        q: "Which locations do you deliver to?",
        a: "We deliver pan-India across 22 states through our network of vetted transport partners. Metro, tier-2 and tier-3 cities are all covered.",
    },
    {
        q: "What payment methods are accepted?",
        a: "We accept NEFT/RTGS bank transfers, UPI, post-dated cheques and LC (letter of credit) for large recurring orders. Credit terms are available for verified business partners.",
    },
    {
        q: "How can I request a quotation?",
        a: "You can email us at Zallocoindustrys@gmail.com, message on WhatsApp at +91 98765 43210, or use the contact form on our website. We revert within one working day.",
    },
    {
        q: "How can I contact the sales team?",
        a: "Call us at +91 98765 43210, WhatsApp us, or email Zallocoindustrys@gmail.com. A dedicated account manager is assigned to every business client.",
    },
];

function FaqAccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-b-0">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-primary"
                aria-expanded={open}
            >
                {q}
                <IconChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ({
    eyebrow = "FAQ",
    title = "Frequently Asked",
    highlight = "Questions",
    description = "Everything you need to know about ordering wholesale from Zalloco Industries.",
    items = DEFAULT_FAQS,
    ctaText = "Chat on WhatsApp",
    ctaHref = SITE.whatsappHref,
    className = "",
}: FAQProps) {
    return (
        <section className={`py-12 md:py-16 bg-surface ${className}`}>
            <div className="shell">
                <div className="mx-auto grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                    <div>
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                {eyebrow}
                            </span>
                            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                {title}{" "}
                                {highlight && <span className="text-gradient">{highlight}</span>}
                            </h2>
                            {description && (
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </motion.div>

                        {ctaText && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="mt-8"
                            >
                                <a
                                    href={ctaHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-base btn-primary !px-7 !py-4"
                                >
                                    <IconMessageCircle className="h-4 w-4" />
                                    {ctaText}
                                </a>
                            </motion.div>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8"
                    >
                        {items.map((faq) => (
                            <FaqAccordionItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
