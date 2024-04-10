import { HomeContainer } from "@containers/HomeContainer";
import { AppLayout } from "@layouts/AppLayout";
import { ReactElement } from "react";
import { NextPage } from "next";
import { queryClient } from "@libs/tanstack";
import { dehydrate } from "@tanstack/react-query";
import { queryKeys } from "@services/keys/queryKeys";
import { feedListsApi } from "@apis/feeds/feed.api";

const HomePage: NextPage = (): ReactElement => {
  return (
    <AppLayout>
      <HomeContainer />
    </AppLayout>
  );
};

export default HomePage;

// export async function getStaticProps() {
//   const filter = {
//     sido: "전체",
//   };
//   await queryClient.prefetchInfiniteQuery(
//     [queryKeys.feeds.lists],
//     ({ pageParam = 1 }) => feedListsApi(filter, { pageParam }))

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//     revalidate: 60,
//   };
// }
