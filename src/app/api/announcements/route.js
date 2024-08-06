import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/config/database";
import Announcement from "@/models/Announcement";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    await mongoose.connect(process.env.MONGODB_URI);

    const announcements = await Announcement.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(announcements);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something Went Wrong" },
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

    // Fetch the user from the database
    const User = mongoose.model("User");
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
      },
      category: category || "General",
    });

    await newAnnouncement.save();

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
    console.error(error);
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something Went Wrong" },
      { status: 500 }
    );
  } finally {
    await mongoose.disconnect();
  }
}
