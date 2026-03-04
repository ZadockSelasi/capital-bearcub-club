"use client";

import React from "react";
import { Plus } from "lucide-react";

interface PageHeaderProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function PageHeader({ title, description, actionLabel, onAction }: PageHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
                <h1 className="text-4xl font-outfit font-bold text-primary mb-2 tracking-tight">{title}</h1>
                <p className="text-slate-500 italic">{description}</p>
            </div>
            {actionLabel && (
                <button
                    onClick={onAction}
                    className="w-fit flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                >
                    <Plus className="w-5 h-5" /> {actionLabel}
                </button>
            )}
        </div>
    );
}
