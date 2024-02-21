import {ReactElement, useEffect} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {allRestaurantListsApi} from "@services/apis/restaurant";

const mockData: StoreCardItem[] = [
  {title: '치킨시대', location: '구로구/구로동', categories: '양식/치킨,튀김', viewCount: 5000, reviewCount: 20, point: 4.7},
  {title: '치킨시대', location: '구로구/구로동', categories: '양식/치킨,튀김', viewCount: 5000, reviewCount: 20, point: 4.7},
  {title: '치킨시대', location: '구로구/구로동', categories: '양식/치킨,튀김', viewCount: 5000, reviewCount: 20, point: 4.7},
  {title: '치킨시대', location: '구로구/구로동', categories: '양식/치킨,튀김', viewCount: 5000, reviewCount: 20, point: 4.7},
  {title: '치킨시대', location: '구로구/구로동', categories: '양식/치킨,튀김', viewCount: 5000, reviewCount: 20, point: 4.7},
]

export const StoreLists = (): ReactElement => {

  const init = async () => {
    try {
      const {data} = await allRestaurantListsApi();
      console.log('SUCCESS', data)
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
        {mockData.map((store: StoreCardItem, index) => {
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