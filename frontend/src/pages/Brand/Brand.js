import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import "./styleBrand.css";

const Brand = () => {
  return (
    <div>
      <UserNavbar />
      <div className="brand-label flex center">
        <h1>Choose Your Brand</h1>
      </div>
      <div className="card-brand-container flex center">
        <div className="card-brand">
          <img
            src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI0OTY1ODM&ixlib=rb-1.2.1&q=80"
            alt="balloon with an emoji face"
            className="card-img-brand"
          />
          <span className="card-footer-brand">
            <span>Awesome speedy card</span>
            <span>2 minutes!</span>
          </span>
        </div>
        <div className="card-brand">
          <img
            src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI0OTY1ODM&ixlib=rb-1.2.1&q=80"
            alt="balloon with an emoji face"
            className="card-img-brand"
          />
          <span className="card-footer-brand">
            <span>Awesome speedy card</span>
            <span>2 minutes!</span>
          </span>
        </div>
        <div className="card-brand">
          <img
            src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI0OTY1ODM&ixlib=rb-1.2.1&q=80"
            alt="balloon with an emoji face"
            className="card-img-brand"
          />
          <span className="card-footer-brand">
            <span>Awesome speedy card</span>
            <span>2 minutes!</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Brand;
