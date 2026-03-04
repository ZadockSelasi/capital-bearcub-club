"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "PROGRAM" | "EVENT";
    targetId: string;
    targetTitle: string;
}

export default function EnrollmentModal({ isOpen, onClose, type, targetId, targetTitle }: EnrollmentModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            const res = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    type,
                    targetId,
                    targetTitle,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({ name: "", email: "", phone: "", message: "" });
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-slate-100 animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-12">
                    {status === "success" ? (
                        <div className="text-center py-10 space-y-6">
                            <div className="w-20 h-20 bg-growth/10 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-10 h-10 text-growth" />
                            </div>
                            <h3 className="text-3xl font-outfit font-bold text-primary">Registration Sent!</h3>
                            <p className="text-slate-500 italic">
                                Thank you for enrolling in <strong>{targetTitle}</strong>. We'll be in touch soon with the next steps.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Enrollment Form</span>
                                <h3 className="text-3xl font-outfit font-bold text-primary mb-2">Join {targetTitle}</h3>
                                <p className="text-slate-500 text-sm italic">Fill in your details to secure your spot.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase tracking-widest">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase tracking-widest">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+233..."
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Message (Optional)</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about yourself or ask a question..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-growth transition-all resize-none"
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="btn-primary w-full py-4 text-lg shadow-xl shadow-growth/10 flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        "Confirm Enrollment"
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
