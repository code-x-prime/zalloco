export const SITE = {
    company: "Zalloco Industries Private Limited",
    short: "Zalloco Industries",
    email: "Zallocoindustrys@gmail.com",
    phoneDisplay: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    whatsappHref:
        "https://wa.me/919876543210?text=Hello%20Zalloco%20Industries%2C%20I%20would%20like%20a%20wholesale%20quotation.",
    mailtoHref:
        "mailto:Zallocoindustrys@gmail.com?subject=Bulk%20Order%20Enquiry&body=Hello%20Zalloco%20Industries%2C%0A%0AWe%20would%20like%20a%20quotation%20for%20the%20following%20products%3A%0A",
    address: "Corporate Office · Industrial Area, India",
} as const;

export function quoteHref(product: string) {
    return `https://wa.me/919876543210?text=${encodeURIComponent(
        `Hello Zalloco Industries, I would like a wholesale quotation for ${product}.`,
    )}`;
}
