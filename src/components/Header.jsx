import React from "react";
import { images } from "../data/images";

const Header = () => {
  const { logo, tagline, heroImg } = images;
  return (
    <>
      <header className="bg-primary overflow-hidden relative -z-10">
        <div className="px-6 py-6 xl:px-12 flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className="w-40 lg:w-56 object-cover"
            loading="lazy"
          />

          <p className="text-sm md:text-xl text-right">
            <span className="text-white font-semibold block">
              CONNECT BETTER
            </span>
            <span className="text-secondary font-bold scale-125 block mr-4 md:mr-[1.4rem]">GROW FASTER</span>
          </p>
        </div>

        <div className="container mx-auto pt-8 relative md:py-20 lg:py-32 flex flex-col items-center justify-center md:block">
            <img
              src={tagline}
              alt=""
              className="w-64 lg:w-80 mx-auto lg:mx-0 xl:ml-48 lg:ml-24 md:ml-14 mt-4"
              loading="lazy"
            />
            <img
              src={heroImg}
              alt=""
              className="w-80 lg:w-[420px] md:absolute xl:-bottom-[12rem] xl:right-[20%] lg:-top-[12%] lg:right-[12%] md:-top-[18%] md:right-[14%] -mb-[20%]"
              loading="lazy"
            />
        </div>
      </header>
    </>
  );
};

export default Header;
