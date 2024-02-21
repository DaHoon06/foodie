import {ReactElement} from "react";
import * as styles from './StoreLists.css';
import {StoreCard} from "@components/cards/StoreCard";


export const StoreLists = (): ReactElement => {
  return (
    <article className={styles.storeListsLayout}>
      <div className={styles.storeListsContainer}>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
      </div>
    </article>
  )
}