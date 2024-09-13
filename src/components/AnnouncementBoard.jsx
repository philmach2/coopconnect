"use client";

import LoadingPage from "@/app/loading";
import React, { useState, useEffect } from "react";
import CustomCategoryDropdown from "./CustomCategoryDropdown";

const AnnouncementBoard = ({ user }) => {
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
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch("/api/announcements");
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      } else {
        const errorData = await response.json();
        console.error(
          "Failed to fetch announcements:",
          response.status,
          errorData
        );
        setAnnouncements([]); // Set to empty array if fetch fails
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
      setAnnouncements([]); // Set to empty array if there's an error
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
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnnouncement),
      });

      const responseData = await response.json();

      if (response.ok) {
        setAnnouncements((prevAnnouncements) => [
          responseData,
          ...prevAnnouncements,
        ]);
        setNewAnnouncement({ title: "", content: "", category: "General" });
        setShowForm(false);
      } else {
        console.error("Error response:", responseData);
        setSubmitError(responseData.error || "Failed to create announcement");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
