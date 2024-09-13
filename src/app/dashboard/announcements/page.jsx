"use client";

import { useSession } from "next-auth/react";
import AnnouncementBoard from "@/components/AnnouncementBoard";
import LoadingPage from "@/app/loading";

const AnnouncementPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingPage loading={true} />;
  }

  if (!session) {
    return <div>Please sign in to view the Announcement Board.</div>;
  }

  return <AnnouncementBoard user={session.user} />;
};

export default AnnouncementPage;
