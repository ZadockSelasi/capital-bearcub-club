import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Microscope, TrendingUp, Users, Heart, Zap } from "lucide-react";

const programs = [
    {
        id: "early-savers",
        title: "Early Savers Club",
        tagline: "Saving Habits & Basic Budgeting",
        description: "Our foundational program designed to turn passive consumers into proactive savers. Students learn the value of money, basic budgeting, and how to set financial goals.",
        features: [
            "Understanding Money",
            "Goal Setting & Saving",
            "Needs vs. Wants",
            "Basic Budgeting"
        ],
        age: "8 - 12 years",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
        color: "bg-growth",
        icon: <Code className="w-8 h-8" />
    },
    {
        id: "teen-wealth",
        title: "Teen Wealth Builders",
        tagline: "Financial Independence & Wealth Creation",
        description: "Empowering youth with the knowledge to manage, save, and grow wealth. This program bridges the gap between traditional education and real-world financial independence.",
        features: [
            "Wealth Creation Strategies",
            "Investment Basics",
            "Smart Spending Habits",
            "Personal Finance Planning"
        ],
        age: "13 - 19 years",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2611&auto=format&fit=crop",
        color: "bg-primary",
        icon: <TrendingUp className="w-8 h-8" />
    },
    {
        id: "young-entrepreneurs",
        title: "Young Entrepreneurs",
        tagline: "Business Acumen & Value Creation",
        description: "Raising the next generation of business leaders. We combine practical entrepreneurship training with mentorship to help youth understand value creation and business modeling.",
        features: [
            "Business Model Design",
            "Market Research Basics",
            "Pitching Ideas",
            "Peer Mentorship"
        ],
        age: "12 - 19 years",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop",
        color: "bg-accent",
        icon: <Users className="w-8 h-8" />
    },
    {
        id: "financial-outreach",
        title: "Financial Outreach",
        tagline: "Spreading Financial Wisdom Everywhere",
        description: "Our mobile initiative that takes financial literacy training to underserved communities and rural areas across Ghana.",
        features: [
            "Mobile Finance Labs",
            "Rural Literacy Camps",
            "Teacher Training Support",
            "Community Savings Groups"
        ],
        age: "All Ages",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
        color: "bg-growth",
        icon: <Microscope className="w-8 h-8" />
    }
];

export default function ProgramsPage() {
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
                    {programs.map((program, i) => (
                        <div key={program.id} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                            <div className="lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                                    <img
                                        src={program.img}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                                        <div className={`${program.color} p-3 rounded-xl shadow-lg`}>
                                            {program.icon}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Program Area</span>
                                            <h4 className="text-2xl font-bold font-outfit">{program.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className={`absolute -inset-4 ${program.color}/10 rounded-3xl z-0 transform ${i % 2 === 0 ? '-rotate-3' : 'rotate-3'} group-hover:rotate-0 transition-transform duration-500`}></div>
                            </div>

                            <div className="lg:w-1/2">
                                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">{program.tagline}</span>
                                <h3 className="text-4xl font-outfit font-bold text-primary mb-6">{program.title}</h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-inter italic">
                                    "{program.description}"
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {program.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${program.color}`}></div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-8 mb-10 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase text-slate-400 font-bold">Target Age</span>
                                        <span className="text-primary font-bold">{program.age}</span>
                                    </div>
                                    <div className="flex flex-col border-l border-slate-200 pl-8">
                                        <span className="text-xs uppercase text-slate-400 font-bold">Frequency</span>
                                        <span className="text-primary font-bold">Weekly / Bootcamps</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link href="/join" className="btn-primary">
                                        Enroll Now
                                    </Link>
                                    <Link href="/contact" className="btn-outline">
                                        Ask for Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact Reminder */}
            <section className="section-padding bg-growth text-white">
                <div className="container mx-auto text-center">
                    <Zap className="w-12 h-12 mx-auto mb-8 animate-bounce" />
                    <h2 className="text-4xl font-outfit font-bold mb-6">Financial Habits That Last a Lifetime</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
                        Our programs are more than just classes; they are springboards for future wealth builders. Join us in shaping financially responsible leaders of tomorrow.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/impact" className="btn-primary bg-white text-growth hover:bg-slate-100 flex items-center gap-2">
                            See Our Impact <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
