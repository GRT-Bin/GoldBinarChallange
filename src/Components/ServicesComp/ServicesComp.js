import React from "react";
import "./intro.css";

export const ServicesComp = () => {
  return (
    <div className="introcomp" id="introcomp">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="assets/images/Happygirl.svg"
              alt=""
              className="introcompImage"
            />
          </div>
          <div className="col">
            <h3>Best Car Rental for any kind of trip in Mojokerto!</h3>
            <p>
              Sewa mobil di Mojokerto bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="introcompList">
              <li id="listintrocomp">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li id="listintrocomp">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li id="listintrocomp">Sewa Mobil Jangka Panjang Bulanan</li>
              <li id="listintrocomp">Gratis Antar - Jemput Mobil di Bandara</li>
              <li id="listintrocomp">Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
