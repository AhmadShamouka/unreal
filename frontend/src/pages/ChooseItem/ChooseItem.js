import Button from "../../common/base/button/Button";
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
import { useStore } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { ItemChoosen } from "./ChooseItemSlice";
const ChooseItem = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [trail, SetTrail] = useState({
    id: null,
  });
  const [data, setData] = useState({
    name: "",
    price: null,
    image: null,
  });
  const [required, setRequired] = useState("errorMsg");
  const store = useStore();
  const dispatch = useDispatch();
  const { UrlLink } = useSelector((state) => state.occasion);

  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(UrlLink);
        const data = await response.json();
        setImages(data.photoset.photo);
      } catch (error) {}
    };

    fetchImages();
  }, []);

  const urlToImageFile = async (url, filename) => {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: data.type };
    const file = new File([data], filename, metadata);
    return file;
  };
  const changeFileName = (file, newFileName) => {
    return new File([file], newFileName, {
      type: file.type,
      lastModified: new Date(),
    });
  };
  const handleImageChange = async (selectedImageUrl, name, price) => {
    let imageFile = await urlToImageFile(selectedImageUrl, selectedImageUrl);
    imageFile = changeFileName(imageFile, "newFileName.png");
    setImage(imageFile);
    setData({
      name: name,
      price: 12,
      image: imageFile,
    });
  };

  const handleSubmit = async () => {
    let success = false;
    try {
      const formDataImage = new FormData();
      formDataImage.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/convert_to_png",
        formDataImage
      );

      if (response.data.success === true) {
        success = true;
      }
    } catch (error) {}

    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("brand_id", 1);
    formData.append("category_id", 1);
    if (success === true) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/add-clothes",
          formData,
          {
            headers: {
              Authorization: authorization,
            },
          }
        );

        SetTrail({ id: response.data.Trails.id });
      } catch (error) {}
    }
  };

  const handleBuy = async () => {
    if (trail.id == null) {
      setRequired("errorMsg-signup");
    } else {
      setRequired("errorMsg");
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/update-trail",
          trail,
          {
            headers: {
              Authorization: authorization,
            },
          }
        );
        if (response.data.status === "success") {
          dispatch(
            ItemChoosen({
              ItemName: data.name,
            })
          );
          navigate("/brand");
        }
      } catch (error) {}
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
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <div>
              {images.map((image, index) => (
                <SwiperSlide>
                  <div key={index}>
                    <div className="slide-container flex center">
                      <img
                        type="file"
                        id="imageInput"
                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                        alt={image.title}
                        className="swiper-image"
                        loading="lazy"
                        onClick={() => {
                          handleImageChange(
                            `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
                            image.title,
                            image.desprition
                          );
                          handleSubmit();
                        }}
                      />
                    </div>
                    <span className="card-footer-find flex center">
                      <h3>{image.title}</h3>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="flex center">
            <Button text="BUY IT" onClick={handleBuy} />
          </div>
          <div className={required}>
            <h5>You need To Try Clothes Before You buy them</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseItem;
