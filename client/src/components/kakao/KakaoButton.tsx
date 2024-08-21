import {ReactElement} from "react";
import * as styles from "./styles/KakaoButton.css";
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";
import {signIn} from "next-auth/react";
import {axiosInstance} from "@libs/axios";

export const KakaoButton = (): ReactElement => {

  const handleClickKakaoSignIn = async () => {
    try {
      const user: any = await signIn("kakao");
      if (user) {
        const body = {
          username: user.name,
          token: user.id,
        };
        const {data} = await axiosInstance.post("/users/sign-in", body);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      type={"button"}
      className={styles.kakaoLoginButton}
      onClick={handleClickKakaoSignIn}
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
