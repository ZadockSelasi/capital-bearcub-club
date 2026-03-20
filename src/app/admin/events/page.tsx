import { prisma } from "@/lib/prisma";
import EventsManager from "@/components/admin/EventsManager";
import { Calendar, MapPin, Trash2, Edit2, Clock } from "lucide-react";
import DeleteEntityButton from "@/components/admin/DeleteEntityButton";

export default async function AdminEventsPage() {
    const events = await prisma.event.findMany({
        orderBy: { date: "asc" }
    });

    return (
        <div className="space-y-8">
            <EventsManager />

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-widest font-bold">
                                <th className="px-10 py-6">Image</th>
                                <th className="px-10 py-6">Event Details</th>
                                <th className="px-10 py-6">Date & Time</th>
                                <th className="px-10 py-6">Location</th>
                                <th className="px-10 py-6">Status</th>
                                <th className="px-10 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {events.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-24 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                                                <Calendar className="w-8 h-8 text-slate-200" />
                                            </div>
                                            <p className="text-slate-400 font-medium italic">No events scheduled yet.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : events.map((event) => (
                                <tr key={event.id} className="hover:bg-slate-50/30 transition-colors group">
                                    <td className="px-10 py-8">
                                        <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                            {event.image ? (
                                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <h4 className="font-bold text-primary mb-1 group-hover:text-accent transition-colors">{event.title}</h4>
                                        <p className="text-xs text-slate-400 line-clamp-1 italic">{event.description}</p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm font-bold text-primary">
                                                <Calendar className="w-4 h-4 text-accent" />
                                                {new Date(event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                                <Clock className="w-3 h-3" />
                                                {new Date(event.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                            <MapPin className="w-4 h-4 text-slate-300" />
                                            {event.location}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${event.status === "UPCOMING"
                                            ? "bg-blue-50 text-blue-500 border border-blue-100"
                                            : event.status === "COMPLETED"
                                                ? "bg-growth/10 text-growth border border-growth/20"
                                                : "bg-slate-50 text-slate-400 border border-slate-100"
                                            }`}>
                                            {event.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <DeleteEntityButton 
                                                id={event.id} 
                                                endpoint="/api/events"
                                                className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </DeleteEntityButton>
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
