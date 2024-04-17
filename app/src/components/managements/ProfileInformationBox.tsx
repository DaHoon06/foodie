import {ReactElement} from "react";

import * as styles from "./ProfileInformationBox.css";
import classNames from "classnames";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {FaUser} from "react-icons/fa6";
import {Typography} from "@components/common/typography/Typography";
import {Button} from "@components/common/buttons";
import {useRouter} from "next/router";
import {useAuth} from "@providers/AuthProvider";
import {KakaoButton} from "@components/kakao/KakaoButton";

export const ProfileInformationBox = (): ReactElement => {
  const { isLogin } = useAuth();
  const router = useRouter();

  const handleClickProfileEdit = () => {
    router.push("/management/edit");
  };
  return (
    <FlexBox gap={20} className={classNames(styles.cardLayout)}>
      {isLogin ? (
        <>
          <FlexBox direction="row" gap={8} justifyContent="space-between">
            <FlexBox direction="row" justifyContent="flex-start" gap={10}>
              <div className={styles.profileBox}>
                <FaUser color="#b7b7b7" size={26} />
              </div>

              <div className={styles.profileInfoBox}>
                <FlexBox direction="row" justifyContent="flex-start" gap={8}>
                  <FlexBox justifyContent="flex-start">
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"black100"}
                      fontWeight={700}
                    >
                      0
                    </Typography>
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"gray400"}
                      fontWeight={300}
                    >
                      팔로워
                    </Typography>
                  </FlexBox>
                  <FlexBox justifyContent="flex-start">
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"black100"}
                      fontWeight={700}
                    >
                      0
                    </Typography>
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"gray400"}
                      fontWeight={300}
                    >
                      팔로잉
                    </Typography>
                  </FlexBox>

                  <FlexBox justifyContent="flex-start">
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"primary"}
                      fontWeight={700}
                    >
                      0
                    </Typography>
                    <Typography
                      as="span"
                      fontSize={14}
                      color={"gray400"}
                      fontWeight={300}
                    >
                      포스팅
                    </Typography>
                  </FlexBox>
                </FlexBox>
              </div>
            </FlexBox>

            <Button width={120} height={38} onClick={handleClickProfileEdit}>
              <Typography fontSize={14} color={'white000'} fontWeight={500}>
                프로필 수정
              </Typography>
            </Button>
          </FlexBox>

          <FlexBox alignItems="flex-start" gap={10}>
            <Typography>훈</Typography>

            <Typography fontSize={14} color={"gray400"} fontWeight={300}>
              소개 문구를 넣어주세요.
            </Typography>
          </FlexBox>
        </>
      ) : (
        <KakaoButton />
      )}
    </FlexBox>
  );
};
