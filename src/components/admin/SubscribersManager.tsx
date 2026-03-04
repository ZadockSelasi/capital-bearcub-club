"use client";

import React, { useState } from "react";
import AdminModal from "./AdminModal";
import PageHeader from "./PageHeader";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SubscribersManager() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email"),
        };

        try {
            const res = await fetch("/api/subscribers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsOpen(false);
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to add subscriber", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageHeader
                title="Subscribers"
                description="Manage newsletter subscriptions and community members."
                actionLabel="Add Subscriber"
                onAction={() => setIsOpen(true)}
            />

            <AdminModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Add New Subscriber"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="e.g., student@example.com"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full py-4 flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Add Subscriber"}
                        </button>
                    </div>
                </form>
            </AdminModal>
        </>
    );
}
