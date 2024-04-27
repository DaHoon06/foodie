import {NextPage} from "next";
import {ReactElement} from "react";
import {BasicLayout} from "@layouts/BasicLayout";
import {Typography} from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {ProfileInformationBox} from "@components/managements/ProfileInformationBox";
import {ManagementLists} from "@components/managements/ManagementLists";
import {TitleBox} from "@layouts/TitleBox";

const ManagementPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <TitleBox>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          마이페이지
        </Typography>
      </TitleBox>

      <FlexBox justifyContent="flex-start" gap={10}>
        <ProfileInformationBox/>

        <ManagementLists/>
      </FlexBox>
    </BasicLayout>
  );
};

export default ManagementPage;
