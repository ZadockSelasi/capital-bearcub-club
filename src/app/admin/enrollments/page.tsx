import { prisma } from "@/lib/prisma";
import EnrollmentsManager from "@/components/admin/EnrollmentsManager";
import { Users, Filter, Download } from "lucide-react";

export default async function AdminEnrollmentsPage() {
    const enrollments = await prisma.enrollment.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-2xl bg-growth/10 flex items-center justify-center text-growth">
                            <Users className="w-5 h-5" />
                        </div>
                        <h1 className="text-3xl font-bold font-outfit text-primary tracking-tight">Enrollments</h1>
                    </div>
                    <p className="text-slate-500 font-medium italic">Track and manage registrations for programs and events.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-primary font-bold rounded-2xl border border-slate-200 hover:bg-slate-100 transition-all text-sm">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-light transition-all text-sm">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>
            </div>

            {/* List Manager */}
            <EnrollmentsManager initialEnrollments={enrollments} />
        </div>
    );
}
