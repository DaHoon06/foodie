"use client";
import useCookies from "@hooks/useCookie";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type SessionData = {
  id: string;
  apiToken: string;
  user: any;
  expires: string;
};

type SessionType = {
  data: SessionData | any;
  status: string;
  update: any;
};

type AuthContextType = {
  userId: string;
  isLogin: boolean;
};

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: Props) => {
  const { status, data: session }: SessionType = useSession();
  const isLogin = !!session && status === "authenticated";
  const apiToken = isLogin ? session.apiToken : "";
  const userId = isLogin ? session.id : "";
  const { setCookie, getCookie } = useCookies();
  const [id, setUserId] = useState("");

  useEffect(() => {
    if (isLogin) {
      setCookie("Authorization", apiToken);
      setUserId(userId);
    }
  }, [isLogin]);

  const value = {
    userId: id,
    isLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
