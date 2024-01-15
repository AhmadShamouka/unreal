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

  const [formData, setFormData] = useState({
    name: "wedding",
    price: "2992",
    image: null,
  });
  const handleSubmit = async (e) => {
    const file = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add-clothes",
        formDataToSend
      );
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
        <hr className="hr-line" />
        <div className="choose-items">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide onClick={handleSubmit}>
              <img
                type="file"
                id="imageInput"
                src={wedding}
                alt="Wedding"
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
