import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/Login",
  },
  providers: [] // Add providers with an empty array for now
} satisfies NextAuthConfig;
