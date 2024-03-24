import { NextPage } from "next";
import { BasicLayout } from "@layouts/BasicLayout";
import { ReactElement } from "react";
import { Typography } from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "@styles/pages/feeds/FeedPage.css";
import { FeedCard } from "@components/ui/cards/FeedCard";

const FeedsPage: NextPage = (): ReactElement => {
  return (
    <BasicLayout>
      <FlexBox height={56} className={styles.feedListsTitle}>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          타임라인
        </Typography>
      </FlexBox>
      <div className={styles.feedListsLayout}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </BasicLayout>
  );
};
export default FeedsPage;
