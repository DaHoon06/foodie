import * as styles from './HomeContainer.css';
import {Carousel} from "@components/ui/carousel/CarouselUi";
import {StoreLists} from "@components/lists/StoreLists";


export const HomeContainer = () => {
  return (
    <div className={styles.homeContainerLayout}>
      <Carousel/>
      <div>
        맛집 카테고리
      </div>
      <StoreLists/>
    </div>
  )
}