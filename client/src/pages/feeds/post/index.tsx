import { BasicLayout } from "@layouts/BasicLayout";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FeedPostContainer } from "@containers/PostContainer";
import CustomHead from "@layouts/heads/CustomHead";

const FeedPostPage: NextPage = (): ReactElement => {
  return (
    <>
      <CustomHead
        title={"여러분의 이야기를 들려주세요. | 고푸디"}
        description={"미식가들의 식도락 여행기 | 고푸디"}
      />
      <BasicLayout>
        <FeedPostContainer />
      </BasicLayout>
    </>
  );
};

export default FeedPostPage;
