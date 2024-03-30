import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "./ThumbnailCards.css";
import Image from "next/image";
import { Typography } from "@components/common/typography/Typography";

interface Props {
  thumbnail?: string;
  content: string;
}

interface ThumbnainProps {
  item: Props;
}

export const ThumbnailCard = (props: ThumbnainProps) => {
  const { content } = props.item;
  return (
    <article className={styles.thumbnailCardLayout}>
      <FlexBox gap={8} justifyContent={"flex-start"}>
        <div className={styles.thumbnailImageBox}>
          <Image
            className={styles.thumbnailImage}
            src={"/images/banner2.webp"}
            alt={"profile_image"}
            width={120}
            height={110}
          />
        </div>

        <FlexBox
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          gap={20}
        >
          <Typography fontWeight={600}>치킨시대</Typography>
          <Typography fontWeight={300} color={"gray500"} fontSize={12}>
            서울/구로구
          </Typography>
        </FlexBox>
        <div className={styles.thumbnailCardContentBox}>
          <Typography
            className={styles.thumbnailCardContent}
            fontWeight={300}
            color={"gray500"}
          >
            {content}
          </Typography>
        </div>
      </FlexBox>
    </article>
  );
};
