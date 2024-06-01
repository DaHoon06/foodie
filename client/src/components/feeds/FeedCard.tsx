import { ReactElement, useState } from "react";
import * as styles from "./styles/FeedCard.css";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { FaComment, FaRegHeart } from "react-icons/fa6";
import { formatDate } from "@utils/date";
import { FeedListsState } from "@interfaces/feeds/feed.lists";
import { CarouselSwipe } from "@components/common/ui/carousel/CarouselSwipe";
import Link from "next/link";
import { Avatar } from "@components/common/ui";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useAuth } from "@providers/AuthProvider";
import { PiNotePencilBold, PiTrashBold } from "react-icons/pi";
export type FeedListType = FeedListsState;

interface Props {
  feedCard: FeedListType;
}

const FeedOptionButton = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type={"button"} onClick={handleClickPopup}>
        <HiOutlineDotsVertical color={"#989898"} size={16} />
      </button>
      {isOpen && <OptionList />}
    </div>
  );
};

const OptionList = () => {
  return (
    <ul className={styles.feedOptionList}>
      <li>
        <FlexBox direction={"row"} gap={8}>
          <PiNotePencilBold size={20} color={"#2a2a2a"} />
          <Typography as={'span'}>수정</Typography>
        </FlexBox>
      </li>
      <li>
        <FlexBox direction={"row"} gap={8}>
          <PiTrashBold size={20} color={"#2a2a2a"} />
          <Typography as={'span'}>삭제</Typography>
        </FlexBox>
      </li>
    </ul>
  );
};

export const FeedCard = (props: Props): ReactElement => {
  const { feedId, feedContent, feedCreatedDate, user, shop, files } =
    props.feedCard;
  const { userId } = useAuth();

  return (
    <article className={styles.feedCardLayout}>
      <FlexBox gap={10} direction={"row"} justifyContent={"flex-start"}>
        <Link href={`/feeds/${feedId}`}>
          <FlexBox
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={10}
          >
            <div className={styles.profileBox}>
              <Avatar
                alt={`${user.nickname}_profile_image`}
                src={user.profileImage}
              />
            </div>
            <Typography as={"span"} fontSize={14} fontWeight={500}>
              {user.nickname}
            </Typography>
          </FlexBox>
        </Link>
        <FlexBox gap={10} direction={"row"} justifyContent={"flex-end"}>
          <Typography as={"span"} color={"gray400"} fontSize={12}>
            {formatDate(new Date(feedCreatedDate))}
          </Typography>
          {userId === user.creatorId && <FeedOptionButton />}
        </FlexBox>
      </FlexBox>

      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={300}>
          {feedContent}
        </Typography>
      </div>

      {files && files.length > 0 && <CarouselSwipe items={files} />}
      {shop && Object.entries(shop) && (
        <div className={styles.storeInfoBox}>
          <Typography fontSize={14} fontWeight={500}>
            {shop?.shopName}
          </Typography>
          <Typography color={"gray400"} fontSize={14} fontWeight={300}>
            {shop?.shopAddress.fullAddress}
          </Typography>
        </div>
      )}
      <FlexBox
        direction={"row"}
        justifyContent={"flex-start"}
        gap={10}
        className={styles.storeOptions}
      >
        <FaRegHeart color={"#888888"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
        <FaComment color={"#888888"} />
        <Typography fontSize={14} fontWeight={300} color={"gray400"}>
          0
        </Typography>
      </FlexBox>
    </article>
  );
};
