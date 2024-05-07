import { HomeContainer } from "@containers/HomeContainer";
import { AppLayout } from "@layouts/AppLayout";
import { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { queryClient } from "@libs/tanstack";
import { dehydrate } from "@tanstack/react-query";
import { queryKeys } from "@services/keys/queryKeys";
import { feedListsApi } from "@apis/feeds/feed.api";
import { prefetchingMarker } from "@services/queries/maps/useMarkerQuery";
import { getSession } from "next-auth/react";

const HomePage: NextPage = (): ReactElement => {
  return (
    <AppLayout>
      <HomeContainer />
    </AppLayout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const session = await getSession(ctx);

    if (session.id) {
      prefetchingMarker(session.id);
    }
  } catch (e) {}

  const filter = {
    sido: "전체",
  };

  await queryClient.prefetchInfiniteQuery(
    [queryKeys.feeds.lists],
    ({ pageParam = 1 }) => feedListsApi(filter, { pageParam })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
