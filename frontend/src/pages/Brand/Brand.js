import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import "./styleBrand.css";
import Gucci from "../../common/images/gucci.png";
import HM from "../../common/images/hm.png";
import Zara from "../../common/images/zara.png";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
const Brand = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const { ItemName } = useSelector((state) => state.chooseItem);
  const search = ItemName;

  return (
    <div>
      <UserNavbar />
      <div className="brand-container">
        <div className="brand-label flex center">
          <h1>Choose Your Brand</h1>
        </div>
        <hr className="hr-line" />
        <div className="card-brand-container flex center">
          <Link to={`https://www.zara.com/lb/en/search?searchTerm=${search}`}>
            <div className="card-brand">
              <img
                src={Zara}
                alt="balloon with an emoji face"
                className="card-img-brand"
                loading="lazy"
              />
              <span className="card-footer-brand">
                <span>Zara</span>
                <span></span>
              </span>
            </div>
          </Link>
          <Link to={`https://www.hm.com/lb/en/search?searchTerm=${search}`}>
            <div className="card-brand">
              <img
                src={HM}
                alt="balloon with an emoji face"
                className="card-img-brand"
                loading="lazy"
              />
              <span className="card-footer-brand">
                <span>H & M</span>
                <span></span>
              </span>
            </div>
          </Link>
          <Link to={`https://www.gucci.com/lb/en/search?searchTerm=${search}`}>
            <div className="card-brand">
              <img
                src={Gucci}
                alt="balloon with an emoji face"
                className="card-img-brand"
              />
              <span className="card-footer-brand">
                <span>GUCCI</span>
                <span></span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
