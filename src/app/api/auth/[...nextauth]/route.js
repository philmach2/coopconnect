import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/config/database";
import { ObjectId } from "mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ user, email }) {
      const client = await clientPromise;
      const db = client.db();
      const existingUser = await db
        .collection("users")
        .findOne({ email: user.email.toLowerCase() });
      return !!existingUser;
    },
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;

        const client = await clientPromise;
        const db = client.db();
        const dbUser = await db
          .collection("users")
          .findOne({ _id: new ObjectId(user.id) });

        if (dbUser) {
          session.user.isBoardMember = dbUser.isBoardMember || false;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
