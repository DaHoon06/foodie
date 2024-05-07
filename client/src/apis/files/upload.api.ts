import { axiosInstance } from "@libs/axios";

const DOMAIN = `/files`;

export const imageUploadApi = async (formData: FormData) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return axiosInstance.post(`/files/upload/profile`, formData, {
    headers,
  });
};
