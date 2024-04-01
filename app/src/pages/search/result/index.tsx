import { Button } from "@components/common/buttons";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { BasicLayout } from "@layouts/BasicLayout";
import CustomHead from "@layouts/heads/CustomHead";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ReactElement, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import * as styles from "@styles/pages/search/result/SearchResultPage.css";
import { IoIosArrowBack } from "react-icons/io";
import { SearchBar } from "@components/form/SearchBar";
import { primaryIconColor } from "@styles/theme.css";
import Image from "next/image";
import { CustomHorizontalBar } from "@components/nav/CustomHorizontalBar";
import { StarRating } from "@components/ui/rating/star";
import { MdOutlineRestaurantMenu, MdAccessTime } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { ReviewCard } from "@components/ui/cards/ReviewCard";

type Props = {
  keyword: string;
};

const SearchResultPage = ({ keyword }: Props): ReactElement => {
  const [keywords, setKeywords] = useState(keyword);
  const title = keyword ? `${keyword} - 고푸디` : `고푸디`;

  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    // const maxKeywordLists = keywords.splice(0, 10); // 최대 10개만
    // setKeywords([newKeyword, ...maxKeywordLists]);
  };

  return (
    <>
      <CustomHead title={title} />
      <BasicLayout>
        <div className={styles.searchResultLayout}>
          <div className={styles.customResultPageBackButtonWrapper}>
            <button type={"button"} aria-label={"close_search_page_button"}>
              <IoIosArrowBack size={24} color={primaryIconColor} />
            </button>

            <Button
              borderRadius={50}
              height={38}
              width={116}
              variant={"primary"}
            >
              <FlexBox direction="row" gap={8}>
                <FaPlus color={"#fff"} size={14} />
                <Typography
                  as={"span"}
                  fontSize={12}
                  color={"white000"}
                  fontWeight={600}
                >
                  신규 장소 등록
                </Typography>
              </FlexBox>
            </Button>
          </div>

          <SearchBar keyword={keywords} onAddKeyword={handleAddKeyword} />

          <FlexBox gap={10}>
            <div className={styles.searchResultContainer}>
              <FlexBox direction={"column"} gap={4} alignItems={"flex-start"}>
                <Typography fontSize={16}>라크라센타</Typography>

                <FlexBox
                  justifyContent={"flex-start"}
                  direction={"row"}
                  gap={10}
                >
                  <Typography as={"span"} fontSize={14} color={"gray400"}>
                    2.6
                  </Typography>
                  <div>
                    <StarRating average={2.5} />
                  </div>

                  <Typography as={"span"} fontSize={14} color={"gray400"}>
                    34 명
                  </Typography>
                </FlexBox>

                <FlexBox
                  direction={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                  gap={4}
                >
                  <MdOutlineRestaurantMenu color={"#9a9a9a"} size={14} />
                  <Typography as={"span"} fontSize={14} color={"gray500"}>
                    브런치
                  </Typography>
                  <GrLocation color={"#9a9a9a"} size={14} />
                  <Typography fontSize={14} color={"gray500"}>
                    구로구/구로동
                  </Typography>
                </FlexBox>

                <FlexBox
                  alignItems={"center"}
                  direction={"row"}
                  justifyContent={"flex-start"}
                  gap={4}
                >
                  <MdAccessTime color={"#9a9a9a"} size={14} />
                  <Typography fontSize={14} color={"gray500"}>
                    영업종료
                  </Typography>
                  <LuParkingCircle color={"#9a9a9a"} size={14} />
                  <Typography fontSize={14} color={"gray500"}>
                    주차가능
                  </Typography>
                </FlexBox>

                <CustomHorizontalBar>
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/pasta.jpeg"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/food1.webp"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/food2.webp"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/pasta.jpeg"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/food1.webp"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                  <Image
                    className={styles.itemThumbnail}
                    src={"/images/food2.webp"}
                    alt={`${keyword}_thumbnail1`}
                    width={80}
                    height={80}
                  />
                </CustomHorizontalBar>
              </FlexBox>
            </div>
          </FlexBox>
          <Typography>{keywords} 에 대한 6 건의 리뷰</Typography>
          <FlexBox gap={8}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </FlexBox>
        </div>
      </BasicLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ keyword: string }>
> => {
  const { keyword } = query as { keyword: string };

  //todo 검색 조회

  return {
    props: {
      keyword,
    },
  };
};

export default SearchResultPage;
