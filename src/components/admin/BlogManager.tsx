"use client";

import React, { useState } from "react";
import AdminModal from "./AdminModal";
import PageHeader from "./PageHeader";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function BlogManager() {
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

            // 2. Create the post
            const data = {
                title: formData.get("title"),
                content: formData.get("content"),
                image: imageUrl,
                published: formData.get("published") === "on",
            };

            const res = await fetch("/api/blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsOpen(false);
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to create post", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageHeader
                title="Blog Posts"
                description="Share impact stories, financial tips, and club news with the community."
                actionLabel="Write New Post"
                onAction={() => setIsOpen(true)}
            />

            <AdminModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Write New Post"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Post Title</label>
                        <input
                            name="title"
                            required
                            placeholder="e.g., Why Financial Literacy Matters from Childhood"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Featured Image (Upload)</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Content</label>
                        <textarea
                            name="content"
                            required
                            rows={8}
                            placeholder="Once upon a time..."
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-accent/10 outline-none transition-all font-medium resize-none"
                        />
                    </div>

                    <div className="flex items-center gap-3 pl-2">
                        <input
                            type="checkbox"
                            name="published"
                            id="published"
                            className="w-5 h-5 rounded border-slate-200 text-primary focus:ring-primary/20"
                        />
                        <label htmlFor="published" className="text-sm font-bold text-primary cursor-pointer">Publish immediately</label>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full py-4 flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save Post"}
                        </button>
                    </div>
                </form>
            </AdminModal>
        </>
    );
}
