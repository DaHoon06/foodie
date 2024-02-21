import {ReactElement, useEffect} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {prefetchingRestaurantList, useRestaurantQuery} from "@services/queries/listQuery";


export const StoreLists = (): ReactElement => {
  const {data: listQueryData, isLoading} = useRestaurantQuery();

  useEffect(() => {
    prefetchingRestaurantList().then();
  }, []);

  if (isLoading) return <div>...isLoading</div>

  return (
    <article className={styles.storeListsLayout}>
      <div className={styles.storeListsContainer}>
        {listQueryData.data.data.map((store: StoreCardItem, index: number) => {
          return (
            <div key={index}>
              <StoreCard
                items={store}
              />
            </div>
          )
        })}
      </div>
    </article>
  )
}