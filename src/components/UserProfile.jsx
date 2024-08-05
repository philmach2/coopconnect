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
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchUserProfile();
    }
  }, [status, router]);

  const fetchUserProfile = async () => {
    const response = await fetch("/api/user/profile");
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  };

  if (status === "loading" || !user) {
    return <LoadingPage loading={true} />;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
