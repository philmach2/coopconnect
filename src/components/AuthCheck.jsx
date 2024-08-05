"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LoadingPage from "@/app/loading";

const AuthCheck = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <LoadingPage loading={true} />;
  }

  return children;
};

export default AuthCheck;
