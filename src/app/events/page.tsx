import React from "react";
import { Calendar, Clock, MapPin, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "Eco-Tech Innovation Bootcamp",
        date: "March 15 - 20, 2026",
        time: "9:00 AM - 4:00 PM",
        location: "Bearcub Hub, Accra",
        type: "Workshop",
        price: "Free",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
        desc: "A 5-day intensive bootcamp focusing on building sustainable solutions using IoT and recycled materials."
    },
    {
        id: 2,
        title: "Youth Financial Literacy Seminar",
        date: "April 05, 2026",
        time: "10:00 AM - 2:00 PM",
        location: "Online (Zoom)",
        type: "Seminar",
        price: "Free",
        img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop",
        desc: "A virtual deep-dive into wealth creation strategies for teenagers and young adults."
    },
    {
        id: 3,
        title: "Annual Leadership Summit",
        date: "May 12, 2026",
        time: "8:30 AM - 5:00 PM",
        location: "National Theatre, Accra",
        type: "Conference",
        price: "Registration Required",
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop",
        desc: "Join global leaders and local innovators for a day of inspiration, networking, and workshop sessions."
    }
];

export default function EventsPage() {
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
                        {events.map((event) => (
                            <div key={event.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all flex flex-col hover:-translate-y-2">
                                <div className="h-56 relative overflow-hidden">
                                    <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-sm">
                                        {event.type}
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-accent px-4 py-1 rounded-full text-white font-bold text-xs shadow-lg">
                                        {event.price}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold font-outfit text-primary mb-4">{event.title}</h3>
                                    <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                                        {event.desc}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Calendar className="w-4 h-4 text-accent" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600">
                                            <Clock className="w-4 h-4 text-accent" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <button className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2">
                                        Register Now <ArrowRight className="w-4 h-4" />
                                    </button>
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
