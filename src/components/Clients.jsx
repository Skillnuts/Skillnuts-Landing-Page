import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import { logos } from "../data/constant";
import { useState } from "react";

const Clients = () => {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  return (
    <>
      <div className="px-2 md:px-4 pt-0 pb-8 lg:p-8">
        <div
          className="w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay]}
            // pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={2}
            className="!overflow-y-visible"
            loop={true}
            onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              }
            }}
          >
            {logos.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={value} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Clients;
