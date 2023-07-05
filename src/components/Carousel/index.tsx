import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";

import banner_1_desk from "../../assets/Desktop/banner-1.png";
import banner_1_tablet from "../../assets/Tablet/banner-1.png";
import banner_1_mobile from "../../assets/Mobile/banner-1.png";
import banner_2_desk from "../../assets/Desktop/banner-2.png";
import banner_2_tablet from "../../assets/Tablet/banner-2.png";
import banner_2_mobile from "../../assets/Mobile/banner-2.png";
import banner_3_desk from "../../assets/Desktop/banner-3.png";
import banner_3_tablet from "../../assets/Tablet/banner-3.png";
import banner_3_mobile from "../../assets/Mobile/banner-3.png";

interface IBanner {
  desk: string;
  tablet: string;
  mobile: string;
}

interface IBanners {
  banner_1: IBanner;
  banner_2: IBanner;
  banner_3: IBanner;
}

const banners: IBanners = {
  banner_1: {
    desk: banner_1_desk,
    tablet: banner_1_tablet,
    mobile: banner_1_mobile,
  },
  banner_2: {
    desk: banner_2_desk,
    tablet: banner_2_tablet,
    mobile: banner_2_mobile,
  },
  banner_3: {
    desk: banner_3_desk,
    tablet: banner_3_tablet,
    mobile: banner_3_mobile,
  },
};

export function CarouselComponent() {
  const selectSize = (banner: number): string => {
    if (window.innerWidth > 768) {
      switch (banner) {
        case 1:
          return banners.banner_1.desk;
        case 2:
          return banners.banner_2.desk;
        case 3:
          return banners.banner_3.desk;
        default:
          return "";
      }
    } else if (window.innerWidth > 375) {
      switch (banner) {
        case 1:
          return banners.banner_1.tablet;
        case 2:
          return banners.banner_2.tablet;
        case 3:
          return banners.banner_3.tablet;
        default:
          return "";
      }
    } else {
      switch (banner) {
        case 1:
          return banners.banner_1.mobile;
        case 2:
          return banners.banner_2.mobile;
        case 3:
          return banners.banner_3.mobile;
        default:
          return "";
      }
    }
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet" }}
    >
      <SwiperSlide className="-mt-1">
        <img src={selectSize(1)} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner_2_desk} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner_3_desk} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
