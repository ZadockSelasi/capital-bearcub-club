"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Capital Bearcub Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                    <span className={`text-2xl font-outfit font-bold ${scrolled ? "text-primary" : "text-white"}`}>
                        Capital<span className="text-accent underline decoration-2 underline-offset-4">Bearcub</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold hover:text-accent transition-colors ${scrolled ? "text-primary" : "text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="btn-secondary px-6 py-2 flex items-center gap-2 text-sm shadow-none">
                        <Heart className="w-4 h-4 fill-white" /> Donate
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-0 h-screen w-full bg-white z-[60] transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Image src="/logo.png" alt="Capital Bearcub Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                            <span className="text-2xl font-outfit font-bold text-primary">
                                Capital<span className="text-accent">Bearcub</span>
                            </span>
                        </Link>
                        <button className="text-primary" onClick={() => setIsOpen(false)}>
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-outfit font-bold text-primary hover:text-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <button className="btn-secondary w-full py-4 text-lg flex items-center justify-center gap-2">
                            <Heart className="w-5 h-5 fill-white" /> Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
