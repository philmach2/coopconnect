"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthCheck = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
};

export default AuthCheck;
