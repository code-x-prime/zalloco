"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import {
    IconSend,
    IconLoader2,
    IconCheck,
    IconAlertTriangle,
    IconChevronDown,
    IconBrandWhatsapp,
    IconMail,
    IconBulb,
    IconHeadset,
    IconPackage,
} from "@tabler/icons-react";
import { contactSchema, type ContactSchema } from "@/validation/contactSchema";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const BUSINESS_TYPES = [
    { value: "wholesale", label: "Wholesale" },
    { value: "retail", label: "Retail" },
    { value: "distributor", label: "Distributor" },
    { value: "dealer", label: "Dealer" },
    { value: "restaurant", label: "Restaurant" },
    { value: "hotel", label: "Hotel" },
    { value: "corporate", label: "Corporate" },
    { value: "other", label: "Other" },
];

const SUBJECTS = [
    { value: "bulk-order", label: "Bulk Order" },
    { value: "retail-inquiry", label: "Retail Inquiry" },
    { value: "product-inquiry", label: "Product Inquiry" },
    { value: "price-request", label: "Price Request" },
    { value: "general-question", label: "General Question" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Other" },
];

const WHY_CONTACT = [
    { icon: IconBulb, title: "Quick Response", desc: "We reply within 24 hours" },
    { icon: IconHeadset, title: "Trusted Support", desc: "Dedicated account managers" },
    { icon: IconPackage, title: "Bulk Orders", desc: "Special pricing for volume" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

function SelectField({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">{label}</label>
            <div className="relative">
                {children}
                <IconChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}

export function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "",
            companyName: "",
            phone: "",
            email: "",
            businessType: undefined,
            subject: undefined,
            message: "",
        },
    });

    const onSubmit = async (data: ContactSchema) => {
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok || !json.success) {
                throw new Error(json.message || "Something went wrong");
            }
            setStatus("success");
            reset();
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
        }
    };

    const inputBase =
        "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-primary/20";

    return (
        <section className="section-pad bg-background">
            <div className="shell">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                    {/* ─── LEFT: Form ─── */}
                    <Reveal>
                        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
                            <h2 className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                                Send Us an Inquiry
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Fill in the details below and our team will get back to you.
                            </p>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                                            className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white"
                                        >
                                            <IconCheck size={32} stroke={2.5} />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-green-700">
                                            Your inquiry has been successfully submitted.
                                            <br />
                                            We will contact you shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-6 text-sm font-semibold text-green-700 underline transition hover:text-green-900"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </motion.div>
                                ) : status === "error" ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                                            className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-red-500 text-white"
                                        >
                                            <IconAlertTriangle size={28} stroke={2} />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-red-800">Oops!</h3>
                                        <p className="mt-2 text-sm text-red-700">{errorMsg}</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-4 rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                                        >
                                            Try Again
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-8 space-y-5"
                                        noValidate
                                    >
                                        {/* Name + Company */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                                                    Full Name *
                                                </label>
                                                <input
                                                    {...register("fullName")}
                                                    placeholder="John Doe"
                                                    className={`${inputBase} ${errors.fullName ? "border-red-500 focus:ring-red-500/20" : "border-border"}`}
                                                />
                                                {errors.fullName && (
                                                    <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                                                    Company Name
                                                </label>
                                                <input
                                                    {...register("companyName")}
                                                    placeholder="Your Company Pvt Ltd"
                                                    className={`${inputBase} border-border`}
                                                />
                                            </div>
                                        </div>

                                        {/* Phone + Email */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    {...register("phone")}
                                                    placeholder="+91 98765 43210"
                                                    className={`${inputBase} ${errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-border"}`}
                                                />
                                                {errors.phone && (
                                                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                                                    Email Address *
                                                </label>
                                                <input
                                                    {...register("email")}
                                                    type="email"
                                                    placeholder="you@company.com"
                                                    className={`${inputBase} ${errors.email ? "border-red-500 focus:ring-red-500/20" : "border-border"}`}
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Business Type + Subject */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <SelectField label="Business Type *" error={errors.businessType?.message}>
                                                <select
                                                    {...register("businessType")}
                                                    className={`${inputBase} appearance-none pr-10 ${errors.businessType ? "border-red-500" : "border-border"}`}
                                                >
                                                    <option value="">Select type</option>
                                                    {BUSINESS_TYPES.map((bt) => (
                                                        <option key={bt.value} value={bt.value}>
                                                            {bt.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </SelectField>

                                            <SelectField label="Subject *" error={errors.subject?.message}>
                                                <select
                                                    {...register("subject")}
                                                    className={`${inputBase} appearance-none pr-10 ${errors.subject ? "border-red-500" : "border-border"}`}
                                                >
                                                    <option value="">Select subject</option>
                                                    {SUBJECTS.map((s) => (
                                                        <option key={s.value} value={s.value}>
                                                            {s.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </SelectField>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="mb-1.5 block text-sm font-semibold text-foreground">
                                                Message *
                                            </label>
                                            <textarea
                                                {...register("message")}
                                                rows={5}
                                                placeholder="Tell us about your requirements..."
                                                className={`${inputBase} resize-none ${errors.message ? "border-red-500 focus:ring-red-500/20" : "border-border"}`}
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                                            )}
                                        </div>

                                        {/* Privacy */}
                                        <div>
                                            <label className="flex items-start gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    {...register("privacy")}
                                                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                                                />
                                                <span className="text-sm text-muted-foreground">
                                                    I agree to the{" "}
                                                    <span className="font-semibold text-primary">privacy policy</span>{" "}
                                                    and consent to being contacted regarding my inquiry.
                                                </span>
                                            </label>
                                            {errors.privacy && (
                                                <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>
                                            )}
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-base btn-primary w-full text-base"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <IconLoader2 size={18} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <IconSend size={18} />
                                                    Send Inquiry
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>

                    {/* ─── RIGHT: Illustration + Info ─── */}
                    <Reveal delay={0.15}>
                        <div className="flex flex-col gap-8">
                            {/* Illustration placeholder */}
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B4A8B] to-[#2F80ED] p-10 text-white">
                                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10" />
                                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold tracking-[-0.02em]">Zalloco Industries</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                                        Your trusted partner for wholesale distribution across India.
                                    </p>
                                    <div className="mt-6 space-y-3">
                                        <p className="flex items-center gap-2 text-sm text-white/80">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            Serving 500+ businesses
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-white/80">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            10,000+ products available
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-white/80">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            Pan-India delivery
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Why Contact Us */}
                            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                                <h4 className="mb-5 text-lg font-bold text-foreground">Why Contact Us?</h4>
                                <div className="space-y-4">
                                    {WHY_CONTACT.map((item) => (
                                        <div key={item.title} className="flex items-start gap-4">
                                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                                                <item.icon size={20} stroke={2} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick contact buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={SITE.whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-base btn-whatsapp flex-1"
                                >
                                    <IconBrandWhatsapp size={18} />
                                    WhatsApp
                                </a>
                                <a href={SITE.mailtoHref} className="btn-base btn-ghost flex-1">
                                    <IconMail size={18} />
                                    Email
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
