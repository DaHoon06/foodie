import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import { BasicLayout } from "@layouts/BasicLayout";
import { Typography } from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { ProfileInformationBox } from "@components/managements/ProfileInformationBox";
import { ManagementLists } from "@components/managements/ManagementLists";
import { TitleBox } from "@layouts/TitleBox";
import { getSession } from "next-auth/react";
import { getUserProfileApi } from "@apis/users/user.api";
import { User } from "@interfaces/users/user";

interface Props {
  user: User | null;
}

const ManagementPage = ({ user }: Props): ReactElement => {
  return (
    <BasicLayout>
      <TitleBox justifyContent={"center"}>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          마이페이지
        </Typography>
      </TitleBox>

      <FlexBox justifyContent="flex-start" gap={10}>
        <ProfileInformationBox user={user} />
        <ManagementLists />
      </FlexBox>
    </BasicLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const session = await getSession(ctx);

    if (session) {
      const id = session.id;
      const axiosResult = await getUserProfileApi(id);
      const { data } = axiosResult;

      return {
        props: {
          user: data,
        },
      };
    } else {
      return {
        props: {
          user: null,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        user: null,
      },
    };
  }
};
export default ManagementPage;
