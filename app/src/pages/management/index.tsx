import { NextPage } from "next";
import { ReactElement } from "react";
import { BasicLayout } from "@layouts/BasicLayout";
import { Typography } from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "@styles/pages/ManagementPage.css";
import { KakaoButton } from "@components/buttons/KakaoButton";
import { CgProfile } from "react-icons/cg";

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
          마이
        </Typography>
      </FlexBox>
      <div className={styles.profileContainer}>
        <FlexBox
          direction="row"
          gap={8}
          className={styles.managementPageLayout}
          justifyContent="space-between"
        >
          <div className={styles.profileBox}>
            <CgProfile color="#7d7d7d" size={40} />
          </div>
          <button>프로필 수정</button>
        </FlexBox>
        <FlexBox alignItems="flex-start">
          <Typography>훈</Typography>
          <Typography>안녕하세요.</Typography>
        </FlexBox>
        <FlexBox direction="row" justifyContent="flex-start">
          <div>
            <Typography>0</Typography>
            <Typography>팔로잉</Typography>
          </div>
          <div>
            <Typography>0</Typography>
            <Typography>팔로워</Typography>
          </div>
        </FlexBox>
      </div>

      <FlexBox>찜한 식당</FlexBox>
      <FlexBox direction="row" justifyContent="flex-start">
        포스트 아직 작성한 포스트가 없습니다.
      </FlexBox>
    </BasicLayout>
  );
};

export default ManagementPage;
