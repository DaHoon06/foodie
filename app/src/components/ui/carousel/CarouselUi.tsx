import {Swiper, SwiperClass, SwiperSlide} from "swiper/react" // basic
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import {Autoplay} from 'swiper/modules';
import * as styles from './Carousel.css';
import Image from "next/image";
import {useState} from "react";

export const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCarousel = (swiper: SwiperClass) => {
    setCurrentPage(swiper.realIndex + 1)
  }

  return (
    <div style={{maxHeight: '300px'}}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => onChangeCarousel(swiper)}
        modules={[Autoplay]}
        loop={true}
        className={styles.carouselLayout}
      >
        <SwiperSlide>
          <div className={styles.carouselBanner}>
            <Image className={styles.carouselBannerImage} src={'/images/sample1.webp'} alt={'sample'} width={300}
                   height={300}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBanner}>
            <Image className={styles.carouselBannerImage} src={'/images/sample2.webp'} alt={'sample'} width={300}
                   height={300}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBanner}>
            <Image className={styles.carouselBannerImage} src={'/images/sample3.webp'} alt={'sample'} width={300}
                   height={300}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBanner}>
            <Image className={styles.carouselBannerImage} src={'/images/sample4.webp'} alt={'sample'} width={300}
                   height={300}/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.carouselCountWrapper}>{currentPage}/4</div>
    </div>

  )
}