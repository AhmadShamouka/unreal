import React, { useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import wedding from "../../common/images/dress2.jpeg";
import sp from "../../common/images/sp.webp";
import "./styleChooseItem.css";

const ChooseItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/", formData);
      const header = response.data.authorisation.token;
      localStorage.setItem("jwtToken", header);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
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
