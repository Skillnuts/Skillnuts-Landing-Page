import React from "react";
import { businessPoints } from "../data/constant";
import { images } from "../data/images";

const HeroSection = () => {
  const { businessCharacter } = images;
  return (
    <>
      <section className="relative hero_section mb-6 sm:mb-8 lg:mb-12">
        <div className="container mx-auto py-4 lg:pt-12 lg:pb-8 2xl:pt-20">
          <div>
            <h2 className="uppercase text-center -mt-16 text-primary font-bold text-xl lg:text-2xl 2xl:text-4xl">
              Moneylal ne kaise badali apni kismat!
            </h2>

            <div>
              <iframe
                src="https://drive.google.com/file/d/1k3agc1rG1XUqN7W4gAonD3TIgpBTQqKn/preview?usp=sharing"
                allowFullScreen
                allow="autoplay; encrypted-media"
                className="w-full lg:w-4/5 rounded-xl mx-auto my-6 lg:my-12 aspect-video"
              ></iframe>
            </div>
          </div>

          <div className="py-6 md:flex md:items-center md:justify-between gap-4 lg:gap-12 drawbacks">
            <div className="row-span-2 md:w-[25%]">
              <img
                src={businessCharacter}
                alt=""
                className="w-52 lg:w-64 2xl:w-80 mx-auto"
                loading="lazy"
              />
            </div>

            <div className="md:w-[70%]">
              <div className="grid md:grid-cols-2 place-content-center gap-4 lg:gap-5">
                {businessPoints.map((value, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-0 py-1"
                    >
                      <img
                        src={value.image}
                        alt=""
                        className="w-12 lg:w-16 2xl:w-20 mr-2 lg:mr-4"
                        loading="lazy"
                      />
                      <pre className="font-inter">
                        <h4 className="text-lg md:text-base lg:text-xl 2xl:text-2xl font-semibold">
                          {value.title}
                        </h4>
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
