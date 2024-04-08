import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "./FollowCard.css";
import Image from "next/image";
import {Typography} from "@components/common/typography/Typography";
import {Button} from "@components/common/buttons";

interface FollowCardProps {
  _id: string;
  username: string;
  follow?: number;
  description?: number;
  thumbnail?: string;
}

interface Props {
  user: FollowCardProps;
}

export const FollowCard = (props: Props) => {
  const {username, _id, description, follow, thumbnail} = props.user;
  const handleClickFollowButton = () => {
    alert(`${_id}_팔로우`)
  }

  const thumbnailUrl = thumbnail ? thumbnail : "/images/profile.png"

  return (
    <article className={styles.followCardLayout}>
      <FlexBox gap={10} justifyContent={"flex-start"}>
        <div className={styles.thumbnailImageBox}>
          <Image
            className={styles.thumbnailImage}
            src={thumbnailUrl}
            alt={"profile_image"}
            width={70}
            height={70}
          />
        </div>

        <FlexBox justifyContent={"space-between"} alignItems={"center"}>
          <Typography fontWeight={600}>{username}</Typography>
          {!!follow &&
            (<Typography fontWeight={300} color={"gray500"} fontSize={12}>
            팔로우 {follow} 명
          </Typography>)}

          <Typography
            fontWeight={300}
            color={"gray500"}
            className={styles.profileDescription}
          >
            {description}
          </Typography>
        </FlexBox>
        <Button width={90} height={32} onClick={handleClickFollowButton}>
          <Typography as={"span"} color={'white000'}>
            팔로우
          </Typography>
        </Button>
      </FlexBox>
    </article>
  );
};
