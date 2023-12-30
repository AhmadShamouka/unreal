import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../common/base/button/Button";
import about from "../../common/images/about.jpg";
import "./styleLanding.css";

const Landing = () => {
  return (
    <div className="container-landing">
      <NavBar />
      <div className="landing flex center">
        <h1>DIGITAL FASHION IS THE NEW CHAPTER</h1>
        <Button text="Register" bgColor="white-bg" textColor="blue-text" />
      </div>
      <div className="about-container">
        <h1> ABOUT US</h1>
        <hr className="hr-line" />
        <div className="about-landing flex center">
          <div className="landing-text">
            <h2>Is the world of fashion calling your name?</h2>
            <h4>
              UnrealFit is not just a fashion platform; it's a revolution in the
              way we experience clothing. Born out of a passion for blending
              technology with style, we've embarked on a journey to redefine the
              online fashion landscape. Our platform goes beyond traditional
              online shopping by introducing cutting-edge augmented reality (AR)
              technology that allows users to virtually try on clothes before
              making a purchase. We believe that fashion is a deeply personal
              expression, and our mission is to empower individuals to explore
              their style confidently in the digital realm. At UnrealFit, we aim
              to make the online shopping experience more immersive, enjoyable,
              and tailored to each user's unique preferences.
            </h4>
          </div>
        </div>
      </div>
      <div className="container flex center">
        <div className="card-column column-0">
          <div className="card card-color-0">
            <div className="border"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg" />
            <h1>Hey now, you're an allstar</h1>
          </div>
          <div className="card card-color-2">
            <div className="border"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg" />
            <h1>Hey now, you're a rock star</h1>
          </div>
        </div>
        <div className="card-column column-1">
          <div className="card card-color-1">
            <div className="border"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg" />
            <h1>Get your game on, go play</h1>
          </div>
          <div className="card card-color-3">
            <div className="border"></div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg" />
            <h1>Get the show on, get paid</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
