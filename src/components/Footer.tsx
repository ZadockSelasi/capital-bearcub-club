import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Capital Bearcub Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                            <span className="text-2xl font-outfit font-bold text-white">
                                Capital<span className="text-accent">Bearcub</span>
                            </span>
                        </Link>
                        <p className="text-white/70 leading-relaxed font-inter italic">
                            Empowering Ghana's youth through financial literacy, entrepreneurship, and wealth-creation to build a better future.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold font-outfit text-accent">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-white/70 font-inter">
                            <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
                            <li><Link href="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
                            <li><Link href="/impact" className="hover:text-accent transition-colors">Our Impact</Link></li>
                            <li><Link href="/get-involved" className="hover:text-accent transition-colors">Get Involved</Link></li>
                            <li><Link href="/events" className="hover:text-accent transition-colors">Events</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold font-outfit text-accent">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-white/70 font-inter">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span>Accra, Ghana</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+233 XX XXX XXXX</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>hello@capitalbearcub.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold font-outfit text-accent">Stay Updated</h4>
                        <p className="text-white/70 font-inter text-sm italic">
                            Join our newsletter to receive updates on our impact and upcoming events.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-accent transition-colors text-white placeholder:text-white/40"
                            />
                            <button className="btn-secondary w-full py-3 shadow-none">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>© {new Date().getFullYear()} Capital Bearcub. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
