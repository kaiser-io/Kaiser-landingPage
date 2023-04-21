"use client";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Slider = () => {
  const imgSrc = "/images/screen-shots";

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/cluster-details.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/integration.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/nodes-attributes.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/nodes-settings.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/nodes-terminal.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/nodes-logs.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/selected-service-2.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/import-cluster-certificate.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/selected-service.png`}
              alt="slide_image"
              width={1377}
              height={918}
              className={`${isActive ? "scale-110" : "blur-sm"}`}
            />
          )}
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow text-white text-2xl font-bold">
            <BsChevronLeft />
          </div>
          <div className="swiper-button-next slider-arrow text-white text-2xl font-bold">
            <BsChevronRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
