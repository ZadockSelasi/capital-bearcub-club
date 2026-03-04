"use client";

import React, { useState } from "react";
import AdminModal from "./AdminModal";
import PageHeader from "./PageHeader";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ProgramsManager() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const file = formData.get("image") as File;
        let imageUrl = "";

        try {
            // 1. Upload the image if it exists
            if (file && file.size > 0) {
                const uploadData = new FormData();
                uploadData.append("file", file);

                const uploadRes = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadData,
                });

                if (!uploadRes.ok) throw new Error("Image upload failed");
                const { url } = await uploadRes.json();
                imageUrl = url;
            }

            // 2. Create the program
            const data = {
                title: formData.get("title"),
                description: formData.get("description"),
                category: formData.get("category"),
                image: imageUrl,
            };

            const res = await fetch("/api/programs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsOpen(false);
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to create program", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageHeader
                title="Programs"
                description="Manage the educational and technical paths offered by Capital Bearcub."
                actionLabel="Create New Program"
                onAction={() => setIsOpen(true)}
            />

            <AdminModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Create New Program"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Program Title</label>
                        <input
                            name="title"
                            required
                            placeholder="e.g., Wealth Builders 101"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Category</label>
                        <select
                            name="category"
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium appearance-none"
                        >
                            <option value="FINANCE">Financial Literacy</option>
                            <option value="TECH">Technology & Code</option>
                            <option value="LEADERSHIP">Leadership</option>
                            <option value="ENTREPRENEURSHIP">Entrepreneurship</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Program Image (Upload)</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Description</label>
                        <textarea
                            name="description"
                            required
                            rows={4}
                            placeholder="What will students learn in this program?"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium resize-none"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full py-4 flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Program"}
                        </button>
                    </div>
                </form>
            </AdminModal>
        </>
    );
}
