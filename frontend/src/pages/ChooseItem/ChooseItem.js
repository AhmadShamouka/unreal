import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styleChooseItem.css";
import cheerio from "cheerio";
const ChooseItem = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "wedding",
    price: "2992",
    image: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.allorigins.win/raw?url=https://www.azadea.com/en/women/clothing/dresses`
        );
        const $ = cheerio.load(res.data);
        const imageElements = $(".lazyload");
        const imageUrls = [];
        imageElements.each((index, image) => {
          imageUrls.push($(image).attr("data-lazysrc"));
        });
        setImages(imageUrls);
      } catch (e) {
        console.log(e);
        console.log("doesn't exist");
      }
    };

    fetchData();
  }, []);

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
          <h1>Click on Item to Try Them On Camera</h1>
          <hr className="hr-line-find" />
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
            <div>
              {images.map((image, index) => (
                <SwiperSlide onClick={handleSubmit}>
                  <div key={index}>
                    <div className="slide-container">
                      <img
                        type="file"
                        id="imageInput"
                        src={image + 1}
                        alt={`Product ${index + 1}`}
                        className="swiper-image"
                        loading="lazy"
                      />
                    </div>
                    {/* <span className="card-footer-find flex center">
                      <h2>{product.name}</h2>
                      <h3>Price: ${product.price}</h3>
                    </span> */}
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseItem;
