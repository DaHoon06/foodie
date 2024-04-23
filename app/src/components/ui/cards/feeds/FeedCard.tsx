import {ReactElement} from "react";
import * as styles from "./FeedCard.css";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Typography} from "@components/common/typography/Typography";
import Image from "next/image";
import {FaComment, FaRegHeart} from "react-icons/fa6";
import {formatDate} from "@utils/date";
import {FeedListsState} from "@interfaces/feeds/feed.lists";
import {CarouselSwipe} from "@components/ui/carousel/CarouselSwipe";
import {useRouter} from "next/router";
import Link from "next/link";

export type FeedListType = FeedListsState;

interface Props {
  feedCard: FeedListType
}

export const FeedCard = (props: Props): ReactElement => {
  const {feedId, feedContent, feedCreatedDate, user, shop, files} = props.feedCard;


  return (
    <article className={styles.feedCardLayout}>
      <Link href={`/feeds/${feedId}`}>
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
              {formatDate(new Date(feedCreatedDate))}
            </Typography>
          </FlexBox>
        </FlexBox>
      </Link>

      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {feedContent}
        </Typography>
      </div>

      {files && files.length > 0 && (<CarouselSwipe items={files}/>)}
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
          0
        </Typography>
        <FaComment color={"#888888"}/>
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
      </FlexBox>
    </article>
  );
};
