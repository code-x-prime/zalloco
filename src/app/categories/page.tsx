import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { IconArrowUpRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Product Categories — Zalloco Industries",
    description: "Browse 15+ wholesale product categories including grocery, spices, household, personal care, electronics, and industrial supplies at Zalloco Industries.",
    openGraph: { title: "Product Categories — Zalloco" },
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
        <main className="pt-28 pb-24">
            {/* Hero */}
            <Reveal>
                <section className="shell text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Our Categories
                    </span>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                        15+ <span className="text-gradient">Categories</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        One-stop wholesale source for grocery, household, industrial, and lifestyle products. Everything your store needs — under one roof.
                    </p>
                </section>
            </Reveal>

            {/* Category Grid */}
            <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((cat, i) => (
                        <Reveal key={cat.id} delay={i * 0.04}>
                            <Link
                                href={`/products?category=${encodeURIComponent(cat.filter)}`}
                                className="group relative block h-72 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-primary/90 group-hover:via-primary/60" />
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                        {cat.products} products
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                                    <p className="mt-1 text-sm text-white/80 line-clamp-2">{cat.desc}</p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        Explore Products <IconArrowUpRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <Reveal>
                <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-surface p-10 text-center shadow-sm md:grid-cols-4">
                        {[
                            { value: "15+", label: "Categories" },
                            { value: "500+", label: "Products" },
                            { value: "2,000+", label: "Happy Retailers" },
                            { value: "50+", label: "Brands" },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-3xl font-bold text-primary">{s.value}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* CTA */}
            <Reveal>
                <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl">Need Something Specific?</h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Can&apos;t find what you&apos;re looking for? Contact us for custom sourcing. We supply over 5,000 products — if it&apos;s in wholesale, we can get it.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="btn-base btn-primary !px-8">
                            WhatsApp Us
                        </a>
                        <a href={SITE.phoneHref} className="btn-base btn-ghost !px-8">
                            Call {SITE.phoneDisplay}
                        </a>
                    </div>
                </section>
            </Reveal>
        </main>
    );
}
