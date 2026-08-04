import { IconTarget, IconEye, IconHeartHandshake, IconCertificate, IconArrowUpRight, IconTruck } from "@tabler/icons-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

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

export function About() {
    return (
        <section id="about" className="section-pad bg-surface">
            <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                <Reveal>
                    <div className="relative mx-auto w-full max-w-[560px]">
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
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            About Us
                        </span>
                        <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            About <span className="text-gradient">Zalloco Industries</span>
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            Zalloco Industries Private Limited is an Indian import, export and wholesale
                            distribution company serving retail chains, kirana distributors, HoReCa buyers and
                            institutional purchasers. We work directly with mills, processors and manufacturers,
                            which lets us hold competitive bulk rates without compromising on grade.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            From staple grains and spices to personal care, household and industrial supplies, our
                            team manages sourcing, quality inspection, packing and last-mile logistics under one
                            accountable roof.
                        </p>
                    </Reveal>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {PILLARS.map((p, i) => (
                            <Reveal key={p.title} delay={i * 0.08}>
                                <div className="card-surface group h-full bg-background p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="icon-tile h-11 w-11">
                                            <p.icon className="h-5 w-5" />
                                        </span>
                                        <IconArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
