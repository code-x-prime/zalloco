import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { IconArrowUpRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Product Categories — Zalloco Industries",
    description: "Browse 15+ wholesale product categories including grocery, spices, household, personal care, electronics, and industrial supplies at Zalloco Industries.",
    openGraph: { title: "Product Categories — Zalloco" },
};

const CATEGORY_CODE: Record<string, string> = {
    grocery: "GRC",
    spices: "SPC",
    food: "FNB",
    household: "HHD",
    personal: "PSC",
    beauty: "BTY",
    electronics: "ELC",
    agriculture: "AGR",
    industrial: "IND",
    office: "OFC",
    home: "HOM",
    fashion: "FSH",
    baby: "BBY",
    pet: "PET",
    seasonal: "SSN",
};

const CATEGORIES = [
    { id: "grocery", name: "Grocery & Staples", desc: "Rice, wheat flour, pulses, sugar, salt, cooking oil, and all daily kitchen essentials.", img: "https://img.magnific.com/free-photo/healthy-food-concept_23-2148041188.jpg", products: "80+", filter: "Grocery" },
    { id: "spices", name: "Spices & Masalas", desc: "Red chilli powder, turmeric, coriander, cumin, garam masala, and blended spices.", img: "https://img.magnific.com/free-photo/top-view-spices-table-cloth_23-2148033583.jpg", products: "45+", filter: "Spices" },
    { id: "food", name: "Packaged Food & Beverages", desc: "Snacks, biscuits, noodles, tea, coffee, juices, and ready-to-eat items.", img: "https://img.magnific.com/free-photo/close-up-delicious-fast-food-table_23-2148041220.jpg", products: "120+", filter: "Grocery" },
    { id: "household", name: "Household Essentials", desc: "Detergents, dishwash, floor cleaners, surface sprays, mops, and brooms.", img: "https://img.magnific.com/premium-photo/modern-kitchen-setup-with-detergent-soap-dinnerware-cookware-cleaning-supplies_1213593-5299.jpg", products: "60+", filter: "Household" },
    { id: "personal", name: "Personal Care & Hygiene", desc: "Soaps, shampoo, toothpaste, body wash, deodorants, and skincare.", img: "https://img.magnific.com/free-photo/top-view-tropical-leaves-with-beauty-tools-cosmetics_23-2148179524.jpg", products: "90+", filter: "Personal Care" },
    { id: "beauty", name: "Beauty & Cosmetics", desc: "Foundations, lipsticks, eyeliners, makeup kits, and beauty accessories.", img: "https://img.magnific.com/free-photo/overhead-view-cosmetics-makeup-natural-organic-products-dual-backdrop_23-2148031301.jpg", products: "55+", filter: "Personal Care" },
    { id: "electronics", name: "Consumer Electronics", desc: "Mobile accessories, earbuds, chargers, power banks, LED bulbs, and cables.", img: "https://img.magnific.com/free-photo/white-technological-device-with-stand_23-2147923814.jpg", products: "70+", filter: "Electronics" },
    { id: "agriculture", name: "Agriculture & Farming", desc: "Seeds, fertilizers, pesticides, tools, irrigation equipment, and livestock feed.", img: "https://img.magnific.com/premium-photo/view-agricultural-field_23-2151270632.jpg", products: "40+", filter: "Grocery" },
    { id: "industrial", name: "Industrial & Hardware", desc: "Power tools, hand tools, fasteners, safety gear, lubricants, and adhesives.", img: "https://img.magnific.com/premium-photo/photo-industrial-tools-hardware_1298493-32078.jpg", products: "85+", filter: "Industrial" },
    { id: "office", name: "Office & Stationery", desc: "Pens, paper, notebooks, printers, files, folders, and office accessories.", img: "https://img.magnific.com/free-photo/minimalist-black-white-office-desk-with-stationery_9975-133066.jpg", products: "65+", filter: "Office" },
    { id: "home", name: "Home & Kitchen", desc: "Cookware, utensils, storage containers, organizers, and kitchen gadgets.", img: "https://img.magnific.com/free-photo/crockery-showcase-store-things-home_169016-20590.jpg", products: "75+", filter: "Home & Kitchen" },
    { id: "fashion", name: "Fashion & Apparel", desc: "Men's wear, women's wear, kids' clothing, accessories, footwear, and ethnic wear.", img: "https://img.magnific.com/free-photo/young-handsome-man-choosing-cloth-shop_1303-19845.jpg", products: "50+", filter: "All" },
    { id: "baby", name: "Baby & Kids", desc: "Diapers, baby food, toys, strollers, clothing, and nursery essentials.", img: "https://img.magnific.com/premium-photo/baby-nursery-with-accessories_155011-73.jpg", products: "45+", filter: "Baby & Pet" },
    { id: "pet", name: "Pet Supplies", desc: "Pet food, grooming products, leashes, cages, toys, and veterinary items.", img: "https://img.magnific.com/premium-photo/cute-pet-accessories-flat-lay_23-2150135922.jpg", products: "35+", filter: "Baby & Pet" },
    { id: "seasonal", name: "Seasonal & Festive", desc: "Diwali gift boxes, Holi colours, festival decorations, and seasonal items.", img: "https://img.magnific.com/free-photo/gift-boxes-fir-tree-branches_1150-19471.jpg", products: "30+", filter: "All" },
];

export default function CategoriesPage() {
    return (
        <main className="pb-24">
            <PageHero
                eyebrow="PG.02 / CATEGORIES"
                title="Fifteen categories,"
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
                            { value: "15+", label: "Categories" },
                            { value: "500+", label: "Products" },
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