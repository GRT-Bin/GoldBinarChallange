import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DetailSewa from "./Pages/DetailSewaMobil";
import Formkategori from "./Pages/Formkategori";
import HasilPencarian from "./Pages/HasilPencarian";
import "../App.css";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PencarianMobil" element={<Formkategori />} />
        <Route path="/hasilPencarian" element={<HasilPencarian />} />
        <Route path="/detailSewaMobil" element={<DetailSewa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
