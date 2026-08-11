import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { IconArrowUpRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Product Categories — Zalloco Industries",
    description: "Browse 9 wholesale product categories including grocery, spices, household, personal care, electronics, and industrial supplies at Zalloco Industries.",
    openGraph: { title: "Product Categories — Zalloco" },
};

const CATEGORY_CODE: Record<string, string> = {
    grocery: "GRC",
    spices: "SPC",
    household: "HHD",
    personal: "PSC",
    electronics: "ELC",
    industrial: "IND",
    office: "OFC",
    home: "HOM",
    "baby-pet": "BBY",
};

// Each `filter` matches a real category value used in the PRODUCTS list on
// /products, and `products` is that list's actual count for the category —
// keeps this page's cards, counts and links honest instead of placeholder copy.
const CATEGORIES = [
    { id: "grocery", name: "Grocery & Staples", desc: "Wheat flour, makki atta, basmati rice, cooking oil, tea and coffee — daily kitchen essentials.", img: "/cat-grocery.jpg", products: "4", filter: "Grocery" },
    { id: "spices", name: "Spices & Masalas", desc: "Red chilli powder, turmeric, coriander seeds and black pepper, ground and packed fresh.", img: "/cat-spices.jpg", products: "4", filter: "Spices" },
    { id: "household", name: "Household Essentials", desc: "Detergent powder, toilet cleaner and antiseptic liquid for everyday home cleaning.", img: "/cat-household.jpg", products: "3", filter: "Household" },
    { id: "personal", name: "Personal Care & Hygiene", desc: "Antibacterial soap and shampoo sachets for retail counters and daily hygiene.", img: "/cat-personal.jpg", products: "2", filter: "Personal Care" },
    { id: "electronics", name: "Consumer Electronics", desc: "LED bulbs and wireless earbuds — fast-moving electronics for retail shelves.", img: "/cat-electronics.jpg", products: "2", filter: "Electronics" },
    { id: "industrial", name: "Industrial & Hardware", desc: "Multi-piece tool kits and general-purpose adhesive for workshops and repairs.", img: "/cat-industrial.jpg", products: "2", filter: "Industrial" },
    { id: "office", name: "Office & Stationery", desc: "Notebooks and pencil box sets for schools, offices and stationery retailers.", img: "/cat-office.jpg", products: "2", filter: "Office" },
    { id: "home", name: "Home & Kitchen", desc: "Pressure cookers and mixer grinders — trusted kitchen appliances at wholesale rates.", img: "/cat-home.jpg", products: "2", filter: "Home & Kitchen" },
    { id: "baby-pet", name: "Baby & Pet Supplies", desc: "Baby diapers and dog food — everyday essentials for family and pets.", img: "/cat-baby-pet.jpg", products: "2", filter: "Baby & Pet" },
];

export default function CategoriesPage() {
    return (
        <main className="pb-24">
            <PageHero
                eyebrow="PG.02 / CATEGORIES"
                title="Nine categories,"
                highlight="one supplier."
                description="One-stop wholesale source for grocery, household, industrial, and lifestyle products. Everything your store needs — under one roof."
            />

            <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((cat, i) => (
                        <Reveal key={cat.id} delay={(i % 6) * 0.04}>
                            <Link
                                href={`/products?category=${encodeURIComponent(cat.filter)}`}
                                className="card-surface group flex h-full flex-col overflow-hidden"
                            >
                                <div className="relative overflow-hidden bg-surface">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        loading="lazy"
                                        className="aspect-[4/3] w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.1em] text-primary backdrop-blur">
                                        {CATEGORY_CODE[cat.id] ?? "GEN"}-{String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                                        {cat.name}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                                        {cat.desc}
                                    </p>

                                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                                        <span className="font-mono text-xs font-semibold text-foreground">
                                            {cat.products} products
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-all duration-300 group-hover:gap-1.5 group-hover:text-accent">
                                            Explore
                                            <IconArrowUpRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            <Reveal>
                <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background sm:divide-y-0 md:grid-cols-4">
                        {[
                            { value: "9", label: "Categories" },
                            { value: "25", label: "Products" },
                            { value: "2,000+", label: "Happy retailers" },
                            { value: "50+", label: "Brands" },
                        ].map((s, i) => (
                            <div key={s.label} className="flex flex-col items-center gap-1 p-6 text-center sm:p-8">
                                <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                                <p className="text-sm text-muted-foreground">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            <Reveal>
                <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[var(--shadow-card)] sm:grid-cols-[1.2fr_1fr]">
                        <div className="relative flex flex-col justify-center px-8 py-12 sm:px-10">
                            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" />
                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                SRC.01 / CUSTOM SOURCING
                            </span>
                            <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                                Need something specific?
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                                Can&apos;t find what you&apos;re looking for? We supply over 5,000 products —
                                if it&apos;s in wholesale, we can source it for you.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 border-t border-dashed border-border bg-surface px-8 py-10 sm:border-l sm:border-t-0 sm:px-10">
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-base btn-whatsapp w-full !py-3.5"
                            >
                                WhatsApp us
                            </a>
                            <a href={SITE.phoneHref} className="btn-base btn-ghost w-full !py-3.5">
                                Call {SITE.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </section>
            </Reveal>
        </main>
    );
}