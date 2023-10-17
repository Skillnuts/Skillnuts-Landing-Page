import React from "react";
import { images } from "../data/images";
import { motion } from "framer-motion";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const Header = () => {
  const { logo, logo_tagline, tagline, heroImg } = images;

  const scrollToSection = () => {
    const section = document.getElementById("offers_section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="bg-primary overflow-hidden relative -z-[1]">
        <div className="px-4 py-6 lg:px-12 flex justify-between items-center">
          <a href="#top">
            <img
              src={logo}
              alt=""
              className="w-40 lg:w-56 object-cover"
              loading="lazy"
            />
          </a>

          <img
            src={logo_tagline}
            alt=""
            className="w-36 lg:w-56 object-cover"
            loading="lazy"
          />
        </div>

        <div className="container relative mx-auto">
          <div className="pt-6 flex flex-col md:flex-row items-center md: justify-center md:items-start">
            <div className="w-64 lg:w-80 mx-auto lg:mx-0 md:mt-28 grid place-items-center gap-y-8 z-30">
              <img src={tagline} alt="" className="" loading="lazy" />

              <div className="down-arrow">
                <HiOutlineArrowCircleDown
                  className="arrow cursor-pointer"
                  onClick={scrollToSection}
                />
              </div>
            </div>
            <img
              src={heroImg}
              alt=""
              className="w-80 lg:w-[420px] md:-translate-y-16 lg:-translate-y-20"
              loading="lazy"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
