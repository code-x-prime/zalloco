import Link from "next/link";
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
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
        <footer className="border-t border-border bg-surface">
            <div className="shell py-16 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
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
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Import, export and wholesale distribution of grocery, FMCG, household and industrial
                            products for businesses across India. Quality-checked stock, transparent pricing and
                            dependable dispatch.
                        </p>
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
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                            Quick Links
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
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
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
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                            Contact
                        </h3>
                        <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="flex items-start gap-3 transition-colors hover:text-primary"
                                >
                                    <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                    <span className="break-all">{SITE.email}</span>
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
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {SITE.company}. All rights reserved.
                    </p>
                    <p>GST compliant invoicing · Pan-India wholesale supply</p>
                </div>
            </div>
        </footer>
    );
}
