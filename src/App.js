import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pencarian from "./Pages/Pencarian";
import HasilPencarian from "./Pages/HasilPencarian";
import DetailSewaMobil from "./Pages/DetailSewaMobil";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pencarian" element={<Pencarian />} />
          <Route path="/hasilPencarian" element={<HasilPencarian />} />
          <Route path="/DetailSewaMobil" element={<DetailSewaMobil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
