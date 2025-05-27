import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services.jsx";
import Banner from "../components/Banner/Banner.jsx";
import AppStore from "../components/AppStore/AppStore.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Books from "../components/BooksSlider/Books.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Books />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
