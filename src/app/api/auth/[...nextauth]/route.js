import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Fetch the user from the database to get all fields
      const dbUser = await User.findOne({ email: user.email });
      if (dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.role = dbUser.role;
        session.user.isBoardMember = dbUser.isBoardMember;
        session.user.firstName = dbUser.firstName;
        session.user.lastName = dbUser.lastName;
        // Add any other fields you want to include in the session
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
