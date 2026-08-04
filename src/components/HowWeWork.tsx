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
        <section className="py-12 md:py-16  bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="How We Work"
                    title="A procurement process that stays"
                    highlight="predictable"
                    description="Four clear steps from enquiry to delivered consignment — no hidden handoffs."
                />

                <div className="mx-auto mt-16 max-w-2xl">
                    {STEPS.map((step, i) => {
                        const isLast = i === STEPS.length - 1;
                        return (
                            <Reveal key={step.title} delay={i * 0.1}>
                                <div className="relative flex gap-5 sm:gap-6">
                                    <div className="relative flex shrink-0 flex-col items-center">
                                        <span className="icon-tile z-10 h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                                            <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
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
                                            STEP {String(i + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                                        </span>
                                        <h3 className="mt-1.5 text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}