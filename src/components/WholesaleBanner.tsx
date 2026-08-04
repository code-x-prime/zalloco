import { IconMessageCircle, IconFileText } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function WholesaleBanner() {
    return (
        <section className="section-pad">
            <div className="shell">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] gradient-deep px-8 py-16 sm:px-14 lg:px-20 lg:py-24">
                        <div aria-hidden className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
                            <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
                            <div className="absolute right-10 top-10 h-56 w-56 rounded-full border border-primary-foreground/20" />
                            <div className="absolute right-28 top-24 h-56 w-56 rounded-full border border-primary-foreground/10" />
                        </div>

                        <div className="relative max-w-2xl">
                            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
                                Bulk Supply
                            </span>
                            <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-primary-foreground sm:text-4xl lg:text-5xl">
                                Wholesale &amp; Bulk Orders
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                                Supply across India — container loads, mixed pallets and recurring monthly contracts
                                for distributors, retail chains, hotels and institutional buyers. Custom packing,
                                private labelling and scheduled replenishment available on request.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-4">
                                <a href={SITE.mailtoHref} className="btn-base btn-invert !px-7 !py-4">
                                    <IconFileText className="h-4 w-4" />
                                    Request Quote
                                </a>
                                <a
                                    href={SITE.whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-base btn-outline-light !px-7 !py-4"
                                >
                                    <IconMessageCircle className="h-4 w-4" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
