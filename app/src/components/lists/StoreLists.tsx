import {ReactElement, useEffect, useState} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {allRestaurantListsApi} from "@services/apis/restaurant";


export const StoreLists = (): ReactElement => {
  const [lists, setLists] = useState<StoreCardItem[]>([]);
  const init = async () => {
    try {
      const axiosResponseValue = await allRestaurantListsApi();
      if (axiosResponseValue && axiosResponseValue.data) {
        const {data} = axiosResponseValue.data;
        setLists(data);
      }
    } catch (e) {
      console.log('EXCEPTION', e)
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <article className={styles.storeListsLayout}>
      <div className={styles.storeListsContainer}>
        {lists.map((store: StoreCardItem, index) => {
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