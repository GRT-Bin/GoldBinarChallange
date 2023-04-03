import React from "react";
import NavbarComp from "../Components/NavbarComp/NavbarComp";
import HeroComp from "../Components/HeroComp/HeroComp";
import ServicesComp from "../Components/ServicesComp/ServicesComp";
import Whyus from "../Components/Whyus/Whyus";
import TestimonialComp from "../Components/Testimonial/TestimonialComp";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      <ServicesComp />
      <Whyus />
      <TestimonialComp />
      <Banner />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
