import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="cardBanner">
        <div>
          <h2 className="bannerTittle">
            Sewa Mobil di Kota Mojokerto Sekarang
          </h2>
          <p className="bannerContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          </p>
          <p className="bannerContent">
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="bannerButton">
          <a href="/Pencarian">
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
