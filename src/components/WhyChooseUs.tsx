import Image from "next/image";
import { IconTruck, IconShieldCheck, IconCurrencyRupee, IconBox, IconHeartHandshake, IconHeadphones } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
    {
        icon: IconTruck,
        title: "Fast Delivery",
        body: "Confirmed orders are picked, packed and dispatched within 48 hours through vetted transport partners.",
        image: "/why-delivery.png",
    },
    {
        icon: IconShieldCheck,
        title: "Quality Products",
        body: "Batch-wise inspection on grade, moisture and packing before any consignment leaves the warehouse.",
        image: "/why-quality.png",
    },
    {
        icon: IconCurrencyRupee,
        title: "Affordable Price",
        body: "Direct mill and manufacturer sourcing keeps landed cost low and your retail margin healthy.",
        image: "/why-price.png",
    },
    {
        icon: IconBox,
        title: "Bulk Orders",
        body: "Container loads, mixed pallets or repeat monthly contracts — packed to your specification.",
        image: "/why-bulk.png",
    },
    {
        icon: IconHeartHandshake,
        title: "Trusted Supplier",
        body: "A registered private limited company with GST-compliant invoicing and complete documentation.",
        image: "/why-trust.png",
    },
    {
        icon: IconHeadphones,
        title: "Customer Support",
        body: "A dedicated account manager for every business client, reachable on call and WhatsApp.",
        image: "/why-support.png",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-12 md:py-16">
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
                            <div className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={320}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                    <span className="absolute left-3 top-3 rounded-full border border-border/50 bg-background/90 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.1em] text-primary backdrop-blur">
                                        CL.{String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                            <item.icon className="h-4 w-4" />
                                        </span>
                                        <h3 className="text-xl font-bold tracking-[-0.02em] text-foreground">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}