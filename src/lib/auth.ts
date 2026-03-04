import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: any = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (credentials?.email === "zadockselasi7@gmail.com" && credentials?.password === "password123") {
                    return { id: "1", name: "Admin", email: "zadockselasi7@gmail.com" };
                }
                return null;
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async session({ session, token }: any) {
            if (token?.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
};
