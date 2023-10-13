import React from "react";
import { images } from "../data/images";

const Appointment = () => {
  const {appointmentCharacter} = images
  return (
    <div className="mb-10">
      <div className="grid grid-cols-4 bg-secondary rounded-xl px-1 sm:px-3 space-y-6 lg:space-y-0 lg:pb-0">
        <div className="order-2 col-span-2 lg:col-span-1">
          <img
            src={appointmentCharacter}
            alt=""
            className="w-[180px] mx-auto lg:mx-0 mt-4"
            loading="lazy"
          />
        </div>
        <div className="col-span-4 lg:col-span-2 order-1 lg:order-2 text-lg text-center lg:text-xl 2xl:text-2xl self-center">
          <h4 className="mb-5">
            {/* Achha lag raha hai na!! <br /> Ab ye reality me kaise hoga woh bhi aapake
            budget main!! */}
            Achha lag raha hai na!! <br /> Ab ye reality me kaise hoga? woh bhi <br /> aapke
            budget mai!!
          </h4>
          <p className="uppercase font-poppins text-xl lg:text-2xl xl:text-3xl text-primary mb-4">
            <strong>Creative Expert ko hire kare</strong>
          </p>
        </div>

        <div className="text-center self-center order-3 col-span-2 lg:col-span-1">
          <a
            href="https://tidycal.com/skillnuts/15-minute-meeting"
            target="_blank"
          >
            <button className="py-3 px-8 rounded-xl bg-primary font-bold text-white text-lg md:text-xl 2xl:text-2xl mb-2">
              Book Now
            </button>
          </a>
          <span className="block text-xs md:text-sm 2xl:text-base">
            (Talk to Experts)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
