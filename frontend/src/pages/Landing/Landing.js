import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../common/base/button/Button";
import about from "../../common/images/about.jpg";
import mission from "../../common/images/mission.jpeg";
import formal from "../../common/images/aa.jpeg";
import dress from "../../common/images/dress1.jpg";
import wedding from "../../common/images/dress2.jpeg";
import swim from "../../common/images/swim.jpeg";
import sleepover from "../../common/images/pijamas.webp";
import coat from "../../common/images/coats.jpg";
import traditional from "../../common/images/tradi.jpeg";
import sport from "../../common/images/sp.webp";
import casual from "../../common/images/casual.jpeg";

import "./styleLanding.css";

const Landing = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const revealElement = document.getElementById("revealElement");

      if (revealElement) {
        const elementTop = revealElement.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight / 2;

        if (elementTop < windowHeight - triggerPoint) {
          setReveal(true);
        } else {
          setReveal(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-landing">
      <NavBar />
      <section>
        <div className="landing flex center">
          <h1>DIGITAL FASHION IS THE NEW CHAPTER</h1>
          <Button text="Register" bgColor="white-bg" textColor="blue-text" />
        </div>
      </section>

      <section className="reveal-div">
        <div id="revealElement" className={`reveal ${reveal ? "active" : ""}`}>
          <div className="about-container">
            <h1> ABOUT US</h1>
            <hr className="hr-line" />
            <div className="about-landing flex center">
              <div className="landing-text">
                <h2>Is the world of fashion calling your name?</h2>
                <h4>
                  UnrealFit is not just a fashion platform; it's a revolution in
                  the way we experience clothing. Born out of a passion for
                  blending technology with style, we've embarked on a journey to
                  redefine the online fashion landscape. Our platform goes
                  beyond traditional online shopping by introducing cutting-edge
                  augmented reality (AR) technology that allows users to
                  virtually try on clothes before making a purchase. We believe
                  that fashion is a deeply personal expression, and our mission
                  is to empower individuals to explore their style confidently
                  in the digital realm. At UnrealFit, we aim to make the online
                  shopping experience more immersive, enjoyable, and tailored to
                  each user's unique preferences.
                </h4>
              </div>
              <div className="landing-img">
                <img src={about} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reveal-div">
        <div id="revealElement" className={`reveal ${reveal ? "active" : ""}`}>
          <div className="about-container">
            <h1> OUR MISSION</h1>
            <hr className="hr-line" />
            <div className="about-landing flex center">
              <div className="landing-img">
                <img src={mission} />
              </div>
              <div className="landing-text">
                <h2>Empowering individuals through digital fashion</h2>
                <h4>
                  At UnrealFit, our mission is to revolutionize the way people
                  perceive and interact with fashion in the digital age. We are
                  committed to providing a platform where users can not only
                  discover the latest trends but also experience a new dimension
                  of personalized and immersive shopping. By integrating
                  cutting-edge technology, such as augmented reality, we empower
                  individuals to confidently express their unique style
                  preferences. Join us on this journey of redefining fashion and
                  making digital shopping a delightful and personalized
                  experience for everyone.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-temp flex center">
          <div className="card-column column-0">
            <div className="card card-color-0">
              <div className="border"></div>
              <img src={coat} alt="Card 1" />
              <h1>OUTERWEAR</h1>
            </div>
            <div className="card card-color-2">
              <div className="border"></div>
              <img src={casual} alt="Card 1" />
              <h1>CASUAL WEAR</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <img src={sport} alt="Card 1" />
              <h1>SPORTS WEAR</h1>
            </div>
          </div>
          <div className="card-column column-1">
            <div className="card card-color-0">
              <div className="border"></div>
              <img src={sleepover} alt="Card 1" />
              <h1>SLEEPOVER</h1>
            </div>
            <div className="card card-color-2">
              <div className="border"></div>
              <img src={wedding} alt="Card 1" />
              <h1>WEDDING EVENTS</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <img src={dress} alt="Card 1" />
              <h1>DRESS</h1>
            </div>
          </div>
          <div className="card-column column-0">
            <div className="card card-color-0">
              <div className="border"></div>
              <img src={traditional} alt="Card 1" />
              <h1>TRADITIONALS</h1>
            </div>
            <div className="card card-color-2">
              <div className="border"></div>
              <img src={swim} alt="Card 1" />
              <h1>SWIMWEAR</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <img src={formal} alt="Card 1" />
              <h1>FORMAL WEAR</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
