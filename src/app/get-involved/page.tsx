import React from "react";
import { ArrowRight, Gift, Handshake, Heart, UserPlus } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="section-padding bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-outfit font-bold mb-6">Be the Change</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Your support fuels our mission. Whether you have financial expertise, resources, or a passion for teaching money management, there's a place for you at Capital Bearcub.
                    </p>
                </div>
            </section>

            {/* Options Grid */}
            <section className="section-padding bg-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        {
                            title: "Volunteer",
                            desc: "Become a financial mentor or wealth-building facilitator.",
                            icon: <UserPlus className="w-8 h-8" />,
                            color: "text-blue-500",
                            bgColor: "bg-blue-50"
                        },
                        {
                            title: "Donate",
                            desc: "Provide resources for our financial bootcamps and savings initiatives.",
                            icon: <Gift className="w-8 h-8" />,
                            color: "text-growth",
                            bgColor: "bg-growth/10"
                        },
                        {
                            title: "Partner",
                            desc: "Corporate and organizational collaborations.",
                            icon: <Handshake className="w-8 h-8" />,
                            color: "text-accent",
                            bgColor: "bg-slate-50"
                        },
                        {
                            title: "Membership",
                            desc: "Join our core circle of regular supporters.",
                            icon: <Heart className="w-8 h-8" />,
                            color: "text-pink-500",
                            bgColor: "bg-pink-50"
                        }
                    ].map((op, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl transition-all text-center group">
                            <div className={`w-16 h-16 ${op.bgColor} ${op.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                {op.icon}
                            </div>
                            <h4 className="text-2xl font-bold font-outfit text-primary mb-3">{op.title}</h4>
                            <p className="text-slate-500 text-sm mb-6 italic">{op.desc}</p>
                            <ArrowRight className={`w-6 h-6 mx-auto ${op.color} opacity-0 group-hover:opacity-100 transition-all`} />
                        </div>
                    ))}
                </div>

                {/* Form Sections */}
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Left Side: Text */}
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl font-outfit font-bold text-primary mb-6">Join the Club</h2>
                            <p className="text-lg text-slate-600 mb-8 italic">
                                Ready to take the next step? Fill out the form, and our team will get back to you within 48 hours to discuss how you can contribute.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h5 className="font-bold text-primary mb-4">Why Join Us?</h5>
                                <ul className="space-y-3 text-sm text-slate-500 font-inter">
                                    <li className="flex gap-2"><span>✅</span> Direct impact on youth financial literacy</li>
                                    <li className="flex gap-2"><span>✅</span> Networking with industry experts</li>
                                    <li className="flex gap-2"><span>✅</span> Quarterly impact transparency reports</li>
                                    <li className="flex gap-2"><span>✅</span> Exclusive invitations to events</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">I am interested in...</label>
                                    <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none">
                                        <option>Financial Mentorship</option>
                                        <option>Corporate Partnership</option>
                                        <option>Donating Resources</option>
                                        <option>Club Membership</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">Message / Motivation</label>
                                    <textarea rows={4} placeholder="Tell us why you want to join..." className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"></textarea>
                                </div>

                                <button className="btn-secondary w-full py-4 text-lg shadow-xl hover:shadow-accent/20">
                                    Send Application
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Highlight */}
            <section className="section-padding bg-slate-50">
                <div className="container mx-auto">
                    <div className="bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop')] bg-cover bg-center rounded-[3rem] overflow-hidden relative min-h-[500px] flex items-center">
                        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
                        <div className="relative z-10 px-8 md:px-20 text-white max-w-4xl">
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 italic">Support a Future Wealth Builder</h2>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed font-inter">
                                Your donations directly fund scholarships, resources for our financial literacy programs, and startup seed money for youth-led businesses. Every contribution builds a bridge to an economically empowered Ghana.
                            </p>
                            <Link href="/donate" className="btn-primary flex items-center gap-2 w-fit text-lg px-12">
                                <Heart className="w-6 h-6 fill-white" /> Secure Donation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
