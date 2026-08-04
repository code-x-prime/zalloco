export type BusinessType =
    | "wholesale"
    | "retail"
    | "distributor"
    | "dealer"
    | "restaurant"
    | "hotel"
    | "corporate"
    | "other";

export type Subject =
    | "bulk-order"
    | "retail-inquiry"
    | "product-inquiry"
    | "price-request"
    | "general-question"
    | "partnership"
    | "other";

export interface ContactFormData {
    fullName: string;
    companyName: string;
    phone: string;
    email: string;
    businessType: BusinessType;
    subject: Subject;
    message: string;
    privacy: boolean;
}

export interface ContactApiResponse {
    success: boolean;
    message: string;
}
