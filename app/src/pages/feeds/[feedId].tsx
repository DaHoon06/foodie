import {ReactElement, useEffect} from "react";
import {BasicLayout} from "@layouts/BasicLayout";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import * as styles from "@styles/pages/feeds/FeedDetailPage.css";
import {Typography} from "@components/common/typography/Typography";
import {useRouter} from "next/router";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {feedDetailApi} from "@apis/feeds/feed.api";

const FeedDetailPage = (): ReactElement => {
  const router = useRouter();
  const {feedId} = router.query;
  console.log(feedId)

  useEffect(() => {

  }, []);

  const handleClickHistoryBack = () => {
    router.back()
  }

  return (
    <BasicLayout>
      <FlexBox direction={"row"} justifyContent={"flex-start"} height={56} className={styles.feedDetailTitle} gap={130}>
        <button aria-label={'history-back-button'} type={'button'} onClick={handleClickHistoryBack}>
          <MdOutlineKeyboardArrowLeft size={24} color={"#d0d0d0"}/>
        </button>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          리뷰
        </Typography>
      </FlexBox>
    </BasicLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
                                                               query,
                                                             }: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ feedId: string }>
> => {
  try {
    const {feedId} = query as { feedId: string };
    // todo 잘못된 feedId 요청일 경우에 대한 처리
    if (!feedId) return {props: {feedId: ''}}
    const data = await feedDetailApi(feedId);
    console.log(data)
    return {
      props: {
        feedId,
      },
    };
  } catch (e) {
    console.log(e)
    return {
      props: {
        feedId: '',
      }
    }
  }
};

export default FeedDetailPage;
