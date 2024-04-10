import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";
import { axiosInstance } from "@libs/axios";
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
    async signIn({ user }: { user: AdapterUser }): Promise<any> {
      try {
        await userCheck(user);
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    async session(session) {
      const { token } = session;
      const payload = {
        username: token.name,
        profile: token.picture,
        id: token.sub,
      };
      return { ...payload };
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

async function userCheck(user: AdapterUser) {
  const res = await axios.post("http://localhost:4800/api/users/checked", user);
}
