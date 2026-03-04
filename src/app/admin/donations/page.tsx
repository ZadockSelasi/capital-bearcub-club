import React from "react";
import { prisma } from "@/lib/prisma";
import { HandHeart, Search, Filter, Download } from "lucide-react";

export default async function DonationsPage() {
    const donations = await prisma.donation.findMany({
        orderBy: { createdAt: "desc" },
        include: { user: true }
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-outfit font-bold text-primary mb-2">Donations</h1>
                    <p className="text-slate-500">Track and manage all financial contributions to the club.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary hover:bg-slate-50 transition-all shadow-sm">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search donor name or transaction ID..."
                            className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                <th className="px-10 py-5">Donor</th>
                                <th className="px-10 py-5">Amount</th>
                                <th className="px-10 py-5">Status</th>
                                <th className="px-10 py-5">Date</th>
                                <th className="px-10 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {donations.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-20 text-center text-slate-400 italic">
                                        No donations found yet.
                                    </td>
                                </tr>
                            ) : donations.map((donation) => (
                                <tr key={donation.id} className="hover:bg-slate-50/30 transition-colors group">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-bold">
                                                {donation.user?.name?.[0] || donation.user?.email?.[0] || "A"}
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-sm">{donation.user?.name || "Anonymous Donor"}</p>
                                                <p className="text-xs text-slate-400">{donation.user?.email || "No email"}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className="font-outfit font-bold text-primary">
                                            ${donation.amount.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${donation.status === "COMPLETED"
                                                ? "bg-growth/10 text-growth"
                                                : "bg-amber-100 text-amber-600"
                                            }`}>
                                            {donation.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6 text-sm text-slate-500 italic">
                                        {new Date(donation.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-10 py-6 text-right">
                                        <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Details</button>
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
