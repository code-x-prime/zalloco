"use client";
import { FAQ } from "@/components/FAQ";

const CONTACT_FAQS = [
    {
        q: "How do I place a wholesale or bulk order?",
        a: "You can reach us via the contact form, WhatsApp, or email. Share your requirements and our sales team will provide a customized quotation with the best wholesale pricing.",
    },
    {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ varies by product category. For grocery staples it is typically 100 units, while for specialty items it may be lower. Contact us with your specific needs and we will find the best solution.",
    },
    {
        q: "Do you ship across India?",
        a: "Yes. We deliver pan-India through our logistics network. We also handle export orders for international buyers. Shipping costs depend on order size and destination.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers (NEFT/RTGS/IMPS), UPI, demand drafts, and verified cheques. For repeat partners we also offer credit terms subject to approval.",
    },
    {
        q: "Can I get product samples before ordering?",
        a: "Yes. We provide product samples for quality evaluation. Sample charges may apply for certain categories, which are adjusted against your first bulk order.",
    },
    {
        q: "How can I become a distributor or dealer?",
        a: "We are always looking for distribution partners. Select 'Partnership' in the subject field above or email us with your business profile, territory, and current portfolio. Our team will review and get back to you.",
    },
];

export function ContactFAQ() {
    return (
        <FAQ
            eyebrow="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            description="Find quick answers to common questions about ordering, shipping, and partnerships."
            items={CONTACT_FAQS}
        />
    );
}
