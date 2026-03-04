import React from "react";
import { prisma } from "@/lib/prisma";
import { Users, Search, Mail, Phone, MoreVertical } from "lucide-react";

export default async function VolunteersPage() {
    const volunteers = await prisma.volunteer.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-outfit font-bold text-primary mb-2">Volunteers</h1>
                    <p className="text-slate-500">Manage individuals who have signed up to support the club's mission.</p>
                </div>
                <button className="w-fit flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    Invite Volunteer
                </button>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or interest..."
                            className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                <th className="px-10 py-5">Volunteer</th>
                                <th className="px-10 py-5">Interest Area</th>
                                <th className="px-10 py-5">Sign-up Date</th>
                                <th className="px-10 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {volunteers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-10 py-20 text-center text-slate-400 italic">
                                        No volunteers registered yet.
                                    </td>
                                </tr>
                            ) : volunteers.map((volunteer) => (
                                <tr key={volunteer.id} className="hover:bg-slate-50/30 transition-colors group">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary font-bold border border-slate-200 shadow-sm">
                                                {volunteer.name?.[0] || "?"}
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">{volunteer.name}</p>
                                                <p className="text-xs text-slate-400 font-mono tracking-tighter italic">{volunteer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="px-4 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                                            {volunteer.interest || "General"}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6 text-sm text-slate-500 italic">
                                        {new Date(volunteer.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-10 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-primary/10 hover:text-primary transition-all">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                            <button className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 hover:bg-slate-200 transition-all">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
