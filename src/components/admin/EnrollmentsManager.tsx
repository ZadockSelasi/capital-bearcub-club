"use client";

import React, { useState } from "react";
import { Search, Mail, Phone, Trash2, Calendar, FileText, CheckCircle2, Clock } from "lucide-react";

interface Enrollment {
    id: string;
    type: string;
    targetId: string;
    targetTitle: string;
    name: string;
    email: string;
    phone: string | null;
    message: string | null;
    status: string;
    createdAt: Date | string;
}

interface EnrollmentsManagerProps {
    initialEnrollments: Enrollment[];
}

export default function EnrollmentsManager({ initialEnrollments }: EnrollmentsManagerProps) {
    const [enrollments, setEnrollments] = useState<Enrollment[]>(initialEnrollments);
    const [search, setSearch] = useState("");

    const filtered = enrollments.filter(e =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase()) ||
        e.targetTitle.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this enrollment?")) return;

        try {
            const res = await fetch(`/api/enroll/${id}`, { method: "DELETE" });
            if (res.ok) {
                setEnrollments(enrollments.filter(e => e.id !== id));
            }
        } catch (error) {
            alert("Failed to delete enrollment");
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search name, email or program..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-growth transition-all"
                    />
                </div>
                <div className="flex gap-4">
                    <span className="bg-slate-100 text-slate-500 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-widest">
                        Total: {filtered.length}
                    </span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                            <th className="px-10 py-6">Participant</th>
                            <th className="px-10 py-6">Enrollment Info</th>
                            <th className="px-10 py-6">Message</th>
                            <th className="px-10 py-6">Status</th>
                            <th className="px-10 py-6">Date</th>
                            <th className="px-10 py-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                        {filtered.length > 0 ? filtered.map((enrollment) => (
                            <tr key={enrollment.id} className="hover:bg-slate-50/30 transition-colors group">
                                <td className="px-10 py-8">
                                    <div className="flex items-center gap-4 text-primary">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary font-bold border border-slate-200 shadow-sm">
                                            {enrollment.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-base leading-tight">{enrollment.name}</p>
                                            <div className="flex flex-col gap-1 mt-1 text-slate-400 text-xs">
                                                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {enrollment.email}</span>
                                                {enrollment.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {enrollment.phone}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-8">
                                    <div className="space-y-1">
                                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${enrollment.type === 'PROGRAM' ? 'bg-growth/10 text-growth' : 'bg-accent/10 text-accent'}`}>
                                            {enrollment.type}
                                        </span>
                                        <p className="font-bold text-primary">{enrollment.targetTitle}</p>
                                        <p className="text-xs text-slate-400">ID: {enrollment.targetId}</p>
                                    </div>
                                </td>
                                <td className="px-10 py-8">
                                    {enrollment.message ? (
                                        <div className="max-w-xs">
                                            <p className="text-slate-500 line-clamp-2 italic">"{enrollment.message}"</p>
                                        </div>
                                    ) : (
                                        <span className="text-slate-300 italic">No message</span>
                                    )}
                                </td>
                                <td className="px-10 py-8 text-primary">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                                        <span className="font-bold">{enrollment.status}</span>
                                    </div>
                                </td>
                                <td className="px-10 py-8 text-slate-400">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{new Date(enrollment.createdAt).toLocaleDateString()}</span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider">{new Date(enrollment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                </td>
                                <td className="px-10 py-8 text-right">
                                    <button
                                        onClick={() => handleDelete(enrollment.id)}
                                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                        title="Delete Enrollment"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={6} className="px-10 py-20 text-center">
                                    <div className="flex flex-col items-center gap-4 text-slate-300">
                                        <Clock className="w-12 h-12 opacity-20" />
                                        <p className="font-medium italic">No enrollments found.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
