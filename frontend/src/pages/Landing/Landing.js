import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../common/base/button/Button";
import about from "../../common/images/about.jpg";
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
          <h2>DIGITAL FASHION IS THE NEW CHAPTER</h2>
        </div>
      </section>
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
      <Footer />
    </div>
  );
};

export default Landing;
