"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider basePath="/next/api/auth">{children}</SessionProvider>
  );
};
