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
    { icon: IconTools, name: "Food & Beverages", note: "Staples, oils, beverages", filter: "Grocery", code: "FNB" },
    { icon: IconBasket, name: "Grocery", note: "Flour, rice, pulses, spices", filter: "Grocery", code: "GRC" },
    { icon: IconSparkles, name: "Personal Care", note: "Soaps, shampoo, oral care", filter: "Personal Care", code: "PSC" },
    { icon: IconHome, name: "Household", note: "Cleaning & kitchen essentials", filter: "Household", code: "HHD" },
    { icon: IconHeartbeat, name: "Health", note: "OTC wellness & supplements", filter: "All", code: "HLT" },
    { icon: IconBabyCarriage, name: "Baby", note: "Diapers, food, baby care", filter: "Baby & Pet", code: "BBY" },
    { icon: IconPaw, name: "Pet", note: "Pet food & accessories", filter: "Baby & Pet", code: "PET" },
    { icon: IconCpu, name: "Electronics", note: "Small appliances & accessories", filter: "Electronics", code: "ELC" },
    { icon: IconBriefcase, name: "Office", note: "Stationery & pantry supplies", filter: "Office", code: "OFC" },
    { icon: IconShirt, name: "Fashion", note: "Apparel & textile lots", filter: "All", code: "FSH" },
    { icon: IconSofa, name: "Home", note: "Furnishing & storage", filter: "Home & Kitchen", code: "HOM" },
    { icon: IconFlower, name: "Beauty", note: "Cosmetics & skincare", filter: "Personal Care", code: "BTY" },
    { icon: IconBuildingFactory, name: "Industrial", note: "Packaging & consumables", filter: "Industrial", code: "IND" },
    { icon: IconWheat, name: "Agriculture", note: "Grains & agri commodities", filter: "Grocery", code: "AGR" },
    { icon: IconSun, name: "Seasonal", note: "Festive & seasonal ranges", filter: "All", code: "SSN" },
];

export function Categories() {
    return (
        <section id="categories" className="py-12 md:py-16  bg-surface">
            <div className="shell">
                <SectionHeading
                    eyebrow="Product Categories"
                    title="Fifteen categories, one accountable"
                    highlight="supply partner"
                    description="Consolidate your purchase list instead of chasing a dozen vendors. Mix categories in a single bulk order and receive one invoice, one dispatch, one point of contact."
                />

                <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background">
                    <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
                        {CATEGORIES.map((cat, i) => (
                            <Reveal key={cat.name} delay={(i % 3) * 0.05}>
                                <Link
                                    href={`/products?category=${encodeURIComponent(cat.filter)}`}
                                    className="group flex h-full items-start gap-4 border-b border-border p-6 transition-colors duration-300 last:border-b-0 hover:bg-surface sm:border-b-0"
                                >
                                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                                {String(i + 1).padStart(2, "0")} / {cat.code}
                                            </span>
                                            <IconArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="icon-tile h-11 w-11 shrink-0 transition-transform duration-500 group-hover:scale-105">
                                                <cat.icon className="h-5 w-5" />
                                            </span>
                                            <div className="min-w-0">
                                                <h3 className="truncate text-base font-semibold tracking-[-0.02em] text-foreground">
                                                    {cat.name}
                                                </h3>
                                                <p className="mt-0.5 truncate text-sm text-muted-foreground">
                                                    {cat.note}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}