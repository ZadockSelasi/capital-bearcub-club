"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                                        <p className="text-slate-500 italic">capitalbearcub@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl mb-1">Call Us</h4>
                                        <p className="text-slate-500 italic">+233 53 253 9051</p>
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
                                    <a href="https://www.facebook.com/share/1EEBjbZq7v/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/capitalbearcub?igsh=Zm1zZDFueDFhNGw4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.tiktok.com/@capitalbearcub?_r=1&_t=ZS-94jvx0FFdNl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const data = Object.fromEntries(formData);

                                    setFormStatus('loading');
                                    try {
                                        const res = await fetch('/api/contact', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(data),
                                        });
                                        if (res.ok) setFormStatus('success');
                                        else setFormStatus('error');
                                    } catch (err) {
                                        setFormStatus('error');
                                    } finally {
                                        setTimeout(() => setFormStatus('idle'), 5000);
                                    }
                                }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="Tell us about your interest..."
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'loading'}
                                    className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 group disabled:opacity-50"
                                >
                                    {formStatus === 'loading' ? (
                                        "Sending..."
                                    ) : formStatus === 'success' ? (
                                        "Message Sent!"
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-time Map */}
            <section className="h-[400px] w-full relative bg-slate-200">
                <iframe
                    title="Capital Bearcub Location"
                    src="https://maps.google.com/maps?q=Accra%20Digital%20Centre,%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </section>
        </main>
    );
}
