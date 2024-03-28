import { ReactElement, useEffect, useState } from "react";
import * as styles from "./KakaoButton.css";
import Image from "next/image";
import { Typography } from "@components/common/typography/Typography";
import { useRouter } from "next/router";
import { getProviders, signIn } from "next-auth/react";

export const KakaoButton = (): ReactElement => {
  const router = useRouter();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
    console.log(result);
  };

  return (
    <button
      type={"button"}
      className={styles.kakaoLoginButton}
      onClick={handleKakao}
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
