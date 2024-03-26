import { ReactElement } from "react";
import * as styles from "./KakaoButton.css";
import Image from "next/image";
import { Typography } from "@components/common/typography/Typography";
import { useRouter } from "next/router";
import { signInApi } from "@apis/users/user.api";
import { AxiosError, AxiosResponse } from "axios";

export const KakaoButton = (): ReactElement => {
  const router = useRouter();

  const handleClickKakaoLogin = async () => {
    //router.push('/feeds/post');
    await signIn();
  };

  const signIn = async () => {
    try {
      await signInApi();
    } catch (e: unknown) {
      const error = e as unknown as AxiosError;
      if (error.response) {
        const { status, data } = error.response as AxiosResponse;
        const message = data.message as { message: string };
        alert(`${message} : ${status}`);
      }
    }
  };

  return (
    <button
      type={"button"}
      className={styles.kakaoLoginButton}
      onClick={handleClickKakaoLogin}
    >
      <Image
        className={styles.kakaoLogo}
        src={"/images/kakao.png"}
        alt={"카카오_로그인_버튼"}
        width={40}
        height={40}
      />
      <Typography as={"span"} fontSize={16} fontWeight={700}>
        카카오 로그인
      </Typography>
    </button>
  );
};
