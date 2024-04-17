import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import {AuthOptions} from "next-auth";
import {userCheckApi} from "@apis/users/user.api";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user: any) {
      try {
        return {
          ...user
        }
      } catch (e) {
        console.log(e)
      }
    },
    async jwt({user, token, account}) {
      if (user) {
        const id = account.providerAccountId;
        const {data} = await userCheckApi(user as User);
        token.apiToken = data.data;
        token.id = id;
      }
      return token;
    },
    async session({token, session}) {
      session.apiToken = token.apiToken as unknown as string;
      session.id = token.id as unknown as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

export interface User {
  id: string;
  name: string;
  image?: string;
  email?: string;
}

