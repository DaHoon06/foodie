import {NextPage} from "next";
import {BasicLayout} from "@layouts/BasicLayout";
import {ReactElement} from "react";
import {TitleBox} from "@layouts/TitleBox";
import {Typography} from "@components/common/typography/Typography";

const FeedListsPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <TitleBox justifyContent={'center'}>
        <Typography variant={'h1'} fontWeight={600}>
          내가 작성한 여행기
        </Typography>
      </TitleBox>
      <div>
        TEST
      </div>
    </BasicLayout>
  )
}
export default FeedListsPage;
