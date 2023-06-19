import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/user";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currectUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currectUser && currectUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currectUser;

          return userWithoutPassword as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
