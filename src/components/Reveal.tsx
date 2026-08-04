"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
    children,
    delay = 0,
    y = 28,
    className,
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    highlight,
    description,
    align = "center",
}: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    align?: "center" | "left";
}) {
    return (
        <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                {title}
                {highlight ? <span className="text-gradient"> {highlight}</span> : null}
            </h2>
            {description ? (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            ) : null}
        </Reveal>
    );
}
