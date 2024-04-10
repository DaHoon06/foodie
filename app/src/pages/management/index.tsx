import { NextPage } from "next";
import { ReactElement } from "react";
import { BasicLayout } from "@layouts/BasicLayout";
import { Typography } from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "@styles/pages/ManagementPage.css";
import { FaUser } from "react-icons/fa6";
import { Button } from "@components/common/buttons";
import classNames from "classnames";

const ManagementPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <FlexBox height={56} className={styles.pageTitle}>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          마이페이지
        </Typography>
      </FlexBox>

      <FlexBox justifyContent="flex-start" gap={10}>
        <section className={classNames(styles.cardLayout)}>
          <FlexBox
            direction="row"
            gap={8}
            className={styles.managementPageLayout}
            justifyContent="space-between"
          >
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

            <Button width={120} height={38}>
              프로필 수정
            </Button>
          </FlexBox>

          <FlexBox alignItems="flex-start" gap={10}>
            <Typography>훈</Typography>

            <Typography fontSize={14} color={"gray400"} fontWeight={300}>
              소개 문구를 넣어주세요.
            </Typography>
          </FlexBox>
        </section>

        <section className={classNames(styles.managementItemContainer)}>
          <ul className={styles.managementItemList}>
            <li className={styles.managementItem}>
              <Typography fontSize={14} color={"gray400"} fontWeight={300}>
                로그아웃
              </Typography>
            </li>
            <li className={styles.managementItem}>
              <Typography fontSize={14} color={"gray400"} fontWeight={300}>
                회원탈퇴
              </Typography>
            </li>
          </ul>
        </section>
      </FlexBox>
    </BasicLayout>
  );
};

export default ManagementPage;
