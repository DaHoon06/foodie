import {HomeContainer} from "@containers/HomeContainer";
import {AppLayout} from "@layouts/AppLayout";
import {ReactElement} from "react";
import {NextPage} from "next";
import {queryClient} from "@libs/tanstack";
import {queryKeys} from "@services/keys/queryKeys";
import {getRestaurantListsApi} from "@services/apis/restaurant";
import {dehydrate} from "@tanstack/react-query";

const HomePage: NextPage = (): ReactElement => {

  return (
    <AppLayout>
      <HomeContainer/>
    </AppLayout>
  );
}

export default HomePage;

export async function getStaticProps() {
  const sort = "1";
  await queryClient.prefetchInfiniteQuery(
    [queryKeys.lists.restaurantLists],
    ({ pageParam = 1 }) => getRestaurantListsApi(sort,{pageParam})
  )
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
    revalidate: 60
  }
}
