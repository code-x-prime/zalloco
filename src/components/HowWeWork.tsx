import { IconClipboardList, IconFileText, IconCircleCheck, IconTruck } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
    {
        icon: IconClipboardList,
        title: "Choose Products",
        body: "Share your requirement list with grades, pack sizes and monthly volumes. Our catalogue covers 500+ SKUs across 15 categories.",
    },
    {
        icon: IconFileText,
        title: "Request Quote",
        body: "We revert within one working day with a GST-inclusive bulk quotation, MOQ, packing detail and delivery timeline.",
    },
    {
        icon: IconCircleCheck,
        title: "Confirm Order",
        body: "Approve the proforma invoice. Stock is reserved, quality-checked and packed to your labelling specification.",
    },
    {
        icon: IconTruck,
        title: "Fast Delivery",
        body: "Dispatch within 48 hours with LR tracking, and a dedicated account manager until the consignment is received.",
    },
];

export function HowWeWork() {
    return (
        <section className="section-pad bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="How We Work"
                    title="A procurement process that stays"
                    highlight="predictable"
                    description="Four clear steps from enquiry to delivered consignment — no hidden handoffs."
                />

                <div className="relative mt-16">
                    <div
                        aria-hidden
                        className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-linear-to-b from-accent/60 via-primary/30 to-transparent sm:block lg:left-1/2"
                    />
                    <div className="flex flex-col gap-8">
                        {STEPS.map((step, i) => (
                            <Reveal key={step.title} delay={i * 0.1}>
                                <div
                                    className={`relative flex gap-6 sm:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-14" : "lg:ml-auto lg:flex-row-reverse lg:pl-14 lg:text-right"
                                        }`}
                                >
                                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                                        <span className="icon-tile h-14 w-14 ring-8 ring-surface">
                                            <step.icon className="h-6 w-6" />
                                        </span>
                                        <span className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                            Step {i + 1}
                                        </span>
                                    </div>
                                    <div className="card-surface min-w-0 flex-1 bg-background p-6">
                                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
