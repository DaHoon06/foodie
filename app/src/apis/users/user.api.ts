import { axiosInstance } from "@libs/axios";

const DOMAIN = `/users`;

export const signInApi = async () => {
  const url = `${DOMAIN}/sign-in`;
  const body = {
    username: "맛도리",
    token: "wjsekgns",
  };
  return axiosInstance.post(url, body);
};
