export interface AxiosResponseData<T> {
  result: boolean;
  statusCode: number;
  data: T;
}

export function axiosResponseData<T extends any>(
  payload: AxiosResponseData<T | null>
): T | null {
  try {
    const { result, data } = payload;
    if (result && data) return data;
    return null;
  } catch (e) {
    throw e;
  }
}
