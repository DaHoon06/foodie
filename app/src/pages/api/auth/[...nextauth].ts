import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";
import axios from "axios";
import { userCheckApi } from "@apis/users/user.api";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ user, token, account }) {
      if (user) {
        const id = account.providerAccountId;
        const apiToken = await userCheckApi(user as User);
        token.apiToken = apiToken;
        token.id = id;
      }
      return token;
    },
    async session({ token, session }) {
      session.apiToken = token.apiToken;
      session.id = token.id;
      return session;
    },
  },
  secret: process.env.AUTH_SCRET_KEY,
};

export default NextAuth(authOptions);

export interface User {
  id: string;
  name: string;
  image?: string;
  email?: string;
}

