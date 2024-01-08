import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import wedding from "../../common/images/dress2.jpeg";
import swim from "../../common/images/swim.jpeg";
import "./styleChooseItem.css";

const ChooseItem = () => {
  return (
    <div>
      <UserNavbar />
      <div className="choose-item-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={wedding} alt="Wedding Image" className="swiper-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swim} alt="Swim Image" className="swiper-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wedding} alt="Wedding Image" className="swiper-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swim} alt="Swim Image" className="swiper-image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseItem;
