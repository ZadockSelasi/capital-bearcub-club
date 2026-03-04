"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function AdminModal({ isOpen, onClose, title, children }: AdminModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl shadow-primary/20 overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="px-10 py-8 border-b border-slate-50 flex items-center justify-between bg-white sticky top-0 z-10">
                    <h3 className="text-2xl font-outfit font-bold text-primary">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-primary transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="px-10 py-8 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
