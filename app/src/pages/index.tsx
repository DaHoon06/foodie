import { HomeContainer } from "@containers/HomeContainer";
import { AppLayout } from "@layouts/AppLayout";
import { ReactElement } from "react";
import { NextPage } from "next";
import { queryClient } from "@libs/tanstack";
import { queryKeys } from "@services/keys/queryKeys";
import { getRestaurantListsApi } from "@apis/restaurant";
import { dehydrate } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

const HomePage: NextPage = (): ReactElement => {
  return (
    <AppLayout>
      <button type="button" onClick={() => signOut()}>
        tyest
      </button>
      <HomeContainer />
    </AppLayout>
  );
};

export default HomePage;

// export async function getStaticProps() {
//   const filter = {
//     sort: "gradeCount",
//     region: "all",
//   };
//   await queryClient.prefetchInfiniteQuery(
//     [queryKeys.lists.restaurantLists],
//     ({ pageParam = 1 }) => getRestaurantListsApi(filter, { pageParam })
//   );
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//     revalidate: 60,
//   };
// }
