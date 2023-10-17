import React, { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { creativeProjects } from "../data/constant";
import { images } from "../data/images";

function CreativeProjects() {
  const { projectCharacter } = images;
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  return (
    <>
      <div className="lg:flex items-center bg-secondary rounded-xl px-2 md:px-4 pt-6 pb-8 lg:p-8">
        <div className="lg:w-2/5">
          <img
            loading="lazy"
            src={projectCharacter}
            alt=""
            className="w-[200px] md:w-72 mx-auto translate-y-4 lg:translate-y-8"
          />
        </div>
        <div
          className="lg:w-3/5 self-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={1}
            className="!overflow-y-visible z-0"
            loop={true}
            onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {creativeProjects.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <iframe
                    src={value}
                    title="YouTube video player"
                    className="rounded-2xl mx-auto w-full aspect-video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CreativeProjects;
