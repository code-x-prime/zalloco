import { IconMessageCircle, IconPhone } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";
import { quoteHref, SITE } from "@/lib/site";

const PRODUCTS = [
    {
        image: "/p-wheat.jpg",
        name: "Wheat Flour 10kg",
        category: "Grocery",
        desc: "Chakki-fresh atta milled from clean, sortex-graded wheat. Supplied in 10kg sacks, 5 sacks per bale.",
        moq: "MOQ 50 sacks",
        price: "₹380/10kg",
    },
    {
        image: "/p-makki.jpg",
        name: "Makki Atta 5kg",
        category: "Grocery",
        desc: "Stone-ground maize flour with natural golden colour and consistent granulation for retail packs.",
        moq: "MOQ 40 sacks",
        price: "₹210/5kg",
    },
    {
        image: "/p-rice.jpg",
        name: "Rice 5kg",
        category: "Grocery",
        desc: "Long-grain milled rice, double-polished and sortex cleaned. Available in raw and steamed grades.",
        moq: "MOQ 100 packs",
        price: "₹450/5kg",
    },
    {
        image: "/p-chilli.jpg",
        name: "Red Chilli Powder",
        category: "Spices",
        desc: "Deep-red Teja and Byadgi blends ground fresh, packed in 1kg, 5kg and 25kg bulk options.",
        moq: "MOQ 25 kg",
        price: "₹180/kg",
    },
    {
        image: "/p-turmeric.jpg",
        name: "Turmeric Powder",
        category: "Spices",
        desc: "High-curcumin Salem and Nizamabad turmeric, lab-tested for colour value and purity.",
        moq: "MOQ 25 kg",
        price: "₹95/500g",
    },
    {
        image: "/p-pepper.jpg",
        name: "Black Pepper",
        category: "Spices",
        desc: "Malabar whole black peppercorns, machine cleaned and graded for uniform bold berry size.",
        moq: "MOQ 10 kg",
        price: "₹220/250g",
    },
    {
        image: "/p-coriander.jpg",
        name: "Whole Coriander",
        category: "Spices",
        desc: "Eagle-grade coriander seeds with strong aroma, cleaned to export standard for bulk buyers.",
        moq: "MOQ 25 kg",
        price: "₹75/500g",
    },
];

export function FeaturedProducts() {
    return (
        <section id="products" className="section-pad">
            <div className="shell">
                <SectionHeading
                    eyebrow="Featured Products"
                    title="Fast-moving staples our clients"
                    highlight="reorder monthly"
                    description="Indicative range from our grocery and spice lines. Full catalogue with current bulk rates is shared on request."
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.map((product, i) => (
                        <Reveal key={product.name} delay={(i % 3) * 0.08}>
                            <article className="card-surface group flex h-full flex-col overflow-hidden">
                                <div className="relative overflow-hidden bg-surface">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width={800}
                                        height={800}
                                        loading="lazy"
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                                        {product.category}
                                    </span>
                                    <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                                        {product.moq}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                                        {product.desc}
                                    </p>
                                    <div className="mt-3 flex items-baseline gap-2">
                                        <span className="text-lg font-bold text-primary">{product.price}</span>
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        <a
                                            href={quoteHref(product.name)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
                                        >
                                            <IconMessageCircle className="h-4 w-4" />
                                            WhatsApp
                                        </a>
                                        <a
                                            href={SITE.phoneHref}
                                            className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                                        >
                                            <IconPhone className="h-4 w-4" />
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
