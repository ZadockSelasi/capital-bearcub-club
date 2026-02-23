"use client";

import React from "react";
import { ArrowRight, BarChart, Globe, Heart, Quote, Users } from "lucide-react";
import CountUp from "react-countup";
import Link from "next/link";

const stats = [
    { label: "Lives Touched", value: 5000, suffix: "+", icon: <Users className="w-6 h-6" /> },
    { label: "Savings Clubs Started", value: 45, suffix: "", icon: <Globe className="w-6 h-6" /> },
    { label: "Micro-Businesses Launched", value: 120, suffix: "+", icon: <BarChart className="w-6 h-6" /> },
    { label: "Volunteers", value: 300, suffix: "+", icon: <Heart className="w-6 h-6" /> },
];

const testimonials = [
    {
        name: "Kwame Mensah",
        age: "16",
        text: "The Early Savers Club changed my life. I never thought I could save money consistently, but now I have my own savings account and budget for my needs.",
        program: "Early Savers Club",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop"
    },
    {
        name: "Abena Osei",
        age: "14",
        text: "Teen Wealth Builders taught me the value of investing and how to start a small business. I've already started a jewelry brand with what I learned!",
        program: "Teen Wealth Builders",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop"
    }
];

export default function ImpactPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Our Impact</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
                        Measurable results, financial growth, and a sustainable wealth-building future for Ghana's youth.
                    </p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-primary mb-2 font-outfit">
                                    <CountUp end={stat.value} duration={2.5} separator="," />{stat.suffix}
                                </div>
                                <p className="text-slate-500 font-inter font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative Impact */}
            <section className="section-padding bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8">Beyond Numbers</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8 font-inter">
                                Impact isn't just about how many children we reach; it's about the financial habits we instill. We track secondary metrics like savings rates, business creation, and financial confidence to ensure our impact is holistic and generational.
                            </p>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <span>92% Program Graduates Maintain Active Savings</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <span>$50,000+ Seed Funding Raised for Youth Startups</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <span>10+ Community Savings Hubs Established</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Impact 1" />
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop" className="rounded-2xl shadow-lg mt-8" alt="Impact 2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Success Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-outfit font-bold text-primary">Voices of the Future</h3>
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-12 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center text-left hover:border-growth transition-all group">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <Quote className="w-8 h-8 text-growth/20 mb-4" />
                                <p className="text-xl text-slate-600 mb-6 italic leading-relaxed">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{t.name}, {t.age}</h4>
                                    <p className="text-growth font-medium text-sm">{t.program}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transparency CTA */}
            <section className="py-20 bg-slate-900 text-white text-center rounded-t-[4rem]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-outfit font-bold mb-6">Committed to Transparency</h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                        We believe in complete accountability. Download our latest transparency report to see exactly how your contributions are making a difference.
                    </p>
                    <button className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
                        Download 2024 Impact Report (PDF)
                    </button>
                </div>
            </section>
        </main>
    );
}
