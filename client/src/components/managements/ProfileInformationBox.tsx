import {ReactElement} from "react";

import * as styles from "./styles/ProfileInformationBox.css";
import classNames from "classnames";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {FaUser} from "react-icons/fa6";
import {Typography} from "@components/common/typography/Typography";
import {Button} from "@components/common/buttons";
import {useRouter} from "next/router";
import {useAuth} from "@providers/AuthProvider";
import {KakaoButton} from "@components/kakao/KakaoButton";
import {User} from "@interfaces/users/user";
import Image from "next/image";

interface Props {
  user: User | null;
}

export const ProfileInformationBox = (props: Props): ReactElement => {
  const {user} = props;
  const {isLogin} = useAuth();
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
                <Image
                  width={120}
                  height={110}
                  priority={true}
                  src={user.profileImage}
                  alt={`Preview`}
                  className={styles.profileImage}
                />
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
              <Typography fontSize={14} color={"white000"} fontWeight={500}>
                프로필 수정
              </Typography>
            </Button>
          </FlexBox>

          <FlexBox alignItems="flex-start" gap={10}>
            <Typography>{user.nickname}</Typography>

            <Typography fontSize={14} color={"gray400"} fontWeight={300}>
              {user.description.length > 0
                ? user.description
                : "소개 문구를 넣어주세요."}
            </Typography>
          </FlexBox>
        </>
      ) : (
        <KakaoButton/>
      )}
    </FlexBox>
  );
};
