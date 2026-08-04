import { IconMail, IconMessageCircle, IconPhone } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function ContactCTA() {
    return (
        <section id="contact" className="section-pad">
            <div className="shell">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background px-8 py-16 text-center shadow-[var(--shadow-card)] sm:px-14 lg:py-24">
                        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute inset-0 grid-lines opacity-70" />
                            <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
                        </div>

                        <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Get in touch
                        </span>
                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                            Need Bulk Products?
                            <br />
                            <span className="text-gradient">Let&apos;s Grow Together.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                            Send us your requirement list and we will revert within one working day with bulk
                            rates, packing options and a delivery schedule for your location.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a href={SITE.mailtoHref} className="btn-base btn-primary !px-7 !py-4">
                                <IconMail className="h-4 w-4" />
                                Email Us
                            </a>
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-base btn-whatsapp !px-7 !py-4"
                            >
                                <IconMessageCircle className="h-4 w-4" />
                                WhatsApp
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                            <a
                                href={`mailto:${SITE.email}`}
                                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                            >
                                <IconMail className="h-4 w-4 text-accent" />
                                {SITE.email}
                            </a>
                            <a
                                href={SITE.phoneHref}
                                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                            >
                                <IconPhone className="h-4 w-4 text-accent" />
                                {SITE.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
