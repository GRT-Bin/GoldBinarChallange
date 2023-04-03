import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-12">
                <p className="navbarFooter">
                  <a href="/#OurServices">Our services</a>
                </p>
              </div>
              <div className="col-md-12">
                <p className="navbarFooter">
                  <a href="/#WhyUs">Why Us</a>
                </p>
              </div>
              <div className="col-md-12">
                <p className="navbarFooter">
                  <a href="/#Testimonial">Testimonial</a>
                </p>
              </div>
              <div className="col-md-12">
                <p className="navbarFooter">
                  <a href="/#FAQ">FAQ</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p>Connect with us</p>
            <img
              className="imgIcon"
              src="assets/images/icon_facebook.png"
              alt=""
            ></img>
            <img
              className="imgIcon"
              src="assets/images/icon_instagram.png"
              alt=""
            ></img>
            <img
              className="imgIcon"
              src="assets/images/icon_twitter.png"
              alt=""
            ></img>
            <img
              className="imgIcon"
              src="assets/images/icon_mail.png"
              alt=""
            ></img>
            <img
              className="imgIcon"
              src="assets/images/icon_twitch.png"
              alt=""
            ></img>
          </div>
          <div className="col-md-3">
            <p>Copyright Binar 2022</p>
            <img
              src="./assets/images/Carbrand.png"
              alt=""
              id="footerBrand"
              href="#"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
