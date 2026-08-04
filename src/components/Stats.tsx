"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { IconStack2, IconBox, IconBuilding, IconMapPin } from "@tabler/icons-react";

function Counter({ value, duration = 1600 }: { value: number; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let frame = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value, duration]);

    return <span ref={ref}>{display}</span>;
}

type Stat = {
    icon: typeof IconStack2;
    value?: number;
    suffix?: string;
    text?: string;
    label: string;
    note: string;
};

const STATS: Stat[] = [
    { icon: IconStack2, value: 15, suffix: "+", label: "Product Categories", note: "Grocery to industrial" },
    { icon: IconBox, value: 500, suffix: "+", label: "Products", note: "Active wholesale SKUs" },
    { icon: IconBuilding, value: 100, suffix: "+", label: "Business Clients", note: "Retail & institutional" },
    { icon: IconMapPin, text: "Pan India", label: "Delivery", note: "22 states covered" },
];

export function Stats() {
    return (
        <section className="relative">
            <div className="shell -mt-4 pb-4 lg:-mt-10">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="card-surface group relative overflow-hidden p-7"
                        >
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
                            <span className="icon-tile h-12 w-12">
                                <stat.icon className="h-5 w-5" />
                            </span>
                            <p className="mt-6 text-4xl font-bold tracking-[-0.04em] text-primary">
                                {stat.value !== undefined ? (
                                    <>
                                        <Counter value={stat.value} />
                                        {stat.suffix}
                                    </>
                                ) : (
                                    stat.text
                                )}
                            </p>
                            <p className="mt-1 text-base font-semibold text-foreground">{stat.label}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{stat.note}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
