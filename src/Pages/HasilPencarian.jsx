import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavbarComp/NavbarComp";
import PencarianMobil from "../Components/PencarianMobil/PencarianMobil";

const HasilPencarian = () => {
  return (
    <div>
      <Navbar />
      <PencarianMobil />
      <Footer />
    </div>
  );
};

export default HasilPencarian;
