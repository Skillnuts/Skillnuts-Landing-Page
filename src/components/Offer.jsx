import React from "react";
import { offerContent } from "../data/constant";
import { images } from "../data/images";

function Offer() {
  const { offerImg, offerCharacter, rupee } = images;
  return (
    <div className="pb-8 mb-6 sm:mb-8 lg:mb-8">
      <div className="bg-secondary rounded-xl pt-10 lg:py-10 px-4 lg:px-14 mb-3">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between relative">
          <div>
            <div className="flex lg:flex-row items-end lg:items-end mb-4">
              <img
                src={offerImg}
                className="w-40 md:w-60 2xl:w-80"
                alt=""
                loading="lazy"
              />
              <h2 className="lg:text-3xl 2xl:text-4xl pb-5 lg:pb-8 text-center">
                <span className="font-bold">MONEYLAL </span>
                <span className="font-medium">SPECIAL</span>
              </h2>
            </div>

            <ul className="grid lg:grid-cols-2 xl:gap-x-8 gap-x-8 list-disc xl:list-inside mb-8 lg:mb-12 px-3 md:px-5 lg:px-0">
              {offerContent.map((value, i) => {
                return (
                  <li key={i} className="text-base md:text-lg 2xl:text-2xl font-medium">
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <img
              src={offerCharacter}
              alt=""
              className="w-[200px] md:w-60 lg:w-[280px] xl:w-80 md:absolute -right-2 top-0 md:right-0 lg:-right-10 translate-y-0 md:translate-y-20 lg:translate-y-28 xl:translate-y-12 2xl:translate-y-36"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-12 gap-y-8 md:justify-between lg:justify-start lg:-ml-5 xl:ml-0 py-4 md:py-8 lg:py-0 mt-4">
          <div className="text-center lg:text-left md:w-max">
            <h2 className="font-bold text-primary flex gap-x-3 justify-center md:justify-start flex-row mb-4">
              <div className="flex gap-x-2 justify-center md:justify-start items-center">
                <img src={rupee} alt="" width={20} height={20} />
                <span className="line-through block text-xl 2xl:text-2xl">2,50,000</span>
              </div>
              <div className="flex gap-x-2 justify-start items-center text-3xl 2xl:text-[42px]">
                <img src={rupee} alt="" />
                <span>88,888</span>
              </div>
            </h2>
            <div className="w-max mx-auto">
              <a
                href="https://tidycal.com/skillnuts/15-minute-meeting"
                target="_blank"
              >
                <button className="py-3 px-8 rounded-xl bg-primary font-bold text-white text-xl 2xl:text-2xl mb-2">
                  Book Now
                </button>
              </a>
              <p className="text-xs 2xl:text-base font-medium text-center">(Limited Time Offer)</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-bold text-primary text-3xl 2xl:text-4xl mb-4 font-poppins">
              EXTRA BONUS
            </h2>
            <span className="text-lg 2xl:text-2xl block">
              1 PR Article for 50 Digital News Portal
            </span>
            <span className="text-sm 2xl:text-lg block font-semibold">
              (For the 1st 8 Bookings)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
