import React from "react";
import { Calendar, User, ArrowRight, Tag, BookOpen } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function BlogPage() {
    const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" }
    });

    const featuredPost = posts.length > 0 ? posts[0] : null;
    const regularPosts = posts.length > 1 ? posts.slice(1) : [];

    return (
        <main className="min-h-screen pt-20">
            {/* Header */}
            <section className="section-padding bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold text-primary mb-6">Blog & News</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">
                        Success stories, educational insights, and updates from our growing community.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section-padding bg-white">
                <div className="container mx-auto">
                    {featuredPost ? (
                        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                            <div className="aspect-[21/9]">
                                {featuredPost.image ? (
                                    <img src={featuredPost.image} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                        <BookOpen className="w-20 h-20" />
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl opacity-100">
                                <span className="bg-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg mb-6 inline-block">Featured Post</span>
                                <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 group-hover:text-accent transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-white/70 mb-8 italic line-clamp-2">
                                    {featuredPost.content.substring(0, 150)}...
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-sm opacity-80">
                                        <User className="w-4 h-4" /> Capital Bearcub
                                    </div>
                                    <div className="flex items-center gap-2 text-sm opacity-80">
                                        <Calendar className="w-4 h-4" /> {new Date(featuredPost.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <Link href={`/blog/${featuredPost.id}`} className="mt-8 inline-block btn-primary">
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="py-20 text-center text-slate-500 italic max-w-2xl mx-auto bg-slate-50 rounded-[3rem] border border-slate-100 p-12 shadow-inner">
                            <BookOpen className="w-16 h-16 mx-auto mb-6 text-slate-300" />
                            <h3 className="text-2xl font-bold font-outfit text-primary mb-2">No Stories Yet</h3>
                            <p>Check back soon for inspiring stories, updates, and educational insights from our community.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Blog Grid */}
            {regularPosts.length > 0 && (
                <section className="section-padding bg-slate-50">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {regularPosts.map((post) => (
                                <div key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all flex flex-col group">
                                    <div className="h-64 relative overflow-hidden">
                                        {post.image ? (
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                                <BookOpen className="w-12 h-12" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-2 text-primary font-bold text-xs uppercase shadow-sm">
                                            <Tag className="w-3 h-3 text-accent" /> Article
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <div className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2">
                                            <Calendar className="w-3 h-3" /> {new Date(post.createdAt).toLocaleDateString()}
                                        </div>
                                        <h3 className="text-2xl font-bold font-outfit text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed italic line-clamp-3">
                                            {post.content}
                                        </p>
                                        <Link href={`/blog/${post.id}`} className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Read Story <ArrowRight className="w-4 h-4 text-accent" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <button className="btn-outline">
                                Load More Stories
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Section */}
            <section className="section-padding bg-primary text-white text-center rounded-[4rem] mx-6 mb-20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-outfit font-bold mb-6 italic">Stay Inspired</h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
                        Join 2,000+ supporters getting monthly updates on impact and innovation.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input type="email" placeholder="Your best email" className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-accent flex-grow text-white shadow-inner" />
                        <button className="btn-secondary px-8 py-4 shadow-xl">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
