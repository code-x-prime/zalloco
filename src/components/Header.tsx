"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu, IconX, IconPhone, IconMessageCircle, IconChevronDown, IconArrowRight, IconChevronRight } from "@tabler/icons-react";
import { SITE } from "@/lib/site";

const NAV = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Categories", href: "/categories", hasDropdown: true },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Contact", href: "/contact" },
];

const CATEGORY_COLS = [
    {
        title: "Grocery & Staples",
        items: [
            { label: "Rice & Grains", href: "/categories#grocery" },
            { label: "Flour", href: "/categories#grocery" },
            { label: "Cooking Oil", href: "/categories#grocery" },
            { label: "Sugar & Salt", href: "/categories#grocery" },
        ],
    },
    {
        title: "Food & Beverages",
        items: [
            { label: "Snacks", href: "/categories#food" },
            { label: "Tea & Coffee", href: "/categories#food" },
            { label: "Spices", href: "/categories#food" },
            { label: "Dairy", href: "/categories#food" },
        ],
    },
    {
        title: "Household",
        items: [
            { label: "Cleaning", href: "/categories#household" },
            { label: "Laundry", href: "/categories#household" },
            { label: "Kitchen", href: "/categories#household" },
            { label: "Storage", href: "/categories#household" },
        ],
    },
    {
        title: "More Categories",
        items: [
            { label: "Beauty", href: "/categories#beauty" },
            { label: "Electronics", href: "/categories#electronics" },
            { label: "Industrial", href: "/categories#industrial" },
            { label: "Pet & Baby", href: "/categories#pet" },
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-max -translate-x-1/2"
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
                className={`transition-all duration-500 ${scrolled
                        ? "glass-panel border-b shadow-[var(--shadow-soft)]"
                        : "border-b border-transparent bg-background"
                    }`}
            >
                <div className="shell">
                    <div
                        className={`flex items-center justify-between gap-6 transition-all duration-500 ${scrolled ? "h-16" : "h-20"
                            }`}
                    >
                        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3">
                            <img
                                src="/Zalloco-Logo1.png"
                                alt="Zalloco Industries logo"
                                width={160}
                                height={160}
                                className={`transition-all duration-500 ${scrolled ? "h-10 w-10" : "h-12 w-12"} object-contain`}
                            />
                            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
                                <span className="truncate text-base font-bold tracking-[-0.02em] text-primary">
                                    ZALLOCO
                                </span>
                                <span className="truncate text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                                    Industries Pvt Ltd
                                </span>
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden items-center gap-1 lg:flex">
                            {NAV.map((item) => (
                                <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && handleNavEnter(item.label)}
                                    onMouseLeave={() => item.hasDropdown && handleNavLeave()}
                                >
                                    <Link
                                        href={item.href}
                                        className="relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {item.hasDropdown && <IconChevronDown className="h-3.5 w-3.5" />}
                                    </Link>

                                    {/* Categories mega menu */}
                                    {item.label === "Categories" && (
                                        <AnimatePresence>
                                            {hoveredNav === "Categories" && (
                                                <MegaMenuDropdown onClose={() => setHoveredNav(null)}>
                                                    <div className="w-[560px] rounded-xl border border-border bg-background p-5 shadow-2xl">
                                                        <div className="grid grid-cols-4 gap-5">
                                                            {CATEGORY_COLS.map((col) => (
                                                                <div key={col.title}>
                                                                    <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                                                                        {col.title}
                                                                    </p>
                                                                    <ul className="space-y-0.5">
                                                                        {col.items.map((ci) => (
                                                                            <li key={ci.label}>
                                                                                <Link
                                                                                    href={ci.href}
                                                                                    onClick={() => setHoveredNav(null)}
                                                                                    className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                                                                                >
                                                                                    {ci.label}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                                                            <p className="text-xs text-muted-foreground">15 categories, 500+ products</p>
                                                            <Link
                                                                href="/categories"
                                                                onClick={() => setHoveredNav(null)}
                                                                className="flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-accent"
                                                            >
                                                                View All <IconArrowRight className="h-3.5 w-3.5" />
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
                                                    <div className="w-[380px] rounded-xl border border-border bg-background p-4 shadow-2xl">
                                                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                                                            Featured Products
                                                        </p>
                                                        <div className="space-y-0.5">
                                                            {FEATURED_PRODUCTS.map((p) => (
                                                                <Link
                                                                    key={p.name}
                                                                    href="/products"
                                                                    onClick={() => setHoveredNav(null)}
                                                                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-primary/5"
                                                                >
                                                                    <img
                                                                        src={p.image}
                                                                        alt={p.name}
                                                                        width={80}
                                                                        height={80}
                                                                        className="h-10 w-10 shrink-0 rounded-lg object-cover"
                                                                    />
                                                                    <div className="min-w-0 flex-1">
                                                                        <p className="truncate text-sm font-semibold text-foreground">{p.name}</p>
                                                                        <p className="truncate text-xs text-muted-foreground">{p.desc}</p>
                                                                    </div>
                                                                    <IconChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <div className="mt-3 border-t border-border pt-3">
                                                            <Link
                                                                href="/products"
                                                                onClick={() => setHoveredNav(null)}
                                                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
                                                            >
                                                                View All Products <IconArrowRight className="h-4 w-4" />
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
                            <a href={SITE.phoneHref} className="btn-base btn-ghost !px-4 !py-2.5 text-sm">
                                <IconPhone className="h-4 w-4" />
                                Call
                            </a>
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-base btn-whatsapp !px-4 !py-2.5 text-sm"
                            >
                                <IconMessageCircle className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </div>

                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition-colors hover:bg-surface lg:hidden"
                        >
                            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
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
                <IconChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded === "categories" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {expanded === "categories" && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4"
                    >
                        <Link href="/categories" onClick={onClose} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary">All Categories</Link>
                        {CATEGORY_COLS.flatMap((c) => c.items).slice(0, 6).map((ci) => (
                            <Link key={ci.label} href={ci.href} onClick={onClose} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary">{ci.label}</Link>
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
                <IconChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded === "products" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {expanded === "products" && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4"
                    >
                        <Link href="/products" onClick={onClose} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary">All Products</Link>
                        {FEATURED_PRODUCTS.map((p) => (
                            <Link key={p.name} href="/products" onClick={onClose} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                                <img src={p.image} alt={p.name} width={40} height={40} className="h-8 w-8 rounded-lg object-cover" />
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
                <a href={SITE.phoneHref} className="btn-base btn-ghost">
                    <IconPhone className="h-4 w-4" />
                    Call
                </a>
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="btn-base btn-whatsapp">
                    <IconMessageCircle className="h-4 w-4" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
