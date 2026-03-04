"use client";

import React, { useState } from "react";
import { Heart, Lock, ShieldCheck, Zap } from "lucide-react";

export default function DonatePage() {
    const [amount, setAmount] = useState<string>("100");
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/checkout_sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: parseFloat(amount) }),
            });
            const { url, error } = await res.json();
            if (url) {
                window.location.href = url;
            } else {
                alert(error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                                    { amount: "$10", impact: "Provides coding materials for one child for a month.", icon: <Zap className="w-5 h-5" /> },
                                    { amount: "$50", impact: "Funds a full scholarship for one student in our Tech Titans Bootcamp.", icon: <ShieldCheck className="w-5 h-5" /> },
                                    { amount: "$100", impact: "Supports our community outreach mobile lab for one week.", icon: <Heart className="w-5 h-5" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-growth transition-all cursor-pointer" onClick={() => setAmount(item.amount.replace("$", ""))}>
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
                                <span className="text-xs font-bold uppercase tracking-widest">Secure Payment powered by Stripe</span>
                            </div>

                            <div className="space-y-8">
                                {/* Amount Selection */}
                                <div>
                                    <label className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Select Amount (USD Equivalent)</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {["25", "50", "100", "250"].map((amt) => (
                                            <button
                                                key={amt}
                                                onClick={() => setAmount(amt)}
                                                className={`py-3 rounded-xl border-2 transition-all font-bold ${amount === amt ? 'border-growth text-growth bg-growth/5' : 'border-slate-100 text-primary hover:border-growth hover:text-growth'}`}
                                            >
                                                ${amt}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative mt-4">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Other amount"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-8 py-3 outline-none focus:border-growth transition-all shadow-inner font-bold text-primary"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleDonate}
                                    disabled={loading || !amount}
                                    className="btn-secondary w-full py-5 text-xl shadow-xl shadow-accent/20 flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {loading ? "Processing..." : (
                                        <>
                                            Donate ${amount || "0"} Now <Heart className="w-6 h-6 fill-white" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-slate-400 italic">
                                    Secure checkout via Stripe. You will be redirected to their secure platform to complete your donation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

