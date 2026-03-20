import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users, Heart } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Home() {
    const programs = await prisma.program.findMany({
        where: { status: 'ACTIVE' },
        orderBy: { createdAt: "desc" },
        take: 3,
    });

    const getCategoryStyle = (category: string) => {
        switch (category) {
            case "FINANCE": return { color: "bg-growth", icon: <TrendingUp className="w-6 h-6" /> };
            case "TECH": return { color: "bg-primary", icon: <Sparkles className="w-6 h-6" /> };
            case "LEADERSHIP": return { color: "bg-accent", icon: <Users className="w-6 h-6" /> };
            default: return { color: "bg-accent", icon: <Sparkles className="w-6 h-6" /> };
        }
    };
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary text-white pt-32 pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
                    {/* Placeholder for hero image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-full">


                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-outfit font-bold mb-6 leading-tight">
                        Raising <span className="text-white">Financially Intelligent</span> <br className="hidden md:block" />
                        & Purpose-Driven Youth
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-inter">
                        Dedicated to equipping children and teenagers with essential money management skills, a saving culture, budgeting basics, and a wealth-building mindset.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/programs" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                            Learn Financial Skills <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/donate" className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto flex items-center justify-center">
                            Support Financial Literacy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-xl transition-shadow group">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                            <p className="text-slate-600 font-medium italic">Financially Empowered</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-xl transition-shadow group">
                            <div className="w-16 h-16 bg-growth/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-growth/20 transition-colors">
                                <TrendingUp className="w-8 h-8 text-growth" />
                            </div>
                            <h3 className="text-4xl font-bold text-growth mb-2">85%</h3>
                            <p className="text-slate-600 font-medium italic">Financial Knowledge Gained</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-xl transition-shadow group">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                                <Sparkles className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
                            <p className="text-slate-600 font-medium italic">Financial Bootcamps</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission Section */}
            <section className="section-padding bg-slate-50">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
                                    alt="Children learning"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full z-0 animate-pulse"></div>
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-growth/20 rounded-full z-0"></div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Mission</h2>
                            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-primary mb-6 leading-tight">
                                Empowering the Next Generation of <span className="text-growth">Wealth Builders</span>
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-inter">
                                At Capital Bearcub, we believe that every child has the potential to achieve financial independence and transform their community. Our mission is to teach money management, saving, budgeting, and an entrepreneurship mindset to raise responsible young leaders.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { title: "Saving Culture", desc: "Building a foundation for future wealth." },
                                    { title: "Budgeting Basics", desc: "Teaching smart spending and money management." },
                                    { title: "Entrepreneurship", desc: "Nurturing business acumen and value creation." },
                                    { title: "Wealth Building", desc: "Raising purpose-driven, financially conscious leaders." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-growth/10 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-growth"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                                Discover Our Story <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Preview Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">What We Do</h2>
                    <h3 className="text-4xl md:text-5xl font-outfit font-bold text-primary mb-6">Our Core Initiatives</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
                        Tailored programs designed to bridge the gap between education and real-world impact.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.length > 0 ? programs.map((program) => {
                        const style = getCategoryStyle(program.category);
                        return (
                        <div key={program.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                            <div className="h-48 overflow-hidden relative shrink-0">
                                {program.image ? (
                                    <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                        <Sparkles className="w-10 h-10 text-slate-300" />
                                    </div>
                                )}
                                <div className={`absolute top-4 left-4 p-3 rounded-xl text-white shadow-lg ${style.color}`}>
                                    {style.icon}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-2xl font-bold text-primary mb-4">{program.title}</h4>
                                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                                    {program.description}
                                </p>
                                <Link href="/programs" className="text-accent font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    )}) : (
                        <div className="col-span-full py-10 text-center text-slate-500 italic">
                            New programs will be announced soon!
                        </div>
                    )}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/programs" className="btn-outline">
                        View All Programs
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-accent text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8">Ready to Make an Impact?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Whether you want to support our mission, become a mentor, or enroll your child, your journey with Capital Bearcub starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/donate" className="btn-primary bg-white text-primary hover:bg-slate-100 flex items-center justify-center gap-2 text-lg px-12">
                            <Heart className="w-6 h-6 fill-primary" /> Donate Today
                        </Link>
                        <Link href="/get-involved" className="btn-primary bg-primary text-white hover:bg-primary-light text-lg px-12 flex items-center justify-center">
                            Become a Volunteer
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
