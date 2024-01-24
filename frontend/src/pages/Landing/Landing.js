import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Button from "../../common/base/button/Button";
import about from "../../common/images/about.jpg";
import mission from "../../common/images/mission.jpeg";
import formal from "../../common/images/aa.jpeg";
import dress from "../../common/images/dress.jpeg";
import wedding from "../../common/images/dress2.jpeg";
import swim from "../../common/images/swim.jpeg";
import sleepover from "../../common/images/pijamas.jpeg";
import coat from "../../common/images/coats.jpg";
import traditional from "../../common/images/tradi.jpeg";
import sport from "../../common/images/sp.webp";
import casual from "../../common/images/casual.jpeg";
import arrow1 from "../../common/images/arrow.png";
import arrow2 from "../../common/images/arrow2.png";
import arrow3 from "../../common/images/arrow3.png";
import arrow4 from "../../common/images/arrow4.png";
import "./styleLanding.css";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const handleScroll = () => {
      const revealElement = document.getElementById("revealElement");

      if (revealElement) {
        const elementTop = revealElement.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight;

        if (elementTop < triggerPoint) {
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

  useEffect(() => {
    const ScrollHIW = () => {
      const howItWorksElement = document.getElementById("howItWorksElement");

      if (howItWorksElement) {
        const elementTop = howItWorksElement.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight;

        if (elementTop < triggerPoint) {
          setFadeIn(true);
        } else {
          setFadeIn(false);
        }
      }
    };
    window.addEventListener("scroll", ScrollHIW);
  }, []);
  const handelRegister = () => {
    navigate("/signup");
  };
  if (token) {
    return (
      <div className="container-landing">
        <UserNavbar />
        <section>
          <div className="landing flex center">
            <h1>DIGITAL FASHION IS THE NEW CHAPTER</h1>
            <Button
              text="Register"
              bgColor="white-bg"
              textColor="blue-text"
              onClicked={handelRegister}
            />
          </div>
        </section>

        <section className="reveal-div">
          <div
            id="revealElement"
            className={`reveal ${reveal ? "active" : ""}`}
          >
            <div className="about-container">
              <h1> ABOUT US & OUR MISSION</h1>
              <hr className="hr-line" />
              <div className="about-landing flex center">
                <div className="landing-text">
                  <h2>Is the world of fashion calling your name?</h2>
                  <p>
                    UnrealFit is not just a fashion platform; it's a revolution
                    in the way we experience clothing. Born out of a passion for
                    blending technology with style, we've embarked on a journey
                    to redefine the online fashion landscape. Our platform goes
                    beyond traditional online shopping by introducing
                    cutting-edge augmented reality (AR) technology that allows
                    users to virtually try on clothes before making a purchase.
                    We believe that fashion is a deeply personal expression, and
                    our mission is to empower individuals to explore their style
                    confidently in the digital realm. At UnrealFit, we aim to
                    make the online shopping experience more immersive,
                    enjoyable, and tailored to each user's unique preferences.
                  </p>
                </div>
                <div className="landing-img">
                  <img src={about} alt="About Us" />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="about-landing flex center">
                <div className="landing-img">
                  <img src={mission} alt="Mission" />
                </div>
                <div className="landing-text">
                  <h2>Empowering individuals through digital fashion</h2>
                  <p>
                    At UnrealFit, our mission is to revolutionize the way people
                    perceive and interact with fashion in the digital age. We
                    are committed to providing a platform where users can not
                    only discover the latest trends but also experience a new
                    dimension of personalized and immersive shopping. By
                    integrating cutting-edge technology, such as augmented
                    reality, we empower individuals to confidently express their
                    unique style preferences. Join us on this journey of
                    redefining fashion and making digital shopping a delightful
                    and personalized experience for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="howItWorksElement"
          className={`how-it-works-container ${fadeIn ? "fade-in" : ""}`}
        >
          <h1>HOW IT WORKS</h1>

          <div className="process-flow flex center">
            <div className="process-step">
              <img src={arrow1} alt="" />
              <p>Sign Up and Add your info</p>
            </div>
            <div className="process-step">
              <img src={arrow2} alt="" />
              <p>Choose Your Occasion</p>
            </div>
            <div className="process-step">
              <img src={arrow3} alt="" />
              <p>Choose what you like the most in the suggested items</p>
            </div>

            <div className="process-step">
              <img src={arrow4} alt="" />
              <p>Try them out!</p>
            </div>
          </div>
        </section>

        <section>
          <h1>TEMPLATES</h1>
          <hr className="hr-line" />
          <div className="container-temp flex center">
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={coat} alt="Card 1" loading="lazy" />
                <h2>OUTERWEAR</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={casual} alt="Card 1" loading="lazy" />
                <h2>CASUAL WEAR</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={sport} alt="Card 1" loading="lazy" />
                <h2>SPORTS WEAR</h2>
              </div>
            </div>
            <div className="card-column column-1">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={sleepover} alt="Card 1" loading="lazy" />
                <h2>SLEEPOVER</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={wedding} alt="Card 1" loading="lazy" />
                <h2>WEDDING EVENTS</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={dress} alt="Card 1" loading="lazy" />
                <h2>DRESS</h2>
              </div>
            </div>
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={traditional} alt="Card 1" loading="lazy" />
                <h2>TRADITIONALS</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={swim} alt="Card 1" loading="lazy" />
                <h2>SWIMWEAR</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={formal} alt="Card 1" loading="lazy" />
                <h2>FORMAL WEAR</h2>
              </div>
            </div>
          </div>
          <div className="button-temp flex center">
            <Link to="/signin">
              <Button
                text="See More"
                bgColor="white-bg"
                textColor="blue-text"
              />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="container-landing">
        <Navbar />
        <section>
          <div className="landing flex center">
            <h1>DIGITAL FASHION IS THE NEW CHAPTER</h1>
            <Button
              text="Register"
              bgColor="white-bg"
              textColor="blue-text"
              onClicked={handelRegister}
            />
          </div>
        </section>

        <section className="reveal-div">
          <div
            id="revealElement"
            className={`reveal ${reveal ? "active" : ""}`}
          >
            <div className="about-container">
              <h1> ABOUT US & OUR MISSION</h1>
              <hr className="hr-line" />
              <div className="about-landing flex center">
                <div className="landing-text">
                  <h2>Is the world of fashion calling your name?</h2>
                  <p>
                    UnrealFit is not just a fashion platform; it's a revolution
                    in the way we experience clothing. Born out of a passion for
                    blending technology with style, we've embarked on a journey
                    to redefine the online fashion landscape. Our platform goes
                    beyond traditional online shopping by introducing
                    cutting-edge augmented reality (AR) technology that allows
                    users to virtually try on clothes before making a purchase.
                    We believe that fashion is a deeply personal expression, and
                    our mission is to empower individuals to explore their style
                    confidently in the digital realm. At UnrealFit, we aim to
                    make the online shopping experience more immersive,
                    enjoyable, and tailored to each user's unique preferences.
                  </p>
                </div>
                <div className="landing-img">
                  <img src={about} alt="About Us" />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="about-landing flex center">
                <div className="landing-img">
                  <img src={mission} alt="Mission" />
                </div>
                <div className="landing-text">
                  <h2>Empowering individuals through digital fashion</h2>
                  <p>
                    At UnrealFit, our mission is to revolutionize the way people
                    perceive and interact with fashion in the digital age. We
                    are committed to providing a platform where users can not
                    only discover the latest trends but also experience a new
                    dimension of personalized and immersive shopping. By
                    integrating cutting-edge technology, such as augmented
                    reality, we empower individuals to confidently express their
                    unique style preferences. Join us on this journey of
                    redefining fashion and making digital shopping a delightful
                    and personalized experience for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="howItWorksElement"
          className={`how-it-works-container ${fadeIn ? "fade-in" : ""}`}
        >
          <h1>HOW IT WORKS</h1>

          <div className="process-flow flex center">
            <div className="process-step">
              <img src={arrow1} alt="" />
              <p>Sign Up and Add your info</p>
            </div>
            <div className="process-step">
              <img src={arrow2} alt="" />
              <p>Choose Your Occasion</p>
            </div>
            <div className="process-step">
              <img src={arrow3} alt="" />
              <p>Choose what you like the most in the suggested items</p>
            </div>

            <div className="process-step">
              <img src={arrow4} alt="" />
              <p>Try them out!</p>
            </div>
          </div>
        </section>

        <section>
          <h1>TEMPLATES</h1>
          <hr className="hr-line" />
          <div className="container-temp flex center">
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={coat} alt="Card 1" loading="lazy" />
                <h2>OUTERWEAR</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={casual} alt="Card 1" loading="lazy" />
                <h2>CASUAL WEAR</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={sport} alt="Card 1" loading="lazy" />
                <h2>SPORTS WEAR</h2>
              </div>
            </div>
            <div className="card-column column-1">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={sleepover} alt="Card 1" loading="lazy" />
                <h2>SLEEPOVER</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={wedding} alt="Card 1" loading="lazy" />
                <h2>WEDDING EVENTS</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={dress} alt="Card 1" loading="lazy" />
                <h2>DRESS</h2>
              </div>
            </div>
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <img src={traditional} alt="Card 1" loading="lazy" />
                <h2>TRADITIONALS</h2>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <img src={swim} alt="Card 1" loading="lazy" />
                <h2>SWIMWEAR</h2>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <img src={formal} alt="Card 1" loading="lazy" />
                <h2>FORMAL WEAR</h2>
              </div>
            </div>
          </div>
          <div className="button-temp flex center">
            <Link to="/signin">
              <Button
                text="See More"
                bgColor="white-bg"
                textColor="blue-text"
              />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
};

export default Landing;
