import Link from "next/link";
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook, IconBrandTwitter, IconClock } from "@tabler/icons-react";
import { SITE } from "@/lib/site";

const LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Categories", href: "/categories" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
];

const CATS = [
    { label: "Grocery & Staples", href: "/categories#grocery" },
    { label: "Spices & Masalas", href: "/categories#spices" },
    { label: "Household", href: "/categories#household" },
    { label: "Personal Care", href: "/categories#personal" },
    { label: "Electronics", href: "/categories#electronics" },
    { label: "Industrial", href: "/categories#industrial" },
];

const SOCIALS = [
    { icon: IconBrandLinkedin, label: "LinkedIn" },
    { icon: IconBrandInstagram, label: "Instagram" },
    { icon: IconBrandFacebook, label: "Facebook" },
    { icon: IconBrandTwitter, label: "X" },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-border bg-surface">
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-4 left-1/2 w-full -translate-x-1/2 select-none text-center"
            >
                <span className="inline-block text-[15vw] font-black uppercase leading-none tracking-[-0.05em] text-transparent bg-gradient-to-b from-foreground/12 via-foreground/[0.04] to-transparent bg-clip-text">
                    ZALLOCO
                </span>
            </div>

            <div className="shell relative py-16 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
                    <div>
                        <Link href="/" className="flex min-w-0 items-center gap-3">
                            <img
                                src="/Zalloco-Logo1.png"
                                alt="Zalloco Industries logo"
                                width={160}
                                height={160}
                                loading="lazy"
                                className="h-12 w-12 shrink-0 object-contain"
                            />
                            <div className="min-w-0">
                                <p className="truncate text-base font-bold tracking-[-0.02em] text-primary">
                                    ZALLOCO
                                </p>
                                <p className="truncate text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                                    Industries Pvt Ltd
                                </p>
                            </div>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Import, export and wholesale distribution of grocery, FMCG, household and industrial
                            products for businesses across India. Quality-checked stock, transparent pricing and
                            dependable dispatch.
                        </p>
                        <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                            <p><span className="font-semibold text-foreground">CIN:</span> {SITE.cin}</p>
                            <p><span className="font-semibold text-foreground">GSTIN:</span> {SITE.gstin}</p>
                        </div>
                        <div className="mt-6 flex gap-3">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href="/contact"
                                    aria-label={s.label}
                                    className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-primary"
                                >
                                    <s.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            SEC.01
                        </span>
                        <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                            Navigate
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {LINKS.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            SEC.02
                        </span>
                        <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                            Categories
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {CATS.map((c) => (
                                <li key={c.label}>
                                    <Link
                                        href={c.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {c.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            SEC.03
                        </span>
                        <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                            Contact
                        </h3>
                        <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="flex items-start gap-3 transition-colors hover:text-primary"
                                >
                                    <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="break-all">{SITE.email}</span>
                                        <span className="break-all text-xs opacity-80">{SITE.secondaryEmail}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE.phoneHref}
                                    className="flex items-start gap-3 transition-colors hover:text-primary"
                                >
                                    <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    {SITE.phoneDisplay}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                {SITE.address}
                            </li>
                            <li className="flex items-start gap-3 text-xs">
                                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span>{SITE.officeHours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-dashed border-border pt-8 text-xs text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {SITE.company}. All rights reserved.
                    </p>
                    <p className="font-mono tracking-[0.08em]">GSTIN: {SITE.gstin} · Pan-India wholesale supply</p>
                    <p>
                        Designed & Developed by{" "}
                        <a
                            href="https://groxmedia.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground transition-colors hover:text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                        >
                            Grox Media
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}