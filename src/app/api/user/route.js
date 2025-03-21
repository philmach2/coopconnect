import { NextResponse } from "next/server";
import clientPromise from "@/config/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request) {
  try {
    console.log("Fetching user profile...");
    const session = await getServerSession(authOptions);
    console.log("Session:", session);

    if (!session) {
      console.log("No session found. Unauthorized.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db();

    console.log("Searching for user with email:", session.user.email);
    const user = await db
      .collection("users")
      .findOne({ email: session.user.email });

    if (!user) {
      console.log("User not found in database.");
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    console.log("User found. Fetching announcements...");
    const announcements = await db
      .collection("announcements")
      .find({ "author.user": user._id })
      .toArray();

    console.log("User announcements:", announcements);

    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isBoardMember: user.isBoardMember,
      announcements: announcements,
    };

    console.log("Returning user data:", userData);
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error in GET /api/user:", error);
    return NextResponse.json(
      { error: "Something Went Wrong", details: error.message },
      { status: 500 }
    );
  }
}
