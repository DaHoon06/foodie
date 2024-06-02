import { ReactElement, useEffect, useRef, useState } from "react";
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
import { useRouter } from "next/router";
export type FeedListType = FeedListsState;

interface Props {
  feedCard: FeedListType;
}

const FeedOptionButton = (props: { feedId: string }): ReactElement => {
  const { feedId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <button type={"button"} onClick={handleClickPopup}>
        <HiOutlineDotsVertical color={"#989898"} size={16} />
      </button>
      {isOpen && <OptionList feedId={feedId} />}
    </div>
  );
};

const OptionList = (props: { feedId: string }) => {
  const { feedId } = props;
  const router = useRouter();
  const handleClickEditFeed = () => {
    console.log(feedId);
    router.push(`/feeds/edit/${feedId}`);
  };

  const handleClickDeleteFeed = () => {
    alert("피드를 삭제하시겠습니까?");
  };

  return (
    <ul className={styles.feedOptionList}>
      <li>
        <button type="button" onClick={handleClickEditFeed}>
          <FlexBox direction={"row"} gap={8}>
            <PiNotePencilBold size={18} color={"#646464"} />
            <Typography as={"span"}>수정</Typography>
          </FlexBox>
        </button>
      </li>
      <li>
        <FlexBox direction={"row"} gap={8}>
          <PiTrashBold size={18} color={"#646464"} />
          <Typography as={"span"}>삭제</Typography>
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
          {userId === user.creatorId && <FeedOptionButton feedId={feedId} />}
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
