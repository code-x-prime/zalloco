import { z } from "zod";

export const contactSchema = z.object({
    fullName: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),
    companyName: z.string().max(100, "Company name is too long"),
    phone: z
        .string()
        .min(10, "Please enter a valid phone number")
        .max(15, "Phone number is too long")
        .regex(/^[\d\s+\-()]+$/, "Invalid phone number format"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    businessType: z.enum(
        ["wholesale", "retail", "distributor", "dealer", "restaurant", "hotel", "corporate", "other"],
        "Please select a business type",
    ),
    subject: z.enum(
        ["bulk-order", "retail-inquiry", "product-inquiry", "price-request", "general-question", "partnership", "other"],
        "Please select a subject",
    ),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message is too long"),
    privacy: z.literal(true).refine((val) => val === true, {
        message: "You must agree to the privacy policy",
    }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
