"use client";

import React, { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DeleteEntityButtonProps {
    id: string;
    endpoint: string; // e.g. "/api/programs"
    className?: string;
    children?: React.ReactNode;
}

export default function DeleteEntityButton({ id, endpoint, className, children }: DeleteEntityButtonProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        
        setLoading(true);
        try {
            const res = await fetch(`${endpoint}/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            } else {
                alert("Failed to delete this item. Please try again.");
            }
        } catch (error) {
            console.error("Delete failed:", error);
            alert("An error occurred while deleting.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            onClick={handleDelete}
            disabled={loading}
            className={className || "p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors disabled:opacity-50"}
            title="Delete Item"
        >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : children || <Trash2 className="w-4 h-4" />}
        </button>
    );
}
