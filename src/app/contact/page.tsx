import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFAQ } from "@/components/contact/FAQ";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Contact Us — Zalloco Industries",
    description:
        "Get in touch with Zalloco Industries for wholesale, bulk order, distribution and partnership inquiries. Call, email or WhatsApp us today.",
    keywords: [
        "contact zalloco",
        "wholesale inquiry",
        "bulk order india",
        "zalloco industries contact",
        "distributor inquiry",
    ],
    openGraph: {
        title: "Contact Us — Zalloco Industries",
        description:
            "Reach out for wholesale, bulk order and partnership inquiries. We respond within 24 hours.",
        type: "website",
    },
};

const MAP_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Zalloco Industries",
    url: "https://zalloco.com/contact",
    mainEntity: {
        "@type": "Organization",
        name: SITE.company,
        email: SITE.email,
        telephone: SITE.phoneDisplay,
        address: {
            "@type": "PostalAddress",
            addressLocality: "India",
            addressCountry: "IN",
        },
    },
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="CONTACT US"
                title="Let's Build"
                highlight="Business Together"
                description="We are always ready for wholesale, retail and bulk inquiries. Reach out and let's discuss how we can serve your business."
            />
            <ContactInfo />
            <ContactForm />

            {/* Map Section */}
            <section className="py-12 md:py-16  bg-background">
                <div className="shell">
                    <SectionHeading
                        eyebrow="Location"
                        title="Find Us on the"
                        highlight="Map"
                    />
                    <Reveal className="mt-12">
                        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Zalloco Industries office location"
                                className="h-[300px] w-full sm:h-[400px]"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            <ContactFAQ />

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#0B4A8B] to-[#2F80ED] py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/5" />
                    <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/[0.03]" />
                </div>
                <div className="shell relative z-10 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                            Need Wholesale Products?
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-base text-white/65">
                            Let&apos;s work together. Whether you need bulk groceries, FMCG products, or industrial supplies — we have you covered.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href={SITE.whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-base btn-whatsapp"
                            >
                                <IconBrandWhatsapp size={18} />
                                WhatsApp Us
                            </a>
                            <a href={SITE.mailtoHref} className="btn-base btn-outline-light">
                                <IconMail size={18} />
                                Send Email
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(MAP_SCHEMA) }}
            />
        </>
    );
}
