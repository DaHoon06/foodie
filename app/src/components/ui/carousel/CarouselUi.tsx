import {Swiper, SwiperClass, SwiperSlide} from "swiper/react" // basic
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import {Autoplay} from 'swiper/modules';
import * as styles from './Carousel.css';
import Image from "next/image";
import {useState} from "react";
import {SwiperProps} from "swiper/swiper-react";

interface CarouselItems {
  name: string;
  path: string;
}

interface Props {
  items: CarouselItems[];
  options?: SwiperProps;
}


export const Carousel = (props: Props) => {
  const {items, options} = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCarousel = (swiper: SwiperClass) => {
    setCurrentPage(swiper.realIndex + 1)
  }

  return (
    <div className={styles.carouselLayout}>
      <Swiper
        centeredSlides={true}
        {...options}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => onChangeCarousel(swiper)}
        modules={[Autoplay]}
        loop={true}
        className={styles.carouselContainer}
      >
        {items.map(item => {
          return (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className={styles.carouselBanner}>
                <Image
                  className={styles.carouselBannerImage}
                  src={item.path}
                  alt={item.name}
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
