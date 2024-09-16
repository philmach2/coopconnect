import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/config/database";
import Announcement from "@/models/Announcement";
import User from "@/models/User"; // Import the User model
import mongoose from "mongoose";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const announcements = await Announcement.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(announcements);
  } catch (error) {
    console.error("Error in GET /api/announcements:", error);
    return NextResponse.json(
      { error: "Something Went Wrong", details: error.message },
      { status: 500 }
    );
  } finally {
    await mongoose.disconnect();
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await mongoose.connect(process.env.MONGODB_URI);

    const user = await User.findOne({ email: session.user.email });

    if (!user || !user.isBoardMember) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { title, content, category } = await request.json();

    const newAnnouncement = new Announcement({
      title,
      content,
      author: {
        firstName: user.firstName,
        lastName: user.lastName,
        user: user._id, // Add this line to reference the User model
      },
      category: category || "General",
    });

    await newAnnouncement.save();

    // Update the user's announcements array
    user.announcements.push(newAnnouncement._id);
    await user.save();

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/announcements:", error);
    return NextResponse.json(
      { error: "Something Went Wrong", details: error.message },
      { status: 500 }
    );
  } finally {
    await mongoose.disconnect();
  }
}
