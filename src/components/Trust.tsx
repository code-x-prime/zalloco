import { IconQuote, IconShieldCheck, IconStopwatch, IconAward, IconStar } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";

const TESTIMONIALS = [
    {
        quote:
            "We moved our entire staples purchase to Zalloco last year. Weights are honest, packing is consistent and the dispatch commitment has never slipped.",
        name: "Rakesh Menon",
        role: "Purchase Head, Retail Chain · Kerala",
    },
    {
        quote:
            "Their spice lots hold colour and aroma far better than what we were buying locally. The quality reports with each batch make our audits simple.",
        name: "Anita Sharma",
        role: "Founder, Packaged Foods Brand · Delhi NCR",
    },
    {
        quote:
            "Mixed pallets across grocery, household and personal care in one invoice saved us three vendors and a lot of follow-up calls.",
        name: "Imran Qureshi",
        role: "Director, Distribution Company · Maharashtra",
    },
];

const BADGES = [
    { icon: IconShieldCheck, label: "Quality Assured" },
    { icon: IconStopwatch, label: "48 Hour Dispatch" },
    { icon: IconAward, label: "Trusted Supplier" },
];

const CLIENTS = [
    "Retail Chains",
    "Kirana Distributors",
    "Hotels & HoReCa",
    "Food Brands",
    "Institutions",
    "Exporters",
];

export function Trust() {
    return (
        <section className="section-pad bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="Client Trust"
                    title="Why businesses keep"
                    highlight="coming back"
                    description="Long-term supply relationships built on consistency, not one-off discounts."
                />

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={t.name} delay={i * 0.08}>
                            <figure className="card-surface flex h-full flex-col bg-background p-8">
                                <IconQuote className="h-8 w-8 text-accent/40" />
                                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div className="mt-6 flex gap-1">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <IconStar key={s} className="h-4 w-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <figcaption className="mt-5 border-t border-border pt-5">
                                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                    <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        {BADGES.map((b) => (
                            <span
                                key={b.label}
                                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)]"
                            >
                                <b.icon className="h-4 w-4 text-accent" />
                                {b.label}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {CLIENTS.map((c) => (
                            <div
                                key={c}
                                className="grid h-20 place-items-center rounded-2xl border border-dashed border-border bg-background px-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:border-accent/40 hover:text-primary"
                            >
                                {c}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
