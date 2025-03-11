"use client";

import LoadingPage from "@/app/loading";
import React, { useState, useEffect } from "react";
import CustomCategoryDropdown from "./CustomCategoryDropdown";
import { v4 as uuidv4 } from "uuid"; // You'll need to install this package or use another ID generation method

// Hard-coded demo data
const DEMO_ANNOUNCEMENTS = [
  {
    _id: "1",
    title: "Welcome to Our Platform",
    content:
      "We're excited to have you join our community. This platform is designed to help members stay connected and informed about important updates and events. Feel free to explore all the features available to you.",
    category: "General",
    author: {
      firstName: "John",
      lastName: "Doe",
    },
    createdAt: new Date("2025-02-15").toISOString(),
  },
  {
    _id: "2",
    title: "Upcoming Maintenance",
    content:
      "We will be performing scheduled maintenance on our servers this weekend. The platform may be unavailable for approximately 2 hours starting at 12:00 AM EST on Saturday. We apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our services.",
    category: "Technical",
    author: {
      firstName: "Jane",
      lastName: "Smith",
    },
    createdAt: new Date("2025-03-01").toISOString(),
  },
  {
    _id: "3",
    title: "New Feature Release",
    content:
      "We're thrilled to announce the launch of our new messaging feature! Now you can communicate directly with other members through our secure messaging system. This has been one of our most requested features, and we're happy to finally bring it to you. Check out the 'Messages' tab in your dashboard to get started.",
    category: "Updates",
    author: {
      firstName: "Michael",
      lastName: "Johnson",
    },
    createdAt: new Date("2025-03-08").toISOString(),
  },
];

// Demo user - change isBoardMember to false to hide posting capabilities
const DEMO_USER = {
  isBoardMember: true,
  firstName: "Demo",
  lastName: "User",
};

const AnnouncementBoard = ({ user = DEMO_USER }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    category: "General",
  });
  const [expandedAnnouncements, setExpandedAnnouncements] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    // Initialize with demo data instead of fetching
    setAnnouncements(DEMO_ANNOUNCEMENTS);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (category) => {
    setNewAnnouncement((prev) => ({ ...prev, category }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Simulate submission delay
    setTimeout(() => {
      try {
        // Create a new announcement with demo data
        const newAnnouncementData = {
          _id: uuidv4() || String(Date.now()), // Generate a unique ID
          ...newAnnouncement,
          author: {
            firstName: user.firstName,
            lastName: user.lastName,
          },
          createdAt: new Date().toISOString(),
        };

        // Add the new announcement to the top of the list
        setAnnouncements((prevAnnouncements) => [
          newAnnouncementData,
          ...prevAnnouncements,
        ]);

        // Reset the form
        setNewAnnouncement({ title: "", content: "", category: "General" });
        setShowForm(false);
      } catch (error) {
        console.error("Error creating announcement:", error);
        setSubmitError("An unexpected error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }, 500); // Simulate a brief delay for realism
  };

  const toggleExpand = (id) => {
    setExpandedAnnouncements((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!user) {
    return <LoadingPage loading={true} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Announcement Board</h1>

      {user.isBoardMember && (
        <div className="mb-4">
          {!showForm ? (
            <button
              className="bg-sky-500 text-white rounded-lg px-4 py-2 hover:opacity-80"
              onClick={() => setShowForm(true)}
            >
              Post New Announcement
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="title"
                value={newAnnouncement.title}
                onChange={handleInputChange}
                placeholder="Announcement Title"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="content"
                value={newAnnouncement.content}
                onChange={handleInputChange}
                placeholder="Announcement Content (max 10,000 characters)"
                className="w-full p-2 border rounded"
                required
              />
              <CustomCategoryDropdown
                value={newAnnouncement.category}
                onSelect={handleCategorySelect}
              />
              {submitError && <p className="text-red-500">{submitError}</p>}
              <div>
                <button
                  type="submit"
                  className="bg-sky-500 text-white rounded-lg px-4 py-2 hover:opacity-80 mr-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting..." : "Post"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-black text-white rounded-lg px-4 py-2 hover:opacity-80"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <div className="space-y-4">
        {announcements.length > 0 ? (
          announcements.map((announcement) => {
            const isExpanded = expandedAnnouncements[announcement._id];
            return (
              <div
                key={announcement._id}
                className={`bg-white p-4 rounded shadow ${
                  isExpanded ? "h-auto" : "h-32"
                } overflow-hidden`}
              >
                <h2 className="text-xl font-semibold">{announcement.title}</h2>
                <p className="text-sm text-gray-500">
                  Posted by {announcement.author.firstName}{" "}
                  {announcement.author.lastName} on{" "}
                  {new Date(announcement.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Category: {announcement.category}
                </p>
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => toggleExpand(announcement._id)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
                <p className="mt-2">{announcement.content}</p>
              </div>
            );
          })
        ) : (
          <p>No announcements available.</p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBoard;
