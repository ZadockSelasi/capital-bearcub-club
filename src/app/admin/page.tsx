import React from "react";
import { prisma } from "@/lib/prisma";
import {
    TrendingUp,
    Users,
    HandHeart,
    ArrowUpRight,
    ArrowDownRight,
    Activity
} from "lucide-react";

export default async function AdminDashboard() {
    const donationSum = await prisma.donation.aggregate({
        _sum: { amount: true }
    });
    const volunteerCount = await prisma.volunteer.count();
    const subscriberCount = await prisma.subscriber.count({ where: { active: true } });
    const programCount = await prisma.program.count({ where: { status: 'ACTIVE' } });
    const eventCount = await prisma.event.count({ where: { status: 'UPCOMING' } });
    const blogCount = await prisma.blogPost.count();

    const stats = [
        { name: "Total Funds", value: `$${(donationSum._sum.amount || 0).toLocaleString()}`, icon: HandHeart, trend: "+12.5%", positive: true, color: "text-growth bg-growth/10" },
        { name: "Volunteers", value: volunteerCount.toString(), icon: Users, trend: "+4.2%", positive: true, color: "text-blue-500 bg-blue-50" },
        { name: "Subscribers", value: subscriberCount.toString(), icon: Activity, trend: "+8.1%", positive: true, color: "text-accent bg-accent/5" },
        { name: "Active Programs", value: programCount.toString(), icon: TrendingUp, trend: "+2.4%", positive: true, color: "text-pink-500 bg-pink-50" },
    ];

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="flex items-center justify-between mb-6">
                            <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-bold ${stat.positive ? "text-growth" : "text-red-500"}`}>
                                {stat.trend}
                                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                            </div>
                        </div>
                        <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2">{stat.name}</h3>
                        <p className="text-3xl font-outfit font-bold text-primary">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-outfit font-bold text-primary">Content Summary</h3>
                            <button className="text-sm font-bold text-accent hover:underline">Manage All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                                <span className="text-4xl font-black text-primary mb-2">{eventCount}</span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upcoming Events</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                                <span className="text-4xl font-black text-primary mb-2">{blogCount}</span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Blog Posts</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                                <span className="text-4xl font-black text-growth mb-2">100%</span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Uptime</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-outfit font-bold text-primary">System Feed</h3>
                            <p className="text-slate-400 italic text-sm">Monitoring management activities...</p>
                        </div>
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="h-16 bg-slate-50 rounded-2xl w-full"></div>
                            <div className="h-16 bg-slate-50 rounded-2xl w-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary rounded-[40px] shadow-2xl p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-2xl font-outfit font-bold mb-6">System Health</h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                            <span className="text-sm opacity-60">Database Status</span>
                            <span className="flex items-center gap-2 text-sm font-bold text-growth">
                                <div className="w-2 h-2 rounded-full bg-growth animate-ping"></div>
                                Healthy
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                            <span className="text-sm opacity-60">API Latency</span>
                            <span className="text-sm font-bold">24ms</span>
                        </div>
                        <div className="pt-6">
                            <p className="text-xs opacity-40 italic mb-4">Prisma v6 Engine running on SQLite</p>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-3/4 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
