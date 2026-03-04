import AdminSidebar from "@/components/admin/Sidebar";
import { User } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="flex min-h-screen bg-slate-50 font-inter">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <header className="h-20 bg-white border-b border-slate-200 px-10 flex items-center justify-between sticky top-0 z-40">
                    <h2 className="text-xl font-bold font-outfit text-primary tracking-tight">
                        Admin Control Center
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-primary">{(session as any).user?.name || "Admin User"}</p>
                            <p className="text-xs text-slate-400">Site Administrator</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-200 transition-colors overflow-hidden">
                            {(session as any).user?.image ? (
                                <img src={(session as any).user.image} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-5 h-5" />
                            )}
                        </div>
                    </div>
                </header>
                <main className="p-10 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
