import { prisma } from "@/lib/prisma";
import BlogManager from "@/components/admin/BlogManager";
import { FileText, Edit, Trash2, Eye, Calendar, User } from "lucide-react";

export default async function AdminBlogPage() {
    const posts = await prisma.blogPost.findMany({
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="space-y-8">
            <BlogManager />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {posts.length === 0 ? (
                    <div className="col-span-full py-24 bg-white border border-slate-100 rounded-[40px] shadow-sm flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center mb-6">
                            <FileText className="w-10 h-10 text-slate-200" />
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-primary mb-2">Your blog is empty</h3>
                        <p className="text-slate-400 max-w-sm italic leading-relaxed">
                            Start documenting journeys and sharing wisdom to inspire the next generation of wealth builders.
                        </p>
                    </div>
                ) : posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden flex flex-col sm:flex-row">
                        <div className="w-full sm:w-48 h-48 sm:h-auto bg-slate-100 relative">
                            {post.image ? (
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                    <FileText className="w-8 h-8" />
                                </div>
                            )}
                            {post.published && (
                                <div className="absolute top-4 left-4 px-3 py-1 bg-growth text-white text-[10px] font-black rounded-lg shadow-lg">
                                    PUBLISHED
                                </div>
                            )}
                        </div>

                        <div className="flex-1 p-8 flex flex-col">
                            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.createdAt).toLocaleDateString()}</span>
                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Author ID: {post.authorId.slice(0, 4)}</span>
                            </div>

                            <h3 className="text-2xl font-outfit font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex gap-4">
                                    <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <Edit className="w-4 h-4" /> Edit
                                    </button>
                                    <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2">
                                        <Trash2 className="w-4 h-4" /> Delete
                                    </button>
                                </div>
                                <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all shadow-sm">
                                    <Eye className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
