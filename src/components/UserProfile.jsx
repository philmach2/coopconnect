"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("UserProfile useEffect triggered. Status:", status);
    if (status === "unauthenticated") {
      console.log("User is unauthenticated. Redirecting to login.");
      router.push("/login");
    } else if (status === "authenticated") {
      console.log("User is authenticated. Fetching user profile.");
      fetchUserProfile();
    }
  }, [status, router]);

  const fetchUserProfile = async () => {
    console.log("Fetching user profile...");
    try {
      const response = await fetch("/api/user");
      console.log("API response status:", response.status);
      if (response.ok) {
        const userData = await response.json();
        console.log("User data received:", userData);
        console.log("Announcements received:", userData.announcements);
        setUser(userData);
      } else {
        console.error("Failed to fetch user profile. Status:", response.status);
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  if (status === "loading" || !user) {
    console.log("Rendering loading page. Status:", status, "User:", user);
    return <LoadingPage loading={true} />;
  }

  console.log("Rendering user profile. User:", user);
  console.log("Announcements in render:", user.announcements);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {user.firstName}{" "}
            {user.lastName}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Board Member:</span>{" "}
            {user.isBoardMember ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Announcements:</span>{" "}
            {user.announcements ? user.announcements.length : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
