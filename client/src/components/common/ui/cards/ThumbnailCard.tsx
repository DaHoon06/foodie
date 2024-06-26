import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "./styles/ThumbnailCards.css";
import Image from "next/image";
import { Typography } from "@components/common/typography/Typography";
import React from "react";

interface Shop {
  title: string;
  description?: string;
  sido: string;
  sigungu: string;
  category: string;
}

interface Props {
  thumbnail?: string;
  content: string;
  shop?: Shop;
}

interface ThumbnailProps {
  item: Props;
}

export const ThumbnailCard = React.memo((props: ThumbnailProps) => {
  const { content, thumbnail, shop } = props.item;
  return (
    <article className={styles.thumbnailCardLayout}>
      <FlexBox gap={8} justifyContent={"flex-start"}>
        {thumbnail && (
          <div className={styles.thumbnailImageBox}>
            <Image
              className={styles.thumbnailImage}
              src={thumbnail}
              alt={"profile_image"}
              priority={true}
              width={120}
              height={96}
            />
          </div>
        )}

        {shop && (
          <FlexBox
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            gap={10}
          >
            <Typography fontWeight={600}>{shop.title}</Typography>
            <FlexBox
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              gap={4}
            >
              <Typography fontWeight={300} color={"gray500"} fontSize={12}>
                {shop.category}
              </Typography>
              <Typography fontWeight={300} color={"gray500"} fontSize={12}>
                {shop.sido} / {shop.sigungu}
              </Typography>
            </FlexBox>
          </FlexBox>
        )}

        <div className={styles.thumbnailCardContentBox}>
          <Typography
            className={styles.thumbnailCardContent}
            fontWeight={400}
            color={"gray500"}
          >
            {content}
          </Typography>
        </div>
      </FlexBox>
    </article>
  );
});

ThumbnailCard.displayName = "ThumbnailCard";
