import { prisma } from "@/lib/prisma";
import ProgramsManager from "@/components/admin/ProgramsManager";
import { Settings2, Trash2, ExternalLink } from "lucide-react";
import DeleteEntityButton from "@/components/admin/DeleteEntityButton";

export default async function AdminProgramsPage() {
    const programs = await prisma.program.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-8">
            <ProgramsManager />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.length === 0 ? (
                    <div className="col-span-full py-20 bg-white border border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                            <Settings2 className="w-8 h-8 text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">No programs found</h3>
                        <p className="text-slate-400 max-w-xs">Start by creating your first educational program to display on the site.</p>
                    </div>
                ) : programs.map((program) => (
                    <div key={program.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                        {program.image && (
                            <div className="w-full h-48 bg-slate-100 relative overflow-hidden">
                                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                        )}
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100">
                                    {program.category}
                                </span>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                    <DeleteEntityButton 
                                        id={program.id} 
                                        endpoint="/api/programs"
                                        className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </DeleteEntityButton>
                                </div>
                            </div>

                            <h3 className="text-2xl font-outfit font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                                {program.title}
                            </h3>

                            <p className="text-slate-500 text-sm line-clamp-3 mb-8 italic leading-relaxed">
                                {program.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <span className={`flex items-center gap-2 text-[10px] font-bold ${program.status === 'ACTIVE' ? 'text-growth' : 'text-slate-400'}`}>
                                    <div className={`w-2 h-2 rounded-full ${program.status === 'ACTIVE' ? 'bg-growth animate-pulse' : 'bg-slate-300'}`}></div>
                                    {program.status}
                                </span>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                    Updated {new Date(program.updatedAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
