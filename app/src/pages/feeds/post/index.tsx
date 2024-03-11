import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { BasicLayout } from "@layouts/BasicLayout";
import { NextPage } from "next";
import { ReactElement } from "react";
import * as styles from "@styles/pages/feeds/PostPage.css";
import { FeedPost } from "@components/feeds/FeedPost";
import { Button } from "@components/buttons";
import { Avatar } from "@components/ui";
import { useRouter } from "next/router";
import { FiCamera, FiMapPin } from "react-icons/fi";

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
      <div className={styles.postLayout}>
        <FlexBox
          className={styles.postBodyContainer}
          direction="row"
          alignItems="flex-center"
          justifyContent="flex-start"
        >
          <Avatar alt={"dahoon"} src={"/images/dh.png"} />
          <FeedPost />
        </FlexBox>

        <FlexBox
          direction="row"
          justifyContent="space-between"
          className={styles.postOptionContainer}
        >
          <FlexBox direction="row" justifyContent="flex-start" gap={4}>
            <FiCamera color={"#FF7101"} />
            <Typography color="primary" as="span" fontSize={14}>
              사진
            </Typography>
          </FlexBox>
          <FlexBox direction="row" justifyContent="flex-end" gap={4}>
            <FiMapPin color={"#FF7101"} />
            <Typography color="primary" as="span" fontSize={14}>
              장소
            </Typography>
          </FlexBox>
        </FlexBox>
        <div className={styles.imagesContainer}></div>
      </div>
    </BasicLayout>
  );
};

export default FeedPostPage;
