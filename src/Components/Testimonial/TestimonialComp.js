import React from "react";
import { Card } from "react-bootstrap";
import "./testimonial.css";
import { useState } from "react";

const TestimonialComp = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1(!active1);
  };

  return (
    <div className="testimonialcompContainer" id="testimonialcomp">
      <div className="container">
        <div className="testimonialcomp text-center">
          <h2>Testimonial</h2>
          <p className="fw-bold text-center">
            Berbagai reviwe positif dari para pelanggan kami
          </p>
        </div>
      </div>
      <div className="container position-relative">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Card className="testimonialcomp1">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="assets/images/Testi1.svg"
                      className="testimonialcompImg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="testimonialcompRating">
                        <img src="assets/images/Rate.svg"></img>
                      </div>
                      <p className="card-text1">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”.
                      </p>
                      <p className="card-text">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="carousel-item">
              <Card className="testimonialcomp2">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="assets/images/Testi2.svg"
                      className="testimonialcompImg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="testimonialcompRating">
                        <img src="assets/images/Rate.svg"></img>
                      </div>
                      <p className="card-text1">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="card-text">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button
                className="carousel-control-prev position-absolute"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                id="buttonTestimonial"
              >
                <button
                  class="btn btn-dark rounded-circle"
                  aria-hidden="true"
                  alt="Left Button"
                  onClick={handleClick}
                  style={{
                    backgroundColor: active ? "green" : "white",
                  }}
                >
                  <img
                    class="arrowPrev"
                    src="assets/images/Leftarrow.svg"
                  ></img>
                </button>
              </button>
            </div>
            <div className="col-md-1">
              <button
                className="carousel-control-next position-absolute "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                id="buttonTestimonial"
              >
                <button
                  className="btn btn-dark rounded-circle"
                  aria-hidden="true"
                  alt="Right Button"
                  onClick={handleClick1}
                  style={{
                    backgroundColor: active1 ? "green" : "white",
                  }}
                >
                  <img
                    class="arrowPrev"
                    src="assets/images/Rightarrow.svg"
                  ></img>
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComp;
