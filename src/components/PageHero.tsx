"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconChevronRight, IconHome } from "@tabler/icons-react";
import { Reveal } from "./Reveal";

interface Crumb {
    label: string;
    href: string;
}

interface PageHeroProps {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    crumbs?: Crumb[];
}

function useAutoCrumbs(override?: Crumb[]): Crumb[] {
    const pathname = usePathname();
    if (override) return override;

    const segments = pathname.split("/").filter(Boolean);
    return segments.map((seg, i) => ({
        label: seg.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
        href: "/" + segments.slice(0, i + 1).join("/"),
    }));
}

export function PageHero({ eyebrow, title, highlight, description, crumbs }: PageHeroProps) {
    const trail = useAutoCrumbs(crumbs);

    return (
        <section className="relative overflow-hidden border-b border-border bg-surface pt-24 sm:pt-28">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" />

            <div className="shell py-12 sm:py-16 lg:py-20">
                <Reveal>
                    <nav
                        aria-label="Breadcrumb"
                        className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-medium text-muted-foreground"
                    >
                        <Link href="/" className="flex items-center gap-1 transition-colors hover:text-primary">
                            <IconHome className="h-3.5 w-3.5" />
                            Home
                        </Link>
                        {trail.map((c, i) => {
                            const isLast = i === trail.length - 1;
                            return (
                                <span key={c.href} className="flex items-center gap-1.5">
                                    <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-border" />
                                    {isLast ? (
                                        <span aria-current="page" className="text-foreground">
                                            {c.label}
                                        </span>
                                    ) : (
                                        <Link href={c.href} className="transition-colors hover:text-primary">
                                            {c.label}
                                        </Link>
                                    )}
                                </span>
                            );
                        })}
                    </nav>

                    <div className="mt-7 max-w-2xl sm:mt-9">
                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            {eyebrow}
                        </span>
                        <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                            {title}
                            {highlight && (
                                <>
                                    {" "}
                                    <span className="text-gradient">{highlight}</span>
                                </>
                            )}
                        </h1>
                        {description && (
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                {description}
                            </p>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
