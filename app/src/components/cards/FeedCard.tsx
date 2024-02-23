import {ReactElement} from "react";
import * as styles from './FeedCard.css';
import FlexBox from "@components/common/headless/flex-box/FlexBox";

export const FeedCard = (): ReactElement => {
  return (
    <article className={styles.feedCardLayout}>
      <FlexBox direction={"row"} alignItems={"flex-start"}>
        <div>
          프로필 이미지
        </div>
        <FlexBox direction={"row"} justifyContent={'space-between'}>
          <FlexBox alignItems={"flex-start"}>
            <div>닉네임</div>
            <div>
              팔로워
            </div>
          </FlexBox>
          <div>
            포스팅 시간 (2 분전)
          </div>
        </FlexBox>
      </FlexBox>
      <div>
        본문 내용
      </div>
      <div>
        포스팅 이미지
      </div>
      <div>
        좋아요, 댓글

      </div>
    </article>
  )
}
