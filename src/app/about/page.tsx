import React from "react";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Zap, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Header */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Our Story</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
                        Empowering the next generation of financially savvy African leaders, one child at a time.
                    </p>
                </div>
            </section>

            {/* Founder's Story Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/founder.jpg"
                                    alt="Zadock Ablekpe Selasi - Founder of Capital Bearcub"
                                    className="w-full h-[600px] object-cover object-top"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-8 text-white">
                                    <h4 className="text-2xl font-bold font-outfit">Zadock Ablekpe Selasi</h4>
                                    <p className="opacity-90">Founder, Capital Bearcub</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-outfit font-bold text-primary mb-8">Inspired by Potential</h2>
                            <div className="space-y-6 text-lg text-slate-600 font-inter">
                                <p>
                                    Capital Bearcub was born out of a simple observation: the immense, untapped brilliance in Ghana's youth. Seeing children with incredible potential but lacking the foundational financial literacy, understanding of wealth creation, and money management skills to secure their future, we decided to act.
                                </p>
                                <p>
                                    What started as a small neighborhood initiative has grown into a community of young investors, mentors, and future entrepreneurs. We believe that by giving youth the right tools—budgeting basics, financial wisdom, and leadership skills—we can ignite a transformation that goes beyond their individual lives and impacts the entire nation.
                                </p>
                                <blockquote className="border-l-4 border-growth pl-6 py-2 italic text-primary font-bold text-2xl">
                                    "Our goal isn't just to teach about money; it's to raise purpose-driven leaders who use financial intelligence to build generational wealth and uplift their communities."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="section-padding bg-slate-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-outfit font-bold text-primary mb-6">Our Vision</h3>
                        <p className="text-lg text-slate-600 leading-relaxed italic">
                            To see a world where every young person, regardless of their background, is financially empowered, wealth-conscious, and equipped to solve global challenges with creativity, integrity, and sound financial judgment.
                        </p>
                    </div>

                    <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 bg-growth/10 rounded-2xl flex items-center justify-center mb-8">
                            <Target className="w-8 h-8 text-growth" />
                        </div>
                        <h3 className="text-3xl font-outfit font-bold text-primary mb-6">Our Mission</h3>
                        <p className="text-lg text-slate-600 leading-relaxed italic">
                            To empower children and teenagers through practical financial literacy training, teaching saving, budgeting, and entrepreneurship, alongside mentorship-led leadership development to build resilient, wealth-conscious communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">What Guides Us</h2>
                    <h3 className="text-4xl md:text-5xl font-outfit font-bold text-primary mb-6">Our Core Values</h3>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Empowerment", desc: "We provide financial education; they build their wealth.", icon: <Sparkles className="w-6 h-6" /> },
                        { title: "Integrity", desc: "Honesty and transparency in all financial dealings.", icon: <Heart className="w-6 h-6" /> },
                        { title: "Financial Independence", desc: "Teaching skills for lifelong financial security and freedom.", icon: <Target className="w-6 h-6" /> },
                        { title: "Community", desc: "We go further when we build wealth together.", icon: <Users className="w-6 h-6" /> }
                    ].map((value, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-accent hover:shadow-lg transition-all text-center">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-accent">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                            <p className="text-slate-500 italic text-sm">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-outfit font-bold mb-8 italic">Be a Part of the Story</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/get-involved" className="btn-secondary px-12 py-4 text-lg">
                            Support Financial Literacy
                        </Link>
                        <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-12 py-4 text-lg">
                            Become a Financial Mentor
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
