import {ReactElement, useEffect} from "react";
import * as styles from './StoreLists.css';
import {StoreCard, StoreCardItem} from "@components/cards/StoreCard";
import {prefetchingRestaurantList, useRestaurantQuery} from "@services/queries/listQuery";

interface Props {
  sort: string;
}

export const StoreLists = (props: Props): ReactElement => {
  const {sort} = props;
  const {data: listQueryData, isLoading} = useRestaurantQuery(sort);
  useEffect(() => {
    prefetchingRestaurantList().then();
  }, []);

  if (isLoading) return <div>...isLoading</div>
  //todo: 데이터가 없을 경우에 대한 처리 필요
  if (!listQueryData) return <div>데이터가 존재하지 않습니다.</div>

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
