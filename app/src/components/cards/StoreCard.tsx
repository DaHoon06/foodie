import Image from "next/image";
import * as styles from './StoreCard.css';
import {RiEyeLine, RiPencilFill} from "react-icons/ri";

export const StoreCard = () => {
  return (
    <>
      <article className={styles.storeCardLayout}>
        <div className={styles.thumbnailImageWrapper}>
          <Image className={styles.thumbnailImage} src={'/images/food1.webp'} alt={'food'} width={200} height={200}/>
        </div>
        <p>
          구로구/구로동
        </p>
        <p>
          치킨시대
        </p>
        <p>양식/튀김,치킨</p>
        <p>4.6 (리뷰 91)</p>
      </article>
      <article className={styles.storeCardLayout}>
        <div className={styles.thumbnailImageWrapper}>
          <Image className={styles.thumbnailImage} src={'/images/food2.webp'} alt={'food'} width={200} height={200}/>
        </div>
        <p className={styles.locationLabel}>
          구로구/구로동
        </p>
        <div className={styles.storeTitle}>
          <span>
            치킨시대
          </span>
          <span>4.6</span>
        </div>
        <p className={styles.storeCategories}>양식/튀김,치킨</p>
        <div className={styles.storeCountLabel}>
          <div>
            <RiEyeLine size={12}/>
            98,344
          </div>
          <div>
            <RiPencilFill size={12}/>
            91
          </div>
        </div>
      </article>
    </>
  )
}