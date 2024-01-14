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
import sp from "../../common/images/sp.webp";
import "./styleChooseItem.css";

const ChooseItem = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <UserNavbar />
      <div className="choose-container flex center">
        <div className="choose-label">
          <h1>Choose Your Item to Try Them On Camera</h1>
        </div>
        <div className="choose-items">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide onClick={handleSubmit}>
              <img
                src={wedding}
                alt="Wedding"
                className="swiper-image"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sp}
                alt="Swim"
                className="swiper-image"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={wedding}
                alt="Wedding"
                className="swiper-image"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sp}
                alt="Swim"
                className="swiper-image"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseItem;
