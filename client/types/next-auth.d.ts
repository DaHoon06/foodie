import {JWT} from "next-auth/jwt";
import {DefaultSession} from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    // 위 코드예시에서 name과 email을 보낸것들에 대한 값에 대해 타입설정을 해준다
    apitoken?: string | undefined | null;
    user?: {
      username?: string | undefined | null;
      profile?: string | undefined | null;
    };
  }
}

declare module "next-auth" {
  interface Session {
    apiToken?: string | undefined | null;
    id?: string | undefined | null;
    profile?: string | undefined | null;
    user: {
      username?: string | undefined | null;
      uid?: string | undefined | null;
    } & DefaultSession["user"];
  }
}
