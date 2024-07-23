import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    // NextAuth.js fields
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    emailVerified: Date,
    image: String,

    // Custom fields for user profile
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "shareholder", "applicant"],
      default: "shareholder",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    isBoardMember: {
      type: Boolean,
      default: false,
    },
    announcements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Announcement",
      },
    ],
  },
  { timestamps: true }
);

// Middleware to hash password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
