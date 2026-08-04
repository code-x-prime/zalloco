import { IconTruck, IconShieldCheck, IconCurrencyRupee, IconBox, IconHeartHandshake, IconHeadphones } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
    {
        icon: IconTruck,
        title: "Fast Delivery",
        body: "Confirmed orders are picked, packed and dispatched within 48 hours through vetted transport partners.",
    },
    {
        icon: IconShieldCheck,
        title: "Quality Products",
        body: "Batch-wise inspection on grade, moisture and packing before any consignment leaves the warehouse.",
    },
    {
        icon: IconCurrencyRupee,
        title: "Affordable Price",
        body: "Direct mill and manufacturer sourcing keeps landed cost low and your retail margin healthy.",
    },
    {
        icon: IconBox,
        title: "Bulk Orders",
        body: "Container loads, mixed pallets or repeat monthly contracts — packed to your specification.",
    },
    {
        icon: IconHeartHandshake,
        title: "Trusted Supplier",
        body: "A registered private limited company with GST-compliant invoicing and complete documentation.",
    },
    {
        icon: IconHeadphones,
        title: "Customer Support",
        body: "A dedicated account manager for every business client, reachable on call and WhatsApp.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-12 md:py-16 ">
            <div className="shell">
                <SectionHeading
                    eyebrow="Why Choose Us"
                    title="Built for businesses that cannot afford"
                    highlight="supply surprises"
                    description="Six operating commitments that our partners rely on, order after order."
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ITEMS.map((item, i) => (
                        <Reveal key={item.title} delay={(i % 3) * 0.08}>
                            <div className="card-surface group relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-brand transition-transform duration-500 group-hover:scale-x-100" />

                                <div className="flex items-start justify-between gap-3">
                                    <span className="icon-tile h-12 w-12 shrink-0 transition-transform duration-500 group-hover:-rotate-6 sm:h-14 sm:w-14">
                                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </span>
                                    <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                        CL.{String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-foreground sm:mt-7 sm:text-xl">
                                    {item.title}
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}