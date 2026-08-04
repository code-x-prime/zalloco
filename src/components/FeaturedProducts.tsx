import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ProductCard, ProductItem } from "./ProductCard";

const PRODUCTS: ProductItem[] = [
    {
        img: "/p-wheat.jpg",
        name: "Wheat Flour 10kg",
        category: "Grocery",
        desc: "Chakki-fresh atta milled from clean, sortex-graded wheat. Supplied in 10kg sacks, 5 sacks per bale.",
        moq: "50 sacks",
        price: "₹380",
        unit: "10kg",
    },
    {
        img: "/p-makki.jpg",
        name: "Makki Atta 5kg",
        category: "Grocery",
        desc: "Stone-ground maize flour with natural golden colour and consistent granulation for retail packs.",
        moq: "40 sacks",
        price: "₹210",
        unit: "5kg",
    },
    {
        img: "/p-rice.jpg",
        name: "Rice 5kg",
        category: "Grocery",
        desc: "Long-grain milled rice, double-polished and sortex cleaned. Available in raw and steamed grades.",
        moq: "100 packs",
        price: "₹450",
        unit: "5kg",
    },
    {
        img: "/p-chilli.jpg",
        name: "Red Chilli Powder",
        category: "Spices",
        desc: "Deep-red Teja and Byadgi blends ground fresh, packed in 1kg, 5kg and 25kg bulk options.",
        moq: "25 kg",
        price: "₹180",
        unit: "kg",
    },
    {
        img: "/p-turmeric.jpg",
        name: "Turmeric Powder",
        category: "Spices",
        desc: "High-curcumin Salem and Nizamabad turmeric, lab-tested for colour value and purity.",
        moq: "25 kg",
        price: "₹95",
        unit: "500g",
    },
    {
        img: "/p-pepper.jpg",
        name: "Black Pepper",
        category: "Spices",
        desc: "Malabar whole black peppercorns, machine cleaned and graded for uniform bold berry size.",
        moq: "10 kg",
        price: "₹220",
        unit: "250g",
    },
    {
        img: "/p-coriander.jpg",
        name: "Whole Coriander",
        category: "Spices",
        desc: "Eagle-grade coriander seeds with strong aroma, cleaned to export standard for bulk buyers.",
        moq: "25 kg",
        price: "₹75",
        unit: "500g",
    },
];

export function FeaturedProducts() {
    return (
        <section id="products" className="py-12 md:py-16">
            <div className="shell">
                <SectionHeading
                    eyebrow="Featured Products"
                    title="Fast-moving staples our clients"
                    highlight="reorder monthly"
                    description="Indicative range from our grocery and spice lines. Full catalogue with current bulk rates is shared on request."
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.slice(0, 6).map((product, i) => (
                        <ProductCard key={product.name} product={product} index={i} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Reveal>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                        >
                            View All Products
                            <IconArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}