import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../common/base/button/Button";
import about from "../../common/images/about.jpg";
import mission from "../../common/images/mission.jpeg";
import { Link as ScrollLink } from "react-scroll";
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
        <div className="container flex center">
          <div className="card-column column-0">
            <div className="card card-color-0">
              <div className="border"></div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg"
                alt="Card 1"
              />
              <h1>Hey now, you're an allstar</h1>
            </div>
            <div className="card card-color-2">
              <div className="border"></div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg"
                alt="Card 2"
              />
              <h1>Hey now, you're a rock star</h1>
            </div>
          </div>
          <div className="card-column column-1">
            <div className="card card-color-1">
              <div className="border"></div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg"
                alt="Card 3"
              />
              <h1>Get your game on, go play</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg"
                alt="Card 4"
              />
              <h1>Get the show on, get paid</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
