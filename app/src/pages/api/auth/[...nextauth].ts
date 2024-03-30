import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }): Promise<any> {
      try {
        return {
          ...user,
        };
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
};

export default NextAuth(authOptions);
