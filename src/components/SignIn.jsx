"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("email", { email, callbackUrl: "/dashboard" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
