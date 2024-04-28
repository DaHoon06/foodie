import * as styles from './styles/ReviewCard.css';
import Image from "next/image";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Typography} from "@components/common/typography/Typography";
import {AiFillDislike} from "react-icons/ai";
import {ReactElement} from "react";

interface ReviewCardProps {
  thumbnail?: string;
  name: string;
  content: string;
  review: string;
  date: string;
}

export const ReviewCard = (): ReactElement => {
  return (
    <article className={styles.reviewCardLayout}>
      <FlexBox gap={2} direction={'row'} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Image
          src={"/images/dh.png"}
          alt={"profile_image"}
          width={44}
          height={44}
        />

        <div>
          <FlexBox direction={'row'} justifyContent={'space-between'}>
            <FlexBox direction={'row'} alignItems={'center'}>
              <Typography fontSize={16} as={'span'} fontWeight={600} color={'primary'}>dahoon06</Typography>
              <FlexBox direction={'row'} alignItems={'center'} justifyContent={"flex-start"}>
                <AiFillDislike size={12} color={'#bebebe'}/>
                <Typography fontSize={14} color={'gray400'} fontWeight={500} as={"span"}>
                  별로였어요
                </Typography>
              </FlexBox>

            </FlexBox>

            <Typography fontSize={14} as={'span'} fontWeight={400}
                        color={'gray400'}>2 일전</Typography>
          </FlexBox>
          <Typography fontSize={14} className={styles.reviewContentBox}>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution
            of letters, as opposed to using Content here, content here, making it look like readable English.
            Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
          </Typography>
        </div>


      </FlexBox>
    </article>
  )
}
