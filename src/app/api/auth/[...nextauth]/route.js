import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/config/database";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Check if the user exists in your database
      const client = await clientPromise;
      const db = client.db();
      const existingUser = await db
        .collection("users")
        .findOne({ email: user.email.toLowerCase() });

      // Only allow sign in if the user exists
      return !!existingUser;
    },
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
        // Add other custom fields here
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Custom error page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
