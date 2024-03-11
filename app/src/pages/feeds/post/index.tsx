import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { BasicLayout } from "@layouts/BasicLayout";
import { NextPage } from "next";
import { ReactElement, useState } from "react";
import * as styles from "@styles/pages/feeds/PostPage.css";
import { FeedPost } from "@components/feeds/FeedPost";
import { Button } from "@components/buttons";
import { Avatar } from "@components/ui";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { FileUploadButton } from "@components/buttons/FileUploadButton";
import Image from "next/image";
import { FeedPostContainer } from "@containers/PostContainer";

const FeedPostPage: NextPage = (): ReactElement => {
  const router = useRouter();
  

  return (
    <BasicLayout>
      <FlexBox
        height={56}
        justifyContent="space-between"
        className={styles.feedListsTitle}
        direction="row"
      >
        <button type="button" onClick={() => router.back()}>
          <Typography color="primary" as="span" fontSize={14}>
            취소
          </Typography>
        </button>
        <Button type="submit">
          <Typography as="span" fontSize={12} color={"white000"}>
            포스팅
          </Typography>
        </Button>
      </FlexBox>
      <FeedPostContainer />
    </BasicLayout>
  );
};

export default FeedPostPage;
