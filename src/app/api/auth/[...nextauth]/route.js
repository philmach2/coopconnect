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
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign-in attempt:", { user, email });
      const client = await clientPromise;
      const db = client.db();
      const existingUser = await db
        .collection("users")
        .findOne({ email: user.email.toLowerCase() });
      console.log("Existing user:", existingUser);
      return !!existingUser;
    },
    async session({ session, user }) {
      console.log(
        "Session callback - Input user:",
        JSON.stringify(user, null, 2)
      );

      if (session?.user) {
        session.user.id = user.id;

        const client = await clientPromise;
        const db = client.db();
        const dbUser = await db
          .collection("users")
          .findOne({ _id: new ObjectId(user.id) });

        console.log(
          "Session callback - DB User:",
          JSON.stringify(dbUser, null, 2)
        );

        if (dbUser) {
          session.user.isBoardMember = dbUser.isBoardMember || false;
        }
      }

      console.log("Final session:", JSON.stringify(session, null, 2));
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  debug: true, // Enable debug messages in console
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
