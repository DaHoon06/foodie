import * as styles from './HomeContainer.css';
import {Carousel} from "@components/ui/carousel/CarouselUi";


export const HomeContainer = () => {
  return (
    <div className={styles.homeContainerLayout}>
      <Carousel/>
      <div>
        test
      </div>
    </div>
  )
}