import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="HeroSection">
      <div className="container">
        <div className="HeroTitle">
          <h1>Sewa Rental Mobil Terbaik di kawasan Mojokerto</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <div className="Hero-button">
            <a href="/Pencarian">
              <button type="button" className="btn btn-success">
                Mulai Sewa Mobil
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="HeroContentNew HeroImage">
        <img
          src="assets/images/Herocar.svg"
          alt="img-car"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Hero;
