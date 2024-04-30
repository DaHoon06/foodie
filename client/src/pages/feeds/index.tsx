import {NextPage} from "next";
import {BasicLayout} from "@layouts/BasicLayout";
import {ReactElement} from "react";
import {Typography} from "@components/common/typography/Typography";
import {TitleBox} from "@layouts/TitleBox";
import {MyFeedLists} from "@components/feeds/MyFeedLists";

const FeedsPage: NextPage = (): ReactElement => {

  return (
    <BasicLayout>
      <TitleBox justifyContent={'center'}>
        <Typography variant={'h1'} fontWeight={600}>
          내가 작성한 여행기
        </Typography>
      </TitleBox>
      <MyFeedLists />
    </BasicLayout>
  );
};
export default FeedsPage;
