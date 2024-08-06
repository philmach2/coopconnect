"use client";

import LoadingPage from "@/app/loading";
import React, { useState, useEffect } from "react";
import CustomCategoryDropdown from "./CustomCategoryDropdown";

// Update filler announcements
const fillerAnnouncements = [
  {
    _id: "filler1",
    title: "Welcome to Our New Announcement Board",
    content:
      "We're excited to launch this new platform for community updates. Stay tuned for important information!",
    author: { firstName: "John", lastName: "Doe" },
    createdAt: new Date("2024-01-01").toISOString(),
    category: "General",
  },
  {
    _id: "filler2",
    title: "Upcoming Building Maintenance",
    content:
      "We will be conducting routine maintenance on the elevators next week. Please check your email for detailed schedules.",
    author: { firstName: "John", lastName: "Doe" },
    createdAt: new Date("2024-01-15").toISOString(),
    category: "Maintenance",
  },
  {
    _id: "filler3",
    title: "Community Garden Initiative",
    content:
      "We're considering starting a community garden. If you're interested in participating, please contact the management office.",
    author: { firstName: "John", lastName: "Doe" },
    createdAt: new Date("2024-02-01").toISOString(),
    category: "Event",
  },
];

const AnnouncementBoard = ({ user }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    category: "General", // Add category field
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch("/api/announcements");
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data.length > 0 ? data : fillerAnnouncements);
      } else {
        console.error("Failed to fetch announcements");
        setAnnouncements(fillerAnnouncements);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setAnnouncements(fillerAnnouncements);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (category) => {
    setNewAnnouncement((prev) => ({ ...prev, category }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (response.ok) {
        const createdAnnouncement = await response.json();
        setAnnouncements([createdAnnouncement, ...announcements]);
        setNewAnnouncement({ title: "", content: "", category: "General" });
        setShowForm(false);
      } else {
        console.error("Failed to create announcement");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };

  if (!user) {
    return <LoadingPage loading={true} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Announcement Board</h1>

      {!user.isBoardMember && (
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
                placeholder="Announcement Content (max 3,000 characters)"
                className="w-full p-2 border rounded"
                required
              />
              <CustomCategoryDropdown
                value={newAnnouncement.category}
                onSelect={handleCategorySelect}
              />
              <div>
                <button
                  type="submit"
                  className="bg-sky-500 text-white rounded-lg px-4 py-2 hover:opacity-80 mr-2"
                >
                  Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-black text-white rounded-lg px-4 py-2 hover:opacity-80"
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
          announcements.map((announcement) => (
            <div key={announcement._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{announcement.title}</h2>
              <p className="text-sm text-gray-500">
                Posted by {announcement.author.firstName}{" "}
                {announcement.author.lastName} on{" "}
                {new Date(announcement.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{announcement.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                Category: {announcement.category}
              </p>
            </div>
          ))
        ) : (
          <p>No announcements available.</p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBoard;
