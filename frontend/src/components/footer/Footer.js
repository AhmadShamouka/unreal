import React from "react";
import "./stylesFooter.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="about-1">
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Customer Services</a>
        </div>
        <div className="about-1">
          <a href="/">Events</a>
          <a href="/">Create</a>
          <a href="/">Sustainability</a>
        </div>
        <div className="social-media">
          <div>
            <a href="/" className="fa fa-facebook">
              &nbsp;
            </a>
            <a href="/" className="fa fa-twitter">
              &nbsp;
            </a>
            <a href="/" className="fa fa-google">
              &nbsp;
            </a>
          </div>
          <div>
            <a href="/" className="fa fa-linkedin">
              &nbsp;
            </a>
            <a href="/" className="fa fa-youtube">
              &nbsp;
            </a>
            <a href="/" className="fa fa-instagram">
              &nbsp;
            </a>
          </div>
        </div>
      </div>
      <div className="company">
        <p className="copyright">copyright © 2024 unrealfit.com</p>
        <div>
          <a href="/"> Terms of Use</a>
          <a href="/"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
