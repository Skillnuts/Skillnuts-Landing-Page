import React from "react";
import { images } from "../data/images";

function About() {
  const { aboutLogo } = images;
  return (
    <section className="container mx-auto lg:flex justify-around gap-x-6 items-center mb-10 lg:mb-12">
      <div className="lg:w-[25%] 2xl:w-[30%] mb-6 lg:mb-0">
        <img src={aboutLogo} alt="" loading="lazy" />
      </div>
      <div className="lg:w-[70%]">
        <h3 className="text-3xl 2xl:text-4xl font-bold text-primary mb-4 text-center md:text-left">
          ABOUT SKILLNUTS
        </h3>
        <p className="text-base mb-4">
          At Skillnuts, we're your one-stop solution for innovation, inspiration, and building what you truly love. 
        </p>
        
        <p className="text-base mb-4">
          We believe in the power of three: yours, ours, and theirs. By bringing them together, magic happens. We're your sidekick, your wingman, your go-to for all things branding. And if something goes wrong, we're in it together to fix it.
        </p>
      
        <p className='text-base mb-4'>
          We engineer brands with the latest trends and technology. We're made to create, wired to delight, and elevate everything around us. From filter kaapi to mocha, espresso, and cappuccino, we take you from zero to a hundred with our expertise. We don't just deliver a brand, we create an experience that lasts long after you've left the coffee house.
        </p>

        <p className="text-base">
          With Skillnuts, you'll never be alone on your journey to success. Let's build something amazing together.
        </p>
      </div>
    </section>
  );
}

export default About;
