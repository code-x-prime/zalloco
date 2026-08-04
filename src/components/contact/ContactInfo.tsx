"use client";
import { motion } from "motion/react";
import { IconPhone, IconMail, IconBuilding, IconClock } from "@tabler/icons-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const CARDS = [
    {
        icon: IconPhone,
        title: "Call Us",
        lines: [SITE.phoneDisplay, "Mon–Sat · 9 AM – 6 PM IST"],
        href: SITE.phoneHref,
        gradient: "from-[#0B4A8B] to-[#1565C0]",
    },
    {
        icon: IconMail,
        title: "Email Us",
        lines: [SITE.email, "We reply within 24 hours"],
        href: SITE.mailtoHref,
        gradient: "from-[#1565C0] to-[#2F80ED]",
    },
    {
        icon: IconBuilding,
        title: "Visit Us",
        lines: [SITE.address, "Industrial Area, India"],
        href: "#map",
        gradient: "from-[#2F80ED] to-[#42A5F5]",
    },
    {
        icon: IconClock,
        title: "Business Hours",
        lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
        href: undefined,
        gradient: "from-[#0a1929] to-[#0B4A8B]",
    },
] as const;

export function ContactInfo() {
    return (
        <section id="contact-info" className="py-12 md:py-16  bg-surface">
            <div className="shell">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Get in Touch
                    </span>
                    <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl">
                        Contact <span className="text-gradient">Information</span>
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {CARDS.map((card, i) => (
                        <Reveal key={card.title} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
                            >
                                {/* Gradient accent bar */}
                                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.gradient}`} />

                                {/* Icon */}
                                <div className={`mb-5 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-lg transition-transform group-hover:scale-110`}>
                                    <card.icon size={26} stroke={2} />
                                </div>

                                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>

                                <div className="mt-2 space-y-1">
                                    {card.lines.map((line) => (
                                        <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                {card.href && (
                                    <a
                                        href={card.href}
                                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-accent"
                                    >
                                        Contact Now →
                                    </a>
                                )}
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
