export const SITE = {
    company: "Zalloco Industries Private Limited",
    short: "Zalloco Industries",
    cin: "U47219*************46",
    gstin: "03A********1Z3",
    email: "Zallocoindustrys@gmail.com",
    secondaryEmail: "satgurunanak1313@gmail.com",
    phoneDisplay: "+91-84372-13143",
    phoneHref: "tel:+918437213143",
    whatsappHref:
        "https://wa.me/918437213143?text=Hello%20Zalloco%20Industries%2C%20I%20would%20like%20a%20wholesale%20quotation.",
    mailtoHref:
        "mailto:Zallocoindustrys@gmail.com?subject=Bulk%20Order%20Enquiry&body=Hello%20Zalloco%20Industries%2C%0A%0AWe%20would%20like%20a%20quotation%20for%20the%20following%20products%3A%0A",
    address: "MOHIE, LUDHIANA-141103 (Punjab) India",
    officeHours: "Office Open 9:00 AM TO 5:00 PM (SUNDAY CLOSED)",
} as const;

export function quoteHref(product: string) {
    return `https://wa.me/918437213143?text=${encodeURIComponent(
        `Hello Zalloco Industries, I would like a wholesale quotation for ${product}.`,
    )}`;
}


