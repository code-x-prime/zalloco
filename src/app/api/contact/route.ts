import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/validation/contactSchema";
import { sendEmail } from "@/lib/nodemailer";
import { adminEmailTemplate, autoReplyTemplate } from "@/lib/emailTemplates";
import type { ContactApiResponse } from "@/types/contact";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            const firstError = parsed.error.issues[0]?.message || "Invalid form data";
            return NextResponse.json<ContactApiResponse>(
                { success: false, message: firstError },
                { status: 400 },
            );
        }

        const d = parsed.data;
        const now = new Date();
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
        const browser = req.headers.get("user-agent") || "unknown";

        const businessLabels: Record<string, string> = {
            wholesale: "Wholesale",
            retail: "Retail",
            distributor: "Distributor",
            dealer: "Dealer",
            restaurant: "Restaurant",
            hotel: "Hotel",
            corporate: "Corporate",
            other: "Other",
        };

        const subjectLabels: Record<string, string> = {
            "bulk-order": "Bulk Order",
            "retail-inquiry": "Retail Inquiry",
            "product-inquiry": "Product Inquiry",
            "price-request": "Price Request",
            "general-question": "General Question",
            partnership: "Partnership",
            other: "Other",
        };

        const adminHtml = adminEmailTemplate({
            fullName: d.fullName,
            companyName: d.companyName,
            phone: d.phone,
            email: d.email,
            businessType: businessLabels[d.businessType] || d.businessType,
            subject: subjectLabels[d.subject] || d.subject,
            message: d.message,
            date: now.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
            ip,
            browser,
        });

        const autoReplyHtml = autoReplyTemplate({
            fullName: d.fullName,
            companyName: d.companyName,
            phone: d.phone,
            email: d.email,
            businessType: businessLabels[d.businessType] || d.businessType,
            subject: subjectLabels[d.subject] || d.subject,
            message: d.message,
        });

        await Promise.all([
            sendEmail({
                to: process.env.MAIL_TO!,
                subject: `[Zalloco Website] New ${subjectLabels[d.subject] || d.subject} Inquiry — ${d.fullName}`,
                html: adminHtml,
                replyTo: d.email,
            }),
            sendEmail({
                to: d.email,
                subject: "Thank You For Contacting Zalloco Industries",
                html: autoReplyHtml,
            }),
        ]);

        return NextResponse.json<ContactApiResponse>({
            success: true,
            message: "Your inquiry has been submitted successfully. We will contact you shortly.",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json<ContactApiResponse>(
            { success: false, message: "Something went wrong. Please try again later." },
            { status: 500 },
        );
    }
}
