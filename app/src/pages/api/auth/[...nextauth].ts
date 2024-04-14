import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";
import axios from "axios";
import { AdapterUser } from "next-auth/adapters";

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
        const apiToken = await userCheck(user);
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

interface User {
  id: string;
  name: string;
  image?: string;
}

async function userCheck(user: any): Promise<string> {
  const { data } = await axios.post(
    "http://localhost:4800/api/users/checked",
    user
  );
  return data.data;
}
