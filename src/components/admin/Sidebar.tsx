"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    HandHeart,
    Users,
    Settings,
    LogOut,
    LayoutGrid,
    ChevronRight,
    MessageSquare,
    Calendar,
    BookOpen
} from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Programs", href: "/admin/programs", icon: LayoutGrid },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Donations", href: "/admin/donations", icon: HandHeart },
    { name: "Volunteers", href: "/admin/volunteers", icon: Users },
    { name: "Feedback", href: "/admin/feedback", icon: MessageSquare },
    { name: "Subscribers", href: "/admin/subscribers", icon: Users },
    { name: "Enrollments", href: "/admin/enrollments", icon: Users },
    { name: "Blog Posts", href: "/admin/blog", icon: BookOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-primary h-screen sticky top-0 flex flex-col text-white shadow-2xl z-50">
            <div className="p-8 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-primary group-hover:rotate-12 transition-transform">
                        CB
                    </div>
                    <span className="font-outfit font-bold text-xl tracking-tight">Admin Portal</span>
                </Link>
            </div>

            <nav className="flex-1 p-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${isActive
                                ? "bg-white text-primary shadow-lg shadow-white/10"
                                : "hover:bg-white/10 text-white/70"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "group-hover:text-white"}`} />
                                <span className="font-bold text-sm tracking-wide">{item.name}</span>
                            </div>
                            {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-white/10">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-red-500/10 text-white/50 hover:text-red-400 transition-all font-bold text-sm">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
