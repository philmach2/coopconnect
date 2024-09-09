"useclient";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SignOut = () => {
  useEffect(() => {
    signOut({ callbackUrl: "/" });
  }, []);

  return <div>Signing out...</div>;
};

export default SignOut;
