import {BasicLayout} from "@layouts/BasicLayout";
import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {ReactElement} from "react";
import {FeedPostContainer} from "@containers/PostContainer";
import CustomHead from "@layouts/heads/CustomHead";
import {getSession} from "next-auth/react";
import {getUserProfileApi} from "@apis/users/user.api";
import {User} from "@interfaces/users/user";

interface Props {
  user: User;
}

const FeedPostPage = (props: Props): ReactElement => {
  const {user} = props;
  return (
    <>
      <CustomHead
        title={"여러분의 이야기를 들려주세요. | 고푸디"}
        description={"미식가들의 식도락 여행기 | 고푸디"}
      />
      <BasicLayout>
        <FeedPostContainer user={user}/>
      </BasicLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const id = session.id;
      const axiosResult = await getUserProfileApi(id);
      const {data} = axiosResult;
      return {
        props: {
          user: data
        }
      }
    } else {
      return {
        props: {
          user: null,
        }
      }
    }

  } catch (e) {
    return {
      props: {
        user: null,
      }
    }
  }
}

export default FeedPostPage;
