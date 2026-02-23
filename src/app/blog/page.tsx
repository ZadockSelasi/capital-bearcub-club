import React from "react";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "How Technology is Reshaping Education in Ghana",
        excerpt: "Exploring the transformative power of digital literacy in local schools and the rise of young African developers.",
        date: "Feb 10, 2026",
        author: "Founder, Bearcub Club",
        category: "Education",
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "5 Financial Habits Every Teenager Should Start Today",
        excerpt: "Wealth creation starts young. Here are the core pillars of financial independence for the next generation.",
        date: "Jan 28, 2026",
        author: "Financial Mentor",
        category: "Finance",
        img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Success Story: Kwame's Journey from Scrums to Python",
        excerpt: "A deep dive into how one of our students built a solar-powered irrigation system in just 3 months.",
        date: "Jan 15, 2026",
        author: "Impact Lead",
        category: "Success Stories",
        img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function BlogPage() {
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
                    <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                        <div className="aspect-[21/9]">
                            <img src={posts[0].img} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
                            <span className="bg-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg mb-6 inline-block">Featured Post</span>
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 group-hover:text-accent transition-colors leading-tight">
                                {posts[0].title}
                            </h2>
                            <p className="text-lg text-white/70 mb-8 italic">
                                "{posts[0].excerpt}"
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-sm opacity-80">
                                    <User className="w-4 h-4" /> {posts[0].author}
                                </div>
                                <div className="flex items-center gap-2 text-sm opacity-80">
                                    <Calendar className="w-4 h-4" /> {posts[0].date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-slate-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.slice(0).map((post) => (
                            <div key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all flex flex-col group">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full flex items-center gap-2 text-primary font-bold text-xs uppercase shadow-sm">
                                        <Tag className="w-3 h-3 text-accent" /> {post.category}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </div>
                                    <h3 className="text-2xl font-bold font-outfit text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed italic">
                                        {post.excerpt}
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
