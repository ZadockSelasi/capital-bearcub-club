import { Heart, Lock, ShieldCheck, Zap } from "lucide-react";

export default function DonatePage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Support Our Mission</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
                        Your generous contribution empowers children and teenagers in Ghana to lead, innovate, and thrive.
                    </p>
                </div>
            </section>

            {/* Donation Form Area */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Left: Impact context */}
                        <div>
                            <h2 className="text-4xl font-outfit font-bold text-primary mb-8">Where Your Money Goes</h2>
                            <div className="space-y-6">
                                {[
                                    { amount: "GHS 100", impact: "Provides coding materials for one child for a month.", icon: <Zap className="w-5 h-5" /> },
                                    { amount: "GHS 500", impact: "Funds a full scholarship for one student in our Tech Titans Bootcamp.", icon: <ShieldCheck className="w-5 h-5" /> },
                                    { amount: "GHS 1,000", impact: "Supports our community outreach mobile lab for one week.", icon: <Heart className="w-5 h-5" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-growth transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-growth/10 flex items-center justify-center shrink-0 text-growth">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-xl mb-1">{item.amount}</h4>
                                            <p className="text-slate-500 text-sm italic">{item.impact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 rounded-[2rem] bg-primary text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <h5 className="text-2xl font-bold font-outfit mb-4">Recurring Support</h5>
                                <p className="opacity-80 mb-6 italic">
                                    By becoming a monthly member, you provide the stability needed for long-term impact. Join 300+ regular donors.
                                </p>
                                <button className="btn-secondary w-fit px-8">Become a Member</button>
                            </div>
                        </div>

                        {/* Right: Donation Form */}
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-32">
                            <div className="flex items-center gap-2 mb-8 text-slate-400">
                                <Lock className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Secure Payment powered by Paystack</span>
                            </div>

                            <div className="space-y-8">
                                {/* Amount Selection */}
                                <div>
                                    <label className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Select Amount (GHS)</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {["50", "100", "500", "1000"].map((amt) => (
                                            <button key={amt} className="py-3 rounded-xl border-2 border-slate-100 hover:border-growth hover:text-growth transition-all font-bold text-primary">
                                                {amt}
                                            </button>
                                        ))}
                                    </div>
                                    <input type="number" placeholder="Other amount" className="w-full mt-4 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all shadow-inner" />
                                </div>

                                {/* Personal Details */}
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all" />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button className="btn-secondary w-full py-5 text-xl shadow-xl shadow-accent/20 flex items-center justify-center gap-3">
                                    Donate Now <Heart className="w-6 h-6 fill-white" />
                                </button>

                                <p className="text-center text-xs text-slate-400 italic">
                                    A receipt will be sent to your email address. For tax-deductibility questions, please contact our support team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
