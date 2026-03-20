import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Microscope, TrendingUp, Users, Heart, Zap, Sparkles } from "lucide-react";
import EnrollmentButtonWrapper from "@/components/EnrollmentButtonWrapper";
import { prisma } from "@/lib/prisma";

export default async function ProgramsPage() {
    const programs = await prisma.program.findMany({
        where: { status: 'ACTIVE' },
        orderBy: { createdAt: "desc" }
    });

    const getCategoryStyle = (category: string) => {
        switch (category) {
            case "FINANCE": return { color: "bg-growth", icon: <TrendingUp className="w-8 h-8 text-white" /> };
            case "TECH": return { color: "bg-primary", icon: <Code className="w-8 h-8 text-white" /> };
            case "LEADERSHIP": return { color: "bg-accent", icon: <Users className="w-8 h-8 text-white" /> };
            default: return { color: "bg-accent", icon: <Sparkles className="w-8 h-8 text-white" /> };
        }
    };

    return (
        <main className="min-h-screen pt-20">

            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Our Programs</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Transformative learning experiences designed to equip Ghana's youth with essential financial skills for the future.
                    </p>
                </div>
            </section>

            {/* Programs List */}
            <section className="section-padding bg-white">
                <div className="container mx-auto space-y-32">
                    {programs.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 italic text-xl">
                            New programs scaling soon. Stay tuned!
                        </div>
                    ) : programs.map((program, i) => {
                        const style = getCategoryStyle(program.category);
                        return (
                        <div key={program.id} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                            <div className="lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                                    {program.image ? (
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                            <Sparkles className="w-16 h-16 text-slate-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                                        <div className={`${style.color} p-3 rounded-xl shadow-lg`}>
                                            {style.icon}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold uppercase tracking-widest opacity-80">{program.category}</span>
                                            <h4 className="text-2xl font-bold font-outfit">{program.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className={`absolute -inset-4 ${style.color}/10 rounded-3xl z-0 transform ${i % 2 === 0 ? '-rotate-3' : 'rotate-3'} group-hover:rotate-0 transition-transform duration-500`}></div>
                            </div>

                            <div className="lg:w-1/2">
                                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">{program.category} Program</span>
                                <h3 className="text-4xl font-outfit font-bold text-primary mb-6">{program.title}</h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-inter italic">
                                    "{program.description}"
                                </p>

                                <div className="flex items-center gap-8 mb-10 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase text-slate-400 font-bold">Target Age</span>
                                        <span className="text-primary font-bold">All Ages</span>
                                    </div>
                                    <div className="flex flex-col border-l border-slate-200 pl-8">
                                        <span className="text-xs uppercase text-slate-400 font-bold">Frequency</span>
                                        <span className="text-primary font-bold">Ongoing</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <EnrollmentButtonWrapper 
                                        type="PROGRAM"
                                        targetId={program.id}
                                        targetTitle={program.title}
                                    />
                                    <Link href="/contact" className="btn-outline">
                                        Ask for Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </section>

            {/* Impact Reminder */}
            <section className="relative section-padding bg-growth text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-growth/90 to-growth"></div>
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2520&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Zap className="w-12 h-12 mx-auto mb-8 animate-bounce text-white/50" />
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Financial Habits That Last a Lifetime</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90 font-inter font-medium italic">
                        "Our programs are more than just classes; they are springboards for future wealth builders. Join us in shaping financially responsible leaders of tomorrow."
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/impact" className="btn-secondary bg-white text-growth hover:bg-slate-50 shadow-xl flex items-center gap-2 group">
                            See Our Impact <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
