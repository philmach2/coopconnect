import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the announcement"],
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  content: {
    type: String,
    required: [true, "Please provide content for the announcement"],
    maxlength: [3000, "Content cannot be more than 3000 characters"],
  },
  author: {
    firstName: {
      type: String,
      required: [true, "Please provide the author's first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide the author's last name"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    enum: ["General", "Maintenance", "Event", "Emergency", "Other"],
    default: "General",
  },
});

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", AnnouncementSchema);
