import React from "react";
import HeroCompList from "../Components/HeroComp/HeroCompList";
import Navbar from "../Components/NavbarComp/NavbarComp";
import Footer from "../Components/Footer/Footer";
import CariMobil from "../Components/CariMobil/CariMobil";

const Formkategori = () => {
  return (
    <div>
      <Navbar />
      <HeroCompList />
      <CariMobil />
      <Footer />
    </div>
  );
};

export default Formkategori;
