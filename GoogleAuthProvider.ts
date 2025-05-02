import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
// https://next-auth.js.org/providers/google

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: must(process.env.GOOGLE_ID), // Register at https://console.cloud.google.com/
      clientSecret: must(process.env.GOOGLE_SECRET), // Obtain these
    }),
  ],
};

function must<T>(val: T) {
  if (!val) {
    throw new Error("Expected value to be defined");
  }
  return val;
}

export default NextAuth(authOptions);
