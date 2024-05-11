import { axiosInstance } from "@libs/axios";

const DOMAIN = `/files`;

export const imageUploadApi = async (formData: FormData) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const url = `${DOMAIN}/upload/profile`
  return axiosInstance.post(url, formData, {
    headers,
  });
};
