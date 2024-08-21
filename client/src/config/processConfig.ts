export const isProd = process.env.NODE_ENV === 'production';

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;

export const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY as string;
export const KAKAO_REST_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_KEY as string;