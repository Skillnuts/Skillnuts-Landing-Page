import React from "react";
import { images } from "../data/images";

const Header = () => {
  const { logo, logo_tagline, tagline, heroImg } = images;
  return (
    <>
      <header className="bg-primary overflow-hidden relative -z-10">
        <div className="px-4 py-6 lg:px-12 flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className="w-40 lg:w-56 object-cover"
            loading="lazy"
          />

          <img
            src={logo_tagline}
            alt=""
            className="w-36 lg:w-56 object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto relative pt-6 flex flex-col md:flex-row items-center md: justify-center md:items-start">
          <img
            src={tagline}
            alt=""
            className="w-64 lg:w-80 mx-auto lg:mx-0 md:mt-28"
            loading="lazy"
          />
          <img
            src={heroImg}
            alt=""
            className="w-80 lg:w-[420px] md:-translate-y-16 lg:-translate-y-20"
            loading="lazy"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
