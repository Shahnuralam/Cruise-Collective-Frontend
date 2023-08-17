import { NextAuthOptions } from "next-auth";
import { AppProviders } from "next-auth/providers";
import { credentials } from "./auth";

const providers: AppProviders = [credentials];

const nextAuthOptions: NextAuthOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.jwt = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        session.user.jwt = token.jwt;
      }
      return session;
    },
  },
  jwt: {
    maxAge: 50 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: "/login",
    newUser: "/sign-up",
  },
  secret: "23908as08d0812032jdo23d23kkhhk", // will be secret and change
};

export default nextAuthOptions;
