"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, XCircle, Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Subscriber {
    id: string;
    email: string;
    active: boolean;
    createdAt: Date;
}

export default function SubscriberRow({ sub }: { sub: Subscriber }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete ${sub.email}?`)) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/subscribers?id=${sub.id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            } else {
                alert("Failed to delete subscriber");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("An error occurred while deleting");
        } finally {
            setLoading(false);
        }
    };

    return (
        <tr className="hover:bg-slate-50/30 transition-colors group">
            <td className="px-10 py-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-primary tracking-tight">{sub.email}</span>
                </div>
            </td>
            <td className="px-10 py-8">
                <span className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${sub.active ? 'text-growth' : 'text-slate-400'}`}>
                    {sub.active ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {sub.active ? 'Active' : 'Unsubscribed'}
                </span>
            </td>
            <td className="px-10 py-8 text-sm text-slate-500 italic">
                {new Date(sub.createdAt).toLocaleDateString()}
            </td>
            <td className="px-10 py-8 text-right">
                <button
                    onClick={handleDelete}
                    disabled={loading}
                    className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2 justify-end ml-auto"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    Delete
                </button>
            </td>
        </tr>
    );
}
