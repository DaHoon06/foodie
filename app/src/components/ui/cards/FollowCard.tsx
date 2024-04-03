import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "./FollowCard.css";
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";
import {Button} from "@components/common/buttons";

interface FollowCardProps {
  name: string;
  follow: number;
  description: number;
  userId: string;
  thumbnail?: string;
}

export const FollowCard = () => {

  const handleClickFollowButton = (userId: string) => {
    alert('팔로우')
  }

  return (
    <article className={styles.followCardLayout}>
      <FlexBox gap={10} justifyContent={"flex-start"}>
        <div className={styles.thumbnailImageBox}>
          <Image
            className={styles.thumbnailImage}
            src={"/images/profile.png"}
            alt={"profile_image"}
            width={70}
            height={70}
          />
        </div>

        <FlexBox justifyContent={"space-between"} alignItems={"center"}>
          <Typography fontWeight={600}>전다훈</Typography>
          <Typography fontWeight={300} color={"gray500"} fontSize={12}>
            팔로우 11 명
          </Typography>
          <Typography
            fontWeight={300}
            color={"gray500"}
            className={styles.profileDescription}
          >
            아뇽하세요 맛도리 입니다. 아뇽하세요 맛도리 입니다.
          </Typography>
        </FlexBox>
        <Button width={90} height={32} onClick={() => handleClickFollowButton('userId')}>
          <Typography as={"span"} color={'white000'}>
            팔로우
          </Typography>
        </Button>
      </FlexBox>
    </article>
  );
};
