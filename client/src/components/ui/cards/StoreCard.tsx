import Image from "next/image";
import * as styles from "./styles/StoreCard.css";
import { RiEyeLine, RiPencilFill } from "react-icons/ri";
import { Typography } from "@components/common/typography/Typography";
import React, { ReactElement } from "react";

export interface StoreCardItem {
  title: string;
  location: string;
  point: number;
  categories: string;
  viewCount: number;
  reviewCount: number;
  thumbnail?: string;
}

interface Props {
  items: StoreCardItem;
  isLoading?: boolean;
}

export const StoreCard = React.memo((props: Props): ReactElement => {
  const { categories, point, reviewCount, viewCount, location, title } =
    props.items;
  return (
    <>
      {props.isLoading ? (
        <>TEST</>
      ) : (
        <article className={styles.storeCardLayout}>
          <div className={styles.thumbnailImageWrapper}>
            <Image
              className={styles.thumbnailImage}
              src={"/images/food1.webp"}
              alt={"food"}
              width={200}
              height={200}
            />
          </div>
          <div className={styles.storeInformationContainer}>
            <Typography
              lineHeight={22}
              className={styles.locationLabel}
              fontSize={14}
              color={"gray400"}
              fontWeight={300}
            >
              {location}
            </Typography>

            <div className={styles.storeTitle}>
              <Typography as={"span"} fontWeight={700} fontSize={22}>
                {title}
              </Typography>
              <Typography
                as={"span"}
                fontWeight={700}
                color={"primary"}
                fontSize={28}
              >
                {point}
              </Typography>
            </div>
            <Typography
              className={styles.storeCategories}
              fontSize={14}
              color={"gray400"}
              fontWeight={400}
            >
              {categories}
            </Typography>
            <div className={styles.storeCountLabelWrapper}>
              <div className={styles.storeCountLabel}>
                <RiEyeLine size={14} color={"#939393"} />
                <Typography
                  as={"span"}
                  className={styles.storeOptionLabel}
                  fontSize={14}
                  color={"gray400"}
                  fontWeight={300}
                >
                  {viewCount}
                </Typography>
              </div>
              <div className={styles.storeCountLabel}>
                <RiPencilFill size={14} color={"#939393"} />
                <Typography
                  as={"span"}
                  className={styles.storeOptionLabel}
                  fontSize={14}
                  color={"gray400"}
                  fontWeight={300}
                >
                  {reviewCount}
                </Typography>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
});

StoreCard.displayName = "StoreCard";
