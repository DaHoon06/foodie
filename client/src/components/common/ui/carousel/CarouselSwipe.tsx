import {Swiper, SwiperClass, SwiperSlide} from "swiper/react"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import * as styles from './Carousel.css';
import Image from "next/image";
import {useState} from "react";
import {SwiperProps} from "swiper/swiper-react";

interface CarouselItems {
  originName: string;
  path1: string;
}

interface Props {
  items: CarouselItems[];
  options?: SwiperProps;
}

export const CarouselSwipe = (props: Props) => {
  const {items, options} = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCarousel = (swiper: SwiperClass) => {
    setCurrentPage(swiper.realIndex + 1)
  }

  return (
    <div className={styles.carouselLayout}>
      <Swiper
        {...options}
        onSlideChange={(swiper) => onChangeCarousel(swiper)}
        slidesPerView={1}
        loop={items.length > 1}
        className={styles.carouselContainer}
      >
        {items.map(item => {
          return (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className={styles.carouselBanner}>
                <Image
                  className={styles.carouselBannerImage}
                  src={item.path1}
                  alt={item.originName}
                  priority={true}
                  width={300}
                  height={200}/>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
      <div className={styles.carouselCountWrapper}>
        <span className={styles.carouselCount}>
          {currentPage}/{items.length}
        </span>
      </div>
    </div>

  )
}
