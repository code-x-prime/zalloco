"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const FAQS = [
    {
        q: "How do I place a wholesale or bulk order?",
        a: "You can reach us via the contact form, WhatsApp, or email. Share your requirements and our sales team will provide a customized quotation with the best wholesale pricing.",
    },
    {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ varies by product category. For grocery staples it is typically 100 units, while for specialty items it may be lower. Contact us with your specific needs and we will find the best solution.",
    },
    {
        q: "Do you ship across India?",
        a: "Yes. We deliver pan-India through our logistics network. We also handle export orders for international buyers. Shipping costs depend on order size and destination.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers (NEFT/RTGS/IMPS), UPI, demand drafts, and verified cheques. For repeat partners we also offer credit terms subject to approval.",
    },
    {
        q: "Can I get product samples before ordering?",
        a: "Yes. We provide product samples for quality evaluation. Sample charges may apply for certain categories, which are adjusted against your first bulk order.",
    },
    {
        q: "How can I become a distributor or dealer?",
        a: "We are always looking for distribution partners. Select 'Partnership' in the subject field above or email us with your business profile, territory, and current portfolio. Our team will review and get back to you.",
    },
];

function FAQItem({ item, index }: { item: (typeof FAQS)[number]; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <Reveal delay={index * 0.06}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={open}
                >
                    <span className="text-base font-semibold text-foreground">{item.q}</span>
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-muted-foreground"
                    >
                        <IconChevronDown size={18} />
                    </motion.div>
                </button>
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="px-6 pb-6 pt-0">
                                <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Reveal>
    );
}

export function ContactFAQ() {
    return (
        <section className="section-pad bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Frequently Asked"
                    highlight="Questions"
                    description="Find quick answers to common questions about ordering, shipping, and partnerships."
                />

                <div className="mx-auto mt-12 max-w-3xl space-y-4">
                    {FAQS.map((faq, i) => (
                        <FAQItem key={faq.q} item={faq} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
