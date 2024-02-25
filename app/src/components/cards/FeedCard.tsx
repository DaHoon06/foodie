import {ReactElement} from "react";
import * as styles from './FeedCard.css';
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Typography} from "@components/common/typography/Typography";
import Image from "next/image";
import { FaRegHeart, FaComment } from "react-icons/fa6";

export const FeedCard = (): ReactElement => {
  return (
    <article className={styles.feedCardLayout}>
      <FlexBox gap={10} direction={"row"} justifyContent={'flex-start'}>
        <div className={styles.profileBox} >
          <Image src={'/images/dh.png'} alt={'profile_image'} width={44} height={44} />
        </div>
        <FlexBox direction={"row"} justifyContent={'space-between'} alignItems={'flex-start'}>
          <Typography as={'span'} fontSize={14} fontWeight={'500'}>
            dahoon06
          </Typography>
          <Typography as={'span'} color={"gray400"} fontSize={12}>
            2 분전
          </Typography>
        </FlexBox>
      </FlexBox>
      <div className={styles.contentBox}>
        <Typography fontSize={14} fontWeight={"300"}>
          친구가 가보자고 해서 방문한 브런치 카페, 커피 한 잔의 여유를 즐김~ :)
        </Typography>
      </div>

      <div className={styles.imageBox}>
        <Image className={styles.images} src={'/images/banner2.webp'} alt={'thumbnail_banner'} width={200}
               height={300}/>
      </div>

      <div className={styles.storeInfoBox}>
        <Typography fontSize={14} fontWeight={'500'}>
          농부와 돌집
        </Typography>
        <Typography color={"gray400"} fontSize={14} fontWeight={'300'}>
          제주 제주시 한경면 중간서로 3285
        </Typography>
      </div>
      <FlexBox direction={'row'} justifyContent={'flex-start'} gap={10} className={styles.storeOptions}>
        <FaRegHeart color={'#888888'} />
        <Typography fontSize={14} fontWeight={'300'} color={"gray400"}>
          11
        </Typography>
        <FaComment color={'#888888'} />
        <Typography fontSize={14} fontWeight={'300'} color={"gray400"}>
          2
        </Typography>
      </FlexBox>
    </article>
  )
}
