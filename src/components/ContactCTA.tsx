import { IconMail, IconMessageCircle, IconPhone } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function ContactCTA() {
    return (
        <section id="contact" className="py-12 md:py-16">
            <div className="shell">
                <Reveal>
                    <div className="grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[var(--shadow-card)] lg:grid-cols-[1.2fr_1fr]">
                        <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12 lg:py-16">
                            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-40" />

                            <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-muted-foreground">
                                ENQ.01 / OPEN AN ENQUIRY
                            </span>
                            <h2 className="mt-4 max-w-md text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                                Need bulk products?
                                <br />
                                <span className="text-gradient">Let&apos;s grow together.</span>
                            </h2>
                            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                                Send your requirement list and we&apos;ll revert within one working day with
                                bulk rates, packing options and a delivery schedule for your location.
                            </p>

                            <div className="mt-8 flex items-center gap-6 border-t border-border pt-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Reply within 1 working day
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-6 border-t border-dashed border-border bg-surface px-8 py-12 sm:px-12 lg:border-l lg:border-t-0">
                            <div className="flex flex-col gap-3">
                                <a href={SITE.mailtoHref} className="btn-base btn-primary w-full !py-4">
                                    <IconMail className="h-4 w-4" />
                                    Email Us
                                </a>
                                <a
                                    href={SITE.whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-base btn-whatsapp w-full !py-4"
                                >
                                    <IconMessageCircle className="h-4 w-4" />
                                    WhatsApp
                                </a>
                            </div>

                            <div className="flex flex-col gap-4 border-t border-border pt-6">
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="flex items-center justify-between gap-3 text-sm text-foreground transition-colors hover:text-primary"
                                >
                                    <span className="flex items-center gap-2 text-muted-foreground">
                                        <IconMail className="h-4 w-4 text-accent" />
                                        Email
                                    </span>
                                    <span className="truncate font-medium">{SITE.email}</span>
                                </a>
                                <a
                                    href={SITE.phoneHref}
                                    className="flex items-center justify-between gap-3 text-sm text-foreground transition-colors hover:text-primary"
                                >
                                    <span className="flex items-center gap-2 text-muted-foreground">
                                        <IconPhone className="h-4 w-4 text-accent" />
                                        Phone
                                    </span>
                                    <span className="font-medium">{SITE.phoneDisplay}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}