"use client";

import React, { useState } from "react";
import AnnouncementBoard from "@/components/AnnouncementBoard";
import LoadingPage from "@/app/loading";

const AnnouncementPage = () => {
  // Demo mode state - true means we're using demo data
  const [demoMode, setDemoMode] = useState(true);

  // Demo user with board member privileges
  const demoUser = {
    isBoardMember: true,
    firstName: "Demo",
    lastName: "User",
    email: "demo@example.com",
  };

  // Uncomment the useSession code  to switch back to real auth
  // const { data: session, status } = useSession();

  // Simulate loading for demo purposes
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Simulate brief loading time for demo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // For demo mode, show loading screen briefly
  if (loading) {
    return <LoadingPage loading={true} />;
  }

  // For demo mode, always render the board with demo user
  if (demoMode) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-bold">Demo Mode</p>
          <p>
            This is a demonstration version with sample data. No login required.
          </p>
          <button
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-sm"
            onClick={() => setDemoMode(false)}
          >
            Switch to Auth Mode (Disabled in Demo)
          </button>
        </div>
        <AnnouncementBoard user={demoUser} />
      </div>
    );
  }

  // Won't run in demo mode
  /*
  if (status === "loading") {
    return <LoadingPage loading={true} />;
  }

  if (!session) {
    return <div className="container mx-auto p-4">
      <div className="bg-red-100 border-l-4 border-red-500 p-4">
        <p className="font-bold">Authentication Required</p>
        <p>Please sign in to view the Announcement Board.</p>
        <button 
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
          onClick={() => setDemoMode(true)}
        >
          Switch to Demo Mode
        </button>
      </div>
    </div>;
  }

  return <AnnouncementBoard user={session.user} />;
  */

  // Fallback in case someone toggles demo mode off
  return (
    <div className="container mx-auto p-4">
      <div className="bg-red-100 border-l-4 border-red-500 p-4">
        <p className="font-bold">Authentication Mode Disabled</p>
        <p>This demo doesn't support actual authentication.</p>
        <button
          className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm"
          onClick={() => setDemoMode(true)}
        >
          Return to Demo Mode
        </button>
      </div>
    </div>
  );
};

export default AnnouncementPage;
