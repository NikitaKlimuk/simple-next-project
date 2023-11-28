// import type { AuthOptions, User } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import AppleProvider from "next-auth/providers/apple";
// import Credentials from "next-auth/providers/credentials";
// import { users } from "@/data/user";

// export const authConfig: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID!,
//       clientSecret: process.env.FACEBOOK_SECRET!,
//     }),
//     AppleProvider({
//       clientId: process.env.APPLE_ID!,
//       clientSecret: process.env.APPLE_SECRET!,
//     }),
//     Credentials({
//       credentials: {
//         email: { label: "email", type: "email", required: true },
//         password: { label: "password", type: "password", required: true },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) return null;

//         const currectUser = users.find(
//           (user) => user.email === credentials.email
//         );

//         if (currectUser && currectUser.password === credentials.password) {
//           const { password, ...userWithoutPassword } = currectUser;

//           return userWithoutPassword as User;
//         }

//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/signin",
//   },
// };

import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/Facebook";

import type { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
  },
  // pages: {
  //   // signIn: "/signin",
  // },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
