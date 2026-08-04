import {
    IconArrowUpRight,
    IconTools,
    IconBasket,
    IconSparkles,
    IconHome,
    IconHeartbeat,
    IconBabyCarriage,
    IconPaw,
    IconCpu,
    IconBriefcase,
    IconShirt,
    IconSofa,
    IconFlower,
    IconBuildingFactory,
    IconWheat,
    IconSun,
} from "@tabler/icons-react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./Reveal";

const CATEGORIES = [
    { icon: IconTools, name: "Food & Beverages", note: "Staples, oils, beverages", filter: "Grocery" },
    { icon: IconBasket, name: "Grocery", note: "Flour, rice, pulses, spices", filter: "Grocery" },
    { icon: IconSparkles, name: "Personal Care", note: "Soaps, shampoo, oral care", filter: "Personal Care" },
    { icon: IconHome, name: "Household", note: "Cleaning & kitchen essentials", filter: "Household" },
    { icon: IconHeartbeat, name: "Health", note: "OTC wellness & supplements", filter: "All" },
    { icon: IconBabyCarriage, name: "Baby", note: "Diapers, food, baby care", filter: "Baby & Pet" },
    { icon: IconPaw, name: "Pet", note: "Pet food & accessories", filter: "Baby & Pet" },
    { icon: IconCpu, name: "Electronics", note: "Small appliances & accessories", filter: "Electronics" },
    { icon: IconBriefcase, name: "Office", note: "Stationery & pantry supplies", filter: "Office" },
    { icon: IconShirt, name: "Fashion", note: "Apparel & textile lots", filter: "All" },
    { icon: IconSofa, name: "Home", note: "Furnishing & storage", filter: "Home & Kitchen" },
    { icon: IconFlower, name: "Beauty", note: "Cosmetics & skincare", filter: "Personal Care" },
    { icon: IconBuildingFactory, name: "Industrial", note: "Packaging & consumables", filter: "Industrial" },
    { icon: IconWheat, name: "Agriculture", note: "Grains & agri commodities", filter: "Grocery" },
    { icon: IconSun, name: "Seasonal", note: "Festive & seasonal ranges", filter: "All" },
];

export function Categories() {
    return (
        <section id="categories" className="section-pad bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="Product Categories"
                    title="Fifteen categories, one accountable"
                    highlight="supply partner"
                    description="Consolidate your purchase list instead of chasing a dozen vendors. Mix categories in a single bulk order and receive one invoice, one dispatch, one point of contact."
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((cat, i) => (
                        <Reveal key={cat.name} delay={(i % 3) * 0.06}>
                            <Link
                                href={`/products?category=${encodeURIComponent(cat.filter)}`}
                                className="card-surface group flex h-full items-center gap-5 bg-background p-6"
                            >
                                <span className="icon-tile h-14 w-14 shrink-0 transition-transform duration-500 group-hover:scale-105">
                                    <cat.icon className="h-6 w-6" />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-base font-semibold tracking-[-0.02em] text-foreground">
                                        {cat.name}
                                    </h3>
                                    <p className="mt-0.5 truncate text-sm text-muted-foreground">{cat.note}</p>
                                </div>
                                <IconArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
