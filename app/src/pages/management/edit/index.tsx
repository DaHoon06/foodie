import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { BasicLayout } from "@layouts/BasicLayout";
import { NextPage } from "next";
import { ReactElement } from "react";

const ProfileEditPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <FlexBox height={56}>
        <button>뒤로가기 버튼</button>
        <button>저장 버튼</button>
      </FlexBox>
      <div>작성</div>
    </BasicLayout>
  );
};

export default ProfileEditPage;
