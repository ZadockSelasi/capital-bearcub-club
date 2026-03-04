import { prisma } from "@/lib/prisma";
import SubscribersManager from "@/components/admin/SubscribersManager";
import { Mail, Search, Download } from "lucide-react";
import SubscriberRow from "@/components/admin/SubscriberRow";

export default async function AdminSubscribersPage() {
    const subscribers = await prisma.subscriber.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-8">
            <SubscribersManager />

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by email..."
                            className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-primary hover:bg-slate-50 transition-all shadow-sm whitespace-nowrap">
                        <Download className="w-4 h-4" /> Export Members
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                <th className="px-10 py-6">Subscriber Email</th>
                                <th className="px-10 py-6">Status</th>
                                <th className="px-10 py-6">Join Date</th>
                                <th className="px-10 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {subscribers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-10 py-24 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                                                <Mail className="w-8 h-8 text-slate-200" />
                                            </div>
                                            <p className="text-slate-400 font-medium italic">No subscribers found.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : subscribers.map((sub) => (
                                <SubscriberRow key={sub.id} sub={sub} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
