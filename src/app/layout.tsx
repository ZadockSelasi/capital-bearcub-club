import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Capital Bearcub | Empowering Future Leaders through Tech & Literacy",
    description: "Capital Bearcub is a youth-focused NGO dedicated to empowering children and teenagers through tech education, financial literacy, and leadership development in Ghana.",
    keywords: ["NGO", "Ghana", "Youth Empowerment", "Tech Education", "Financial Literacy", "Leadership"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased font-inter`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
