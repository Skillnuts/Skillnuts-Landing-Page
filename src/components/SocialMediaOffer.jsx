import React from "react";
import { images } from "../data/images";

function SocialMediaOffer() {
  const { primaryOfferImg, rupee } = images;
  return (
    <div className="rounded-xl mb-8">
      <div className="bg-primary px-5 py-8 rounded-xl relative">
        <img
          src={primaryOfferImg}
          alt=""
          className="w-36 2xl:w-44 absolute -left-2 2xl:-left-6 -top-16 md:-top-16"
          loading="lazy"
        />
        <div className="grid lg:grid-cols-3 gap-y-8 md:grid-cols-[20%_35%_40%] md:justify-between lg:space-y-0 md:divide-x-2 mb-6">
          <div className="flex justify-center items-center gap-x-4">
            <p className="lg:text-xl text-center">
              <span className="block font-bold text-xl 2xl:text-3xl text-slate-100">
                Social Media
              </span>
              <span className="text-slate-200 text-sm 2xl:text-lg mt-1">
                (Annual Package)
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center">
              <span className="block text-slate-100 text-xl 2xl:text-3xl font-semibold capitalize">
                4 Brand post per month
              </span>
              <span className="text-slate-200 text-sm 2xl:text-lg mt-1">
                (One social media platform)
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center text-slate-100">
            <div className="font-bold flex gap-x-2 justify-center items-center lg:flex-row">
              <div className="flex gap-x-1 justify-center items-center">
                <img src={rupee} alt="" width={20} height={20} />
                <span className="line-through block text-xl 2xl:text-2xl">
                  1,20,000
                </span>
              </div>
              <div className="flex gap-x-1 justify-start items-center text-3xl 2xl:text-[42px]">
                <img src={rupee} alt="" />
                <span>72,000</span>
              </div>
            </div>
            <span className="text-sm 2xl:text-lg text-center block mt-1">
              (60% Discount Price)
            </span>
          </div>
        </div>
        <p className="text-slate-200 text-xs sm:text-sm 2xl:text-lg text-center capitalize">
          ( THIS OFFER IS APPLICABLE ON FULL ADVANCE PAYMENT WITH THE ABOVE
          PACKAGE )
        </p>
      </div>
    </div>
  );
}

export default SocialMediaOffer;
