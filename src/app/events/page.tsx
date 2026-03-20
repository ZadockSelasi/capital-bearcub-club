import React from "react";
import { Calendar, Clock, MapPin, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import EnrollmentButtonWrapper from "@/components/EnrollmentButtonWrapper";
import { prisma } from "@/lib/prisma";

export default async function EventsPage() {
    const events = await prisma.event.findMany({
        where: { status: 'UPCOMING' },
        orderBy: { date: "asc" }
    });

    return (
        <main className="min-h-screen pt-20">

            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6 text-balance">Workshops & Events</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
                        Join our upcoming activities and level up your skills in tech, finance, and leadership.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {events.length === 0 ? (
                            <div className="col-span-full py-20 text-center text-slate-500 italic">
                                Check back later for new events!
                            </div>
                        ) : events.map((event) => (
                            <div key={event.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all flex flex-col hover:-translate-y-2">
                                <div className="h-56 relative overflow-hidden">
                                    {event.image ? (
                                        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                            <Calendar className="w-12 h-12" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
                                        EVENT
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-accent px-4 py-1 rounded-full text-white font-bold text-xs shadow-lg">
                                        JOIN US
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold font-outfit text-primary mb-4">{event.title}</h3>
                                    <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Calendar className="w-4 h-4 text-accent" />
                                            <span>{new Date(event.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Clock className="w-4 h-4 text-accent" />
                                            <span>{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <EnrollmentButtonWrapper 
                                        type="EVENT"
                                        targetId={event.id}
                                        targetTitle={event.title}
                                        className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
                                        buttonText="Register Now"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Past Events Link */}
                    <div className="mt-20 text-center border-t border-slate-100 pt-12">
                        <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Looking for past highlights?</h4>
                        <Link href="/blog" className="text-primary font-bold flex items-center justify-center gap-2 hover:text-accent transition-colors">
                            View Our Success Stories <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
