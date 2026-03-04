"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { Mail, User, Clock, Trash2, CheckCircle, XCircle, ChevronRight, MessageSquare, Search } from "lucide-react";
import { Loader2 } from "lucide-react";

interface Contact {
    id: string;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    read: boolean;
    createdAt: string;
}

export default function FeedbackManager() {
    const [feedback, setFeedback] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState<Contact | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const res = await fetch("/api/feedback");
            const data = await res.json();
            setFeedback(data);
        } catch (error) {
            console.error("Failed to fetch feedback", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleRead = async (id: string, currentRead: boolean) => {
        try {
            const res = await fetch("/api/feedback", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, read: !currentRead }),
            });
            if (res.ok) {
                setFeedback(feedback.map(f => f.id === id ? { ...f, read: !currentRead } : f));
                if (selectedMessage?.id === id) {
                    setSelectedMessage({ ...selectedMessage, read: !currentRead });
                }
            }
        } catch (error) {
            console.error("Failed to update feedback", error);
        }
    };

    const deleteFeedback = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        try {
            const res = await fetch(`/api/feedback?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                setFeedback(feedback.filter(f => f.id !== id));
                if (selectedMessage?.id === id) setSelectedMessage(null);
            }
        } catch (error) {
            console.error("Failed to delete feedback", error);
        }
    };

    const filteredFeedback = feedback.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (f.subject || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <PageHeader
                title="Feedback & Inquiries"
                description="Manage messages and feedback from website visitors."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
                {/* List View */}
                <div className="lg:col-span-1 bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-50">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-40 text-slate-400 gap-3">
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <p className="text-xs font-bold uppercase tracking-widest">Loading messages</p>
                            </div>
                        ) : filteredFeedback.length === 0 ? (
                            <div className="text-center py-20 text-slate-400 h-full flex flex-col items-center justify-center italic">
                                <MessageSquare className="w-12 h-12 mb-4 opacity-10" />
                                <p>No messages found</p>
                            </div>
                        ) : (
                            filteredFeedback.map((msg) => (
                                <button
                                    key={msg.id}
                                    onClick={() => setSelectedMessage(msg)}
                                    className={`w-full text-left p-5 rounded-3xl transition-all relative group ${selectedMessage?.id === msg.id
                                            ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[0.98]"
                                            : "bg-slate-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100"
                                        }`}
                                >
                                    {!msg.read && (
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                    )}
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${selectedMessage?.id === msg.id ? "bg-white/20" : "bg-primary/5 text-primary"
                                            }`}>
                                            <User className="w-4 h-4" />
                                        </div>
                                        <h4 className={`font-bold truncate text-sm flex-1 ${selectedMessage?.id === msg.id ? "text-white" : "text-primary"
                                            }`}>{msg.name}</h4>
                                    </div>
                                    <p className={`text-xs line-clamp-1 mb-2 font-medium ${selectedMessage?.id === msg.id ? "text-white/60" : "text-slate-400 italic"
                                        }`}>
                                        {msg.subject || "No Subject"}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-[10px] font-bold uppercase tracking-tighter ${selectedMessage?.id === msg.id ? "text-white/40" : "text-slate-300"
                                            }`}>
                                            {new Date(msg.createdAt).toLocaleDateString()}
                                        </span>
                                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${selectedMessage?.id === msg.id ? "text-white/40" : "text-slate-300"
                                            }`} />
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Content View */}
                <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden flex flex-col">
                    {selectedMessage ? (
                        <div className="h-full flex flex-col">
                            <div className="p-8 md:p-12 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-outfit font-bold text-primary">{selectedMessage.subject || "No Subject Provided"}</h2>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500">
                                            <User className="w-3 h-3 text-accent" />
                                            {selectedMessage.name}
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500">
                                            <Mail className="w-3 h-3 text-growth" />
                                            {selectedMessage.email}
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-500">
                                            <Clock className="w-3 h-3 text-primary" />
                                            {new Date(selectedMessage.createdAt).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => toggleRead(selectedMessage.id, selectedMessage.read)}
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${selectedMessage.read
                                                ? "bg-slate-100 text-slate-400 hover:bg-accent/10 hover:text-accent"
                                                : "bg-accent/10 text-accent hover:bg-accent hover:text-white shadow-lg shadow-accent/20"
                                            }`}
                                        title={selectedMessage.read ? "Mark as Unread" : "Mark as Read"}
                                    >
                                        {selectedMessage.read ? <XCircle className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}
                                    </button>
                                    <button
                                        onClick={() => deleteFeedback(selectedMessage.id)}
                                        className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg hover:shadow-red-500/20 flex items-center justify-center"
                                        title="Delete Message"
                                    >
                                        <Trash2 className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-50/50">
                                <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-slate-100 leading-relaxed text-slate-600 font-inter whitespace-pre-wrap italic">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 p-12 text-center italic">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                                <MessageSquare className="w-10 h-10 opacity-20" />
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-primary mb-2 opacity-30">Select a message</h3>
                            <p className="max-w-xs mx-auto">Click on a feedback submission from the list to view its contents and take action.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
