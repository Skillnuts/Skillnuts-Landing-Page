import React from "react";
import { images } from "../data/images";

function About() {
  const { aboutLogo } = images;
  return (
    <section className="container mx-auto lg:flex justify-around gap-x-6 items-center mb-10 lg:mb-12">
      <div className="w-[85%] md:w-[60%] lg:w-[25%] 2xl:w-[30%] mx-auto mb-6 lg:mb-0">
        <img src={aboutLogo} alt="" loading="lazy" />
      </div>
      <div className="lg:w-[70%]">
        <h3 className="text-3xl 2xl:text-4xl font-bold text-primary mb-4 text-center md:text-left">
          ABOUT SKILLNUTS
        </h3>
        <p className="text-base mb-4">
          Think of your brand as a rocketship, ready to soar to new heights. We're the ground control, the engineers, and the navigators guiding your brand's journey to the stars. We architect the blueprint for your brand's exceptional growth.
        </p>
      
        <p className='text-base mb-4'>
          We unleash your brand's potential and offer innovative solutions that set you apart. Our mission is your success.
        </p>
      </div>
    </section>
  );
}

export default About;
