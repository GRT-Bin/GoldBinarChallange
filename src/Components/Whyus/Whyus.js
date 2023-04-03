import "./whyus.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const Whyus = () => {
  return (
    <section className="mt-6 why-use" id="Whyus">
      <div className="container">
        <div className="why-header">
          <h2 className="fw-bold">Why Us?</h2>
          <p className="fw-bold">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row g-4 why-body">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img
                  src="assets/images/Iconcomplete.svg"
                  alt="mobil-lengkap"
                  className="img-fluid mb-3"
                ></img>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="fw-bold mt-3 card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img
                  src="assets/images/Iconprice.svg"
                  alt="harga-murah"
                  className="img-fluid mb-3"
                ></img>
                <h5 className="card-title">Harga Murah</h5>
                <p className="fw-bold mt-3 card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img
                  src="assets/images/Icon24hour.svg"
                  alt="24-jam"
                  className="img-fluid mb-3"
                ></img>
                <h5 className="card-title">Layanan 24 jam</h5>
                <p className="fw-bold mt-3 card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img
                  src="assets/images/Iconpro.svg"
                  alt="sopir-profesional"
                  className="img-fluid mb-3"
                ></img>
                <h6 className="card-title">Sopir Profesional</h6>
                <p className="fw-bold mt-3 card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
