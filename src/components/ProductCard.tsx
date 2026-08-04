"use client";

import { motion } from "motion/react";
import { IconMessageCircle, IconPhone } from "@tabler/icons-react";
import { quoteHref, SITE } from "@/lib/site";

export interface ProductItem {
    name: string;
    category: string;
    price: string;
    unit: string;
    img: string;
    desc: string;
    moq: string;
    code?: string;
}

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

interface ProductCardProps {
    product: ProductItem;
    index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
    const formattedUnit = product.unit.startsWith("/") ? product.unit : `/${product.unit}`;
    const productCode =
        product.code ??
        `${CATEGORY_CODE[product.category] ?? "GEN"}-${String(index + 1).padStart(2, "0")}`;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 8) * 0.03, duration: 0.35 }}
            className="card-surface group flex h-full flex-col overflow-hidden"
        >
            <div className="relative overflow-hidden bg-surface">
                <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.1em] text-primary backdrop-blur">
                    {productCode}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug tracking-[-0.01em] text-foreground line-clamp-1 transition-colors group-hover:text-primary">
                        {product.name}
                    </h3>
                    <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                        {product.category}
                    </span>
                </div>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {product.desc}
                </p>

                <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
                    <div>
                        <span className="block text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                            Rate
                        </span>
                        <span className="text-base font-bold text-primary">
                            {product.price}
                            <span className="text-xs font-medium text-muted-foreground"> {formattedUnit}</span>
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                            MOQ
                        </span>
                        <span className="font-mono text-xs font-semibold text-foreground">{product.moq}</span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                    <a
                        href={quoteHref(product.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] px-3 py-2.5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition hover:-translate-y-0.5"
                    >
                        <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4 object-contain shrink-0" />
                        WhatsApp
                    </a>

                    <a
                        href={SITE.phoneHref}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                        <IconPhone size={14} />
                        Call
                    </a>
                </div>
            </div>
        </motion.article>
    );
}
