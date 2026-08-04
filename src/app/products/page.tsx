"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { ProductCard } from "@/components/ProductCard";
import { IconMessageCircle, IconPhone, IconSearch, IconSearchOff } from "@tabler/icons-react";
import { SITE } from "@/lib/site";

const FILTERS = ["All", "Grocery", "Spices", "Household", "Personal Care", "Electronics", "Industrial", "Office", "Home & Kitchen", "Baby & Pet"];

const CATEGORY_CODE: Record<string, string> = {
    Grocery: "GRC",
    Spices: "SPC",
    Household: "HHD",
    "Personal Care": "PSC",
    Electronics: "ELC",
    Industrial: "IND",
    Office: "OFC",
    "Home & Kitchen": "HOM",
    "Baby & Pet": "BBY",
};

const PRODUCTS = [
    { name: "Wheat Flour 10kg", category: "Grocery", price: "₹380", unit: "10 kg", img: "/p-wheat.jpg", desc: "Chakki-fresh atta milled from clean, sortex-graded wheat. Supplied in 10kg sacks.", moq: "50 sacks" },
    { name: "Makki Atta 5kg", category: "Grocery", price: "₹210", unit: "5 kg", img: "/p-makki.jpg", desc: "Stone-ground maize flour with natural golden colour and consistent granulation.", moq: "40 sacks" },
    { name: "Basmati Rice 5kg", category: "Grocery", price: "₹450", unit: "5 kg", img: "/p-rice.jpg", desc: "Long-grain milled rice, double-polished and sortex cleaned for premium quality.", moq: "100 packs" },
    { name: "Red Chilli Powder 1kg", category: "Spices", price: "₹180", unit: "1 kg", img: "/p-chilli.jpg", desc: "Deep-red Teja and Byadgi blends ground fresh, packed in multiple sizes.", moq: "25 kg" },
    { name: "Turmeric Powder 500g", category: "Spices", price: "₹95", unit: "500 g", img: "/p-turmeric.jpg", desc: "High-curcumin turmeric, lab-tested for colour value and purity.", moq: "25 kg" },
    { name: "Black Pepper 250g", category: "Spices", price: "₹220", unit: "250 g", img: "/p-pepper.jpg", desc: "Malabar whole black peppercorns, machine cleaned and graded.", moq: "10 kg" },
    { name: "Coriander Seeds 500g", category: "Spices", price: "₹75", unit: "500 g", img: "/p-coriander.jpg", desc: "Eagle-grade coriander seeds with strong aroma, export standard.", moq: "25 kg" },
    { name: "Sunflower Oil 1L", category: "Grocery", price: "₹145", unit: "1 L", img: "https://img.magnific.com/free-photo/cooking-oil-brown-jute-background_58702-2237.jpg", desc: "Refined sunflower oil, light and healthy for everyday cooking.", moq: "50 bottles" },
    { name: "Surf Excel Detergent 1kg", category: "Household", price: "₹125", unit: "1 kg", img: "https://img.magnific.com/free-photo/quality-equipment-with-chemical-cleaning-products-tools-maintenance-swimming-pool-wooden-surface-against-white-background-disinfectant-detergent-cleanser-close-up-front-v_639032-1435.jpg", desc: "Premium detergent powder for deep cleaning and stain removal.", moq: "30 pcs" },
    { name: "Harpic Toilet Cleaner 1L", category: "Household", price: "₹99", unit: "1 L", img: "https://img.magnific.com/free-photo/colorful-composition-with-set-bright-cleaning-sponges-cleaning-agent-cleaning-service-concept_169016-10569.jpg", desc: "Powerful toilet cleaner for sparkling clean bathrooms.", moq: "24 pcs" },
    { name: "Lifebuoy Soap 4x100g", category: "Personal Care", price: "₹88", unit: "4 pcs", img: "https://img.magnific.com/free-photo/flat-lay-photo-spa-still-life-skin-care-items_169016-5051.jpg", desc: "Antibacterial soap pack for daily protection and hygiene.", moq: "50 packs" },
    { name: "Shampoo Sachet Pack 30+2", category: "Personal Care", price: "₹165", unit: "32 pcs", img: "https://img.magnific.com/free-photo/liquid-soap-containers-with-different-shapes_1203-1834.jpg", desc: "Value pack of shampoo sachets for retail counters.", moq: "20 packs" },
    { name: "Tata Tea Gold 1kg", category: "Grocery", price: "₹340", unit: "1 kg", img: "https://img.magnific.com/free-photo/coffee-mug-with-ground-coffee-coffee-beans_23-2148267880.jpg", desc: "Premium CTC tea blend with rich aroma and strong colour.", moq: "20 packs" },
    { name: "Nescafe Classic 100g", category: "Grocery", price: "₹175", unit: "100 g", img: "https://img.magnific.com/free-photo/closeup-glass-jar-with-wooden-cap-wooden-tray_181624-45964.jpg", desc: "Instant coffee with signature bold flavour.", moq: "30 jars" },
    { name: "Philips LED Bulb 9W", category: "Electronics", price: "₹75", unit: "1 pc", img: "https://img.magnific.com/free-photo/light-bulb_1387-160.jpg", desc: "Energy-efficient LED bulb with 2-year warranty.", moq: "100 pcs" },
    { name: "Boat Airdopes 141", category: "Electronics", price: "₹999", unit: "1 pc", img: "https://img.magnific.com/premium-photo/led-lamp-auto-isolated-white-background_486684-560.jpg", desc: "Wireless earbuds with 42H playback and IPX4 rating.", moq: "20 pcs" },
    { name: "Classmate Notebook 240p", category: "Office", price: "₹55", unit: "1 pc", img: "https://img.magnific.com/free-photo/pen-notebook-near-stationery_23-2147846343.jpg", desc: "Premium quality notebook with 240 pages for daily use.", moq: "100 pcs" },
    { name: "Natraj Pencil Box 10pc", category: "Office", price: "₹45", unit: "1 set", img: "https://img.magnific.com/free-photo/education-concept-with-pencils-pen-scissors-notebook-eraser-paper_176474-7768.jpg", desc: "Complete pencil set with sharpener and eraser.", moq: "50 sets" },
    { name: "Dettol Antiseptic 750ml", category: "Household", price: "₹199", unit: "750 ml", img: "https://img.magnific.com/free-photo/washing-liquids-collection-mock-up_23-2148333869.jpg", desc: "Trusted antiseptic liquid for first aid and hygiene.", moq: "24 pcs" },
    { name: "Pampers Diapers M34", category: "Baby & Pet", price: "₹599", unit: "34 pcs", img: "https://img.magnific.com/free-photo/baby-pacifier-diapers-crib-closeup_169016-37759.jpg", desc: "Premium baby diapers with 12-hour dryness protection.", moq: "10 packs" },
    { name: "Drools Dog Food 3kg", category: "Baby & Pet", price: "₹450", unit: "3 kg", img: "https://img.magnific.com/free-photo/pouring-pet-food-into-bowl_53876-31324.jpg", desc: "Complete nutrition dog food with real chicken.", moq: "20 bags" },
    { name: "Prestige Cooker 5L", category: "Home & Kitchen", price: "₹1,350", unit: "1 pc", img: "https://img.magnific.com/free-photo/crockery-showcase-store-things-home_169016-20590.jpg", desc: "Aluminium pressure cooker with safety valve and gasket.", moq: "10 pcs" },
    { name: "Bajaj Mixer Grinder 750W", category: "Home & Kitchen", price: "₹2,199", unit: "1 pc", img: "https://img.magnific.com/free-photo/still-life-home-interior_169016-3390.jpg", desc: "Powerful mixer grinder with 3 stainless steel jars.", moq: "5 pcs" },
    { name: "Stanley Tool Kit 45pc", category: "Industrial", price: "₹1,899", unit: "1 set", img: "https://img.magnific.com/premium-photo/photo-industrial-tools-hardware_1298493-32078.jpg", desc: "Professional grade tool kit with carry case.", moq: "10 sets" },
    { name: "Fevicol MR 500ml", category: "Industrial", price: "₹65", unit: "500 ml", img: "https://img.magnific.com/premium-photo/detail-precision-tools_1359-246.jpg", desc: "General purpose adhesive for wood, paper and fabric.", moq: "50 pcs" },
];

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "All";
    const [activeFilter, setActiveFilter] = useState(initialCategory);
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return PRODUCTS.filter((p) => {
            const matchCategory = activeFilter === "All" || p.category === activeFilter;
            const matchSearch =
                search === "" ||
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.desc.toLowerCase().includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [activeFilter, search]);

    return (
        <main className="pb-24">
            <PageHero
                eyebrow="PG.03 / PRODUCTS"
                title="Full catalogue,"
                highlight="current rates."
                description="500+ wholesale SKUs at factory-direct pricing. Filter by category or search for exactly what your store needs."
            />

            <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-5 sm:p-6">
                    <div className="relative">
                        <IconSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by product name or description"
                            className="w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 border-t border-border pt-5">
                        <span className="mr-1 font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            FILTER /
                        </span>
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setActiveFilter(f)}
                                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${activeFilter === f
                                        ? "border-primary bg-primary text-white"
                                        : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-primary"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                    <span>
                        SHOWING {String(filtered.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
                    </span>
                    {activeFilter !== "All" && <span>{activeFilter.toUpperCase()}</span>}
                </div>
            </section>

            <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
                        <IconSearchOff className="h-8 w-8 text-muted-foreground" />
                        <p className="text-base font-semibold text-foreground">No matching products</p>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Try a different category, or clear your search and browse the full range.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((product, i) => (
                            <ProductCard key={product.name} product={product} index={i} />
                        ))}
                    </div>
                )}
            </section>

            <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[var(--shadow-card)] sm:grid-cols-[1.2fr_1fr]">
                    <div className="relative flex flex-col justify-center px-8 py-12 sm:px-10">
                        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" />
                        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                            BULK.01 / VOLUME PRICING
                        </span>
                        <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                            Need bulk pricing?
                        </h2>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Exclusive wholesale rates on orders above 50 units, with custom packaging and
                            private labelling available.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 border-t border-dashed border-border bg-surface px-8 py-10 sm:border-l sm:border-t-0 sm:px-10">
                        <a
                            href={SITE.whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-base btn-whatsapp w-full !py-3.5"
                        >
                            <IconMessageCircle className="h-4 w-4" />
                            WhatsApp for bulk order
                        </a>
                        <a href={SITE.phoneHref} className="btn-base btn-ghost w-full !py-3.5">
                            <IconPhone className="h-4 w-4" />
                            Call {SITE.phoneDisplay}
                        </a>
                    </div>
                </div>
            </section>

            <FAQ
                items={[
                    { q: "What is the minimum order quantity (MOQ)?", a: "MOQ varies by product — typically 10–50 units for most SKUs. Contact us for specific item details." },
                    { q: "Do you offer home & business delivery?", a: "Yes, we deliver pan-India via trusted logistics partners. Free delivery options available on bulk orders." },
                    { q: "Can I get product samples before placing a bulk order?", a: "Absolutely. Sample orders are charged at MRP with full credit on your first bulk purchase." },
                    { q: "Do you offer private labeling and custom packaging?", a: "Yes, we provide custom packaging and private labeling options for large recurring orders." },
                ]}
            />
        </main>
    );
}

export default function ProductsPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center gap-2 pt-28 pb-24 font-mono text-sm text-muted-foreground">
                    Loading catalogue…
                </div>
            }
        >
            <ProductsContent />
        </Suspense>
    );
}