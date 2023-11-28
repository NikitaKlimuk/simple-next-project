"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("apple", { callbackUrl })}>
        Sign in with Apple
      </button>
      <button onClick={() => signIn("facebook", { callbackUrl })}>
        Sign in with Facebook
      </button>
    </>
  );
};

export { GoogleButton };
