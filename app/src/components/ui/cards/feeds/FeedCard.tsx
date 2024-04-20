import {ReactElement} from "react";
import * as styles from "./FeedCard.css";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Typography} from "@components/common/typography/Typography";
import Image from "next/image";
import {FaComment, FaRegHeart} from "react-icons/fa6";
import {dateConvert} from "@utils/date";
import {FeedListsState} from "@interfaces/feeds/feed.lists";

export type FeedListType = FeedListsState;

interface Props {
  feedCard: FeedListType
}

export const FeedCard = (props: Props): ReactElement => {
  const {feedId, feedContent, feedCreatedDate, user, shop} = props.feedCard;
  return (
    <article className={styles.feedCardLayout}>
      <FlexBox gap={10} direction={"row"} justifyContent={"flex-start"}>
        <div className={styles.profileBox}>
          <Image
            src={"/images/dh.png"}
            alt={"profile_image"}
            width={44}
            height={44}
          />
        </div>
        <FlexBox
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Typography as={"span"} fontSize={14} fontWeight={500}>
            {user.username}
          </Typography>
          <Typography as={"span"} color={"gray400"} fontSize={12}>
            {dateConvert(feedCreatedDate)}
          </Typography>
        </FlexBox>
      </FlexBox>
      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {feedContent}
        </Typography>
      </div>

      <div className={styles.imageBox}>
        <Image
          className={styles.images}
          src={"/images/banner2.webp"}
          alt={"thumbnail_banner"}
          width={200}
          height={300}
        />
      </div>

      {
        shop && Object.entries(shop) && (
          <div className={styles.storeInfoBox}>
            <Typography fontSize={14} fontWeight={500}>
              {shop?.shopName}
            </Typography>
            <Typography color={"gray400"} fontSize={14} fontWeight={300}>
              {shop?.shopAddress.fullAddress}
            </Typography>
          </div>
        )
      }


      <FlexBox
        direction={"row"}
        justifyContent={"flex-start"}
        gap={10}
        className={styles.storeOptions}
      >
        <FaRegHeart color={"#888888"}/>
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          11
        </Typography>
        <FaComment color={"#888888"}/>
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          2
        </Typography>
      </FlexBox>
    </article>
  );
};
