import { BasicLayout } from "@layouts/BasicLayout";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FeedPostContainer } from "@containers/PostContainer";

const FeedPostPage: NextPage = (): ReactElement => {

  return (
    <BasicLayout>
      <FeedPostContainer />
    </BasicLayout>
  );
};

export default FeedPostPage;
