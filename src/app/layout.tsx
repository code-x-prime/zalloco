import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Zalloco Industries — Wholesale Distribution",
    description:
        "India's trusted wholesale supplier for grocery, FMCG, household and industrial products. Import, export and bulk distribution.",
    icons: { icon: "/fav.png" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
