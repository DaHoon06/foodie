import {ReactElement} from "react";
import {BasicLayout} from "@layouts/BasicLayout";
import * as styles from "@styles/pages/feeds/FeedDetailPage.css";
import {Typography} from "@components/common/typography/Typography";
import {useRouter} from "next/router";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult,} from "next";
import {feedDetailWithCommentApi} from "@apis/feeds/feed.api";
import CustomHead from "@layouts/heads/CustomHead";
import FeedCard, {FeedListType} from "@components/feeds/FeedCard";
import BasicInput from "@components/common/inputs/BasicInput";
import {Button} from "@components/common/buttons";
import {TitleBox} from "@layouts/TitleBox";

interface Props {
  feed: FeedListType;
}

const FeedDetailPage = (props: Props): ReactElement => {
  const { feed } = props;
  const router = useRouter();
  const { feedId } = router.query;

  const handleClickHistoryBack = () => {
    router.back();
  };

  return (
    <>
      <CustomHead
        title={`고푸디 | gofoodie | ${feed.user.username} - ${feed.feedContent}`}
        description={feed.feedContent}
      />
      <BasicLayout>
        <TitleBox gap={130}>
          <button
            aria-label={"history-back-button"}
            type={"button"}
            onClick={handleClickHistoryBack}
          >
            <MdOutlineKeyboardArrowLeft size={24} color={"#d0d0d0"} />
          </button>
          <Typography
            variant={"h1"}
            letterSpacing={"-0.5"}
            fontSize={16}
            fontWeight={500}
          >
            리뷰
          </Typography>
        </TitleBox>

        <FeedCard feedCard={feed} />
        <section className={styles.commentLayout}>
          <div className={styles.commentBoxContainer}>
            <BasicInput placeholder={"댓글"} />
            <Button width={60} height={38}>
              등록
            </Button>
          </div>
        </section>
      </BasicLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ feed: FeedListType }>
> => {
  try {
    const { feedId } = query as { feedId: string };
    const data = await feedDetailWithCommentApi(feedId);
    if (!feedId || !data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        feed: data,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default FeedDetailPage;
