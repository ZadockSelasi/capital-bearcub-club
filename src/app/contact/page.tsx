import React from "react";
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
                        Have questions about our programs, partnerships, or how to support our mission? We're here to help.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl font-outfit font-bold text-primary mb-8">Contact Information</h2>
                            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                                We're headquartered in the heart of Accra, but our reach extends across Ghana and beyond. Reach out to our team today.
                            </p>

                            <div className="space-y-8 mb-16">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl mb-1">Our Location</h4>
                                        <p className="text-slate-500 italic">Accra Digital Centre, Circle-Kokomlemle, Accra, Ghana</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-growth/10 flex items-center justify-center shrink-0 group-hover:bg-growth group-hover:text-white transition-all text-growth">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl mb-1">Email Us</h4>
                                        <p className="text-slate-500 italic">hello@capitalbearcub.org<br />support@capitalbearcub.org</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl mb-1">Call Us</h4>
                                        <p className="text-slate-500 italic">+233 53 253 9051<br />+233 xxx xxx</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h5 className="font-bold text-primary mb-6 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-accent"></span>
                                    Follow Our Journey
                                </h5>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl">
                            <h3 className="text-3xl font-outfit font-bold text-primary mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Name</label>
                                        <input type="text" placeholder="Your full name" className="bg-white border-0 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-inter shadow-sm" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                                        <input type="email" placeholder="Email address" className="bg-white border-0 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-inter shadow-sm" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Subject</label>
                                    <select className="bg-white border-0 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-inter shadow-sm appearance-none cursor-pointer">
                                        <option>General Inquiry</option>
                                        <option>Financial Partnership</option>
                                        <option>Program Enrollment</option>
                                        <option>Donation Question</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                                    <textarea rows={6} placeholder="How can we help you?" className="bg-white border-0 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-inter shadow-sm resize-none"></textarea>
                                </div>

                                <button className="btn-primary w-full py-4 text-lg shadow-xl shadow-primary/10 flex items-center justify-center gap-3 group">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop')]"></div>
                <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl animate-bounce">
                        <MapPin className="w-10 h-10 text-accent" />
                    </div>
                </div>
            </section>
        </main>
    );
}
