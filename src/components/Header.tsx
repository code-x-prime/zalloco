"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
    IconMenu,
    IconX,
    IconPhone,
    IconMessageCircle,
    IconChevronDown,
    IconArrowRight,
    IconChevronRight,
    IconWheat,
    IconCoffee,
    IconSparkles,
    IconGridDots,
} from "@tabler/icons-react";
import { SITE } from "@/lib/site";
import Image from "next/image";

const NAV = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Categories", href: "/categories", hasDropdown: true },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Contact", href: "/contact" },
];

// Each href's `category` value matches the real filter values used on
// /products (see FILTERS in app/products/page.tsx) so clicking one actually
// opens that category's products, instead of a dead #anchor.
const CATEGORY_COLS = [
    {
        title: "Grocery & Spices",
        icon: IconWheat,
        items: [
            { label: "Grocery & Staples", href: "/products?category=Grocery" },
            { label: "Spices & Masalas", href: "/products?category=Spices" },
        ],
    },
    {
        title: "Home & Care",
        icon: IconSparkles,
        items: [
            { label: "Household Essentials", href: "/products?category=Household" },
            { label: "Personal Care", href: "/products?category=Personal Care" },
            { label: "Home & Kitchen", href: "/products?category=Home & Kitchen" },
        ],
    },
    {
        title: "Electronics & Office",
        icon: IconCoffee,
        items: [
            { label: "Electronics", href: "/products?category=Electronics" },
            { label: "Office & Stationery", href: "/products?category=Office" },
            { label: "Industrial", href: "/products?category=Industrial" },
        ],
    },
    {
        title: "More Categories",
        icon: IconGridDots,
        items: [
            { label: "Baby & Pet", href: "/products?category=Baby & Pet" },
            { label: "View all categories", href: "/categories" },
        ],
    },
];

const FEATURED_PRODUCTS = [
    { name: "Wheat Flour 10kg", desc: "Chakki-fresh atta", image: "/p-wheat.jpg" },
    { name: "Red Chilli Powder", desc: "Deep-red Teja blend", image: "/p-chilli.jpg" },
    { name: "Turmeric Powder", desc: "High-curcumin Salem", image: "/p-turmeric.jpg" },
    { name: "Black Pepper", desc: "Malabar whole peppercorns", image: "/p-pepper.jpg" },
];

function MegaMenuDropdown({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) onClose();
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [onClose]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-3 w-max -translate-x-1/2"
        >
            {children}
        </motion.div>
    );
}

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleNavEnter = (label: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setHoveredNav(label);
    };

    const handleNavLeave = () => {
        closeTimer.current = setTimeout(() => setHoveredNav(null), 150);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50"
        >
            <div
                className={`relative transition-all duration-500 ${scrolled ? "glass-panel border-b shadow-[var(--shadow-soft)]" : "border-b border-transparent bg-background"
                    }`}
            >
                {/* Hairline accent that only appears once scrolled — a quiet signature rather than a loud one */}
                <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"
                        }`}
                />

                <div className="shell">
                    <div
                        className={`flex items-center justify-between gap-6 transition-all duration-500 ${scrolled ? "h-16" : "h-20"
                            }`}
                    >
                        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
                            <span className="relative shrink-0">
                                <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-primary/10 opacity-0 blur-md transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                                <Image
                                    src="/Zalloco-Logo1.png"
                                    alt="Zalloco Industries logo"
                                    width={160}
                                    height={160}
                                    className={`object-contain transition-all duration-500 ${scrolled ? "h-16 w-16" : "h-24 w-24"}`}
                                />
                            </span>

                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={handleNavLeave}>
                            {NAV.map((item) => (
                                <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() => handleNavEnter(item.label)}
                                >
                                    <Link
                                        href={item.href}
                                        className="relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
                                    >
                                        {hoveredNav === item.label && (
                                            <motion.span
                                                layoutId="nav-highlight"
                                                className="absolute inset-0 rounded-lg bg-primary/[0.06]"
                                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                        {item.hasDropdown && (
                                            <IconChevronDown
                                                className={`relative z-10 h-3.5 w-3.5 transition-transform duration-200 ${hoveredNav === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </Link>

                                    {/* Categories mega menu */}
                                    {item.label === "Categories" && (
                                        <AnimatePresence>
                                            {hoveredNav === "Categories" && (
                                                <MegaMenuDropdown onClose={() => setHoveredNav(null)}>
                                                    <div className="w-[620px] overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                                                        <div className="grid grid-cols-4 gap-5 p-5">
                                                            {CATEGORY_COLS.map((col) => (
                                                                <div key={col.title}>
                                                                    <div className="mb-2.5 flex items-center gap-2">
                                                                        <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
                                                                            <col.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                                                                        </span>
                                                                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                                                                            {col.title}
                                                                        </p>
                                                                    </div>
                                                                    <ul className="space-y-0.5">
                                                                        {col.items.map((ci) => (
                                                                            <li key={ci.label}>
                                                                                <Link
                                                                                    href={ci.href}
                                                                                    onClick={() => setHoveredNav(null)}
                                                                                    className="group/item flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                                                                                >
                                                                                    <span>{ci.label}</span>
                                                                                    <IconChevronRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center justify-between border-t border-border bg-surface/80 px-5 py-3">
                                                            <p className="font-mono text-[11px] text-muted-foreground">9 categories · 25 products</p>
                                                            <Link
                                                                href="/categories"
                                                                onClick={() => setHoveredNav(null)}
                                                                className="group/cta flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent"
                                                            >
                                                                View All
                                                                <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </MegaMenuDropdown>
                                            )}
                                        </AnimatePresence>
                                    )}

                                    {/* Products mega menu */}
                                    {item.label === "Products" && (
                                        <AnimatePresence>
                                            {hoveredNav === "Products" && (
                                                <MegaMenuDropdown onClose={() => setHoveredNav(null)}>
                                                    <div className="w-[380px] overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                                                        <div className="border-b border-border bg-surface/50 px-4 py-3">
                                                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                                                                Featured Products
                                                            </p>
                                                        </div>
                                                        <div className="space-y-1 p-3">
                                                            {FEATURED_PRODUCTS.map((p) => (
                                                                <Link
                                                                    key={p.name}
                                                                    href="/products"
                                                                    onClick={() => setHoveredNav(null)}
                                                                    className="group/item flex items-center gap-3 rounded-lg p-2 transition-all duration-200 hover:bg-primary/5"
                                                                >
                                                                    <img
                                                                        src={p.image}
                                                                        alt={p.name}
                                                                        width={80}
                                                                        height={80}
                                                                        className="h-10 w-10 shrink-0 rounded-md object-cover ring-1 ring-border transition-all duration-200 group-hover/item:ring-primary/40"
                                                                    />
                                                                    <div className="min-w-0 flex-1">
                                                                        <p className="truncate text-xs font-semibold text-foreground">{p.name}</p>
                                                                        <p className="truncate text-[11px] text-muted-foreground">{p.desc}</p>
                                                                    </div>
                                                                    <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-primary" />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <div className="border-t border-border bg-surface/50 p-3">
                                                            <Link
                                                                href="/products"
                                                                onClick={() => setHoveredNav(null)}
                                                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
                                                            >
                                                                View All Products <IconArrowRight className="h-3.5 w-3.5" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </MegaMenuDropdown>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="hidden items-center gap-3 md:flex">
                            <a href={SITE.phoneHref} className="btn-base btn-ghost !gap-2 !px-4 !py-2.5 text-sm">
                                <IconPhone className="h-4 w-4" />
                                Call
                            </a>
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-base btn-whatsapp !gap-2 !px-4 !py-2.5 text-sm shadow-[0_4px_14px_rgba(37,211,102,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4 object-contain shrink-0" />
                                WhatsApp
                            </a>
                        </div>

                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                            className="relative grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition-colors hover:bg-surface lg:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={open ? "close" : "open"}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="grid place-items-center"
                                >
                                    {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {open ? (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden border-t border-border bg-background lg:hidden"
                        >
                            <MobileNav onClose={() => setOpen(false)} />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}

function MobileNav({ onClose }: { onClose: () => void }) {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <div className="shell flex flex-col gap-1 py-5">
            <Link href="/" onClick={onClose} className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-primary">
                Home
            </Link>
            <Link href="/about" onClick={onClose} className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-primary">
                About
            </Link>

            {/* Categories accordion */}
            <button
                type="button"
                onClick={() => setExpanded(expanded === "categories" ? null : "categories")}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
                Categories
                <IconChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${expanded === "categories" ? "rotate-180 text-primary" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {expanded === "categories" && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-l border-border/70 pl-4"
                    >
                        <Link href="/categories" onClick={onClose} className="block rounded-md px-3 py-2 text-sm font-semibold text-primary">
                            All Categories
                        </Link>
                        {CATEGORY_COLS.flatMap((c) => c.items).slice(0, 6).map((ci) => (
                            <Link key={ci.label} href={ci.href} onClick={onClose} className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                                {ci.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Products accordion */}
            <button
                type="button"
                onClick={() => setExpanded(expanded === "products" ? null : "products")}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
                Products
                <IconChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${expanded === "products" ? "rotate-180 text-primary" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {expanded === "products" && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-l border-border/70 pl-4"
                    >
                        <Link href="/products" onClick={onClose} className="block rounded-md px-3 py-2 text-sm font-semibold text-primary">
                            All Products
                        </Link>
                        {FEATURED_PRODUCTS.map((p) => (
                            <Link key={p.name} href="/products" onClick={onClose} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                                <img src={p.image} alt={p.name} width={40} height={40} className="h-8 w-8 rounded-lg object-cover ring-1 ring-border" />
                                {p.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <Link href="/contact" onClick={onClose} className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-primary">
                Contact
            </Link>

            <div className="mt-3 grid grid-cols-2 gap-3">
                <a href={SITE.phoneHref} className="btn-base btn-ghost !gap-2">
                    <IconPhone className="h-4 w-4" />
                    Call
                </a>
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="btn-base btn-whatsapp !gap-2">
                    <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4 object-contain shrink-0" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
}