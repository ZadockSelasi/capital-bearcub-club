"use client";

import React from "react";
import PageHeader from "@/components/admin/PageHeader";
import { User, Shield, Bell, Database, Globe, Save } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <PageHeader
                title="Settings"
                description="Configure your administrative portal and site preferences."
            />

            <div className="grid grid-cols-1 gap-8">
                {/* Profile Settings */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                            <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-primary">Administrator Profile</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Display Name</label>
                            <input type="text" defaultValue="Admin User" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Email Address</label>
                            <input type="email" defaultValue="zadockselasi7@gmail.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium" />
                        </div>
                    </div>
                </section>

                {/* Security Settings */}
                <section className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-primary">Security & Access</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100">
                            <div>
                                <p className="font-bold text-primary mb-1">Two-Factor Authentication</p>
                                <p className="text-xs text-slate-400 italic">Add an extra layer of security to your account.</p>
                            </div>
                            <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100">
                            <div>
                                <p className="font-bold text-primary mb-1">Session Management</p>
                                <p className="text-xs text-slate-400 italic">Automatically sign out after 24 hours of inactivity.</p>
                            </div>
                            <div className="w-12 h-6 bg-growth rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Action Bar */}
                <div className="flex justify-end pt-4">
                    <button className="btn-primary px-12 py-4 flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        <Save className="w-5 h-5" /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
