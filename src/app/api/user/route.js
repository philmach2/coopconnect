import clientPromise from "@/config/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (request) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db();

    const user = await db
      .collection("users")
      .findOne({ email: session.user.email });

    if (!user) {
      return new Response("User Not FOund", { status: 404 });
    }

    return new Response(
      JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
