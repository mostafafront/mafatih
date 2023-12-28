import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function SwiperSlider() {
  return (
    <Swiper
      dir="rtl"
      loop={true}
      slidesPerView={1}
      breakpoints={{
        275: { slidesPerView: 1,
        },
        320: { slidesPerView: 2.4,
        },
        375: {
          slidesPerView: 2.5,
        },
        425: {
          slidesPerView: 2.7,
        },
        768: {
          slidesPerView: 3.5,
        },
        992: {
          slidesPerView: 4.5,
        },
        1440: {
          slidesPerView: 5.5,
        },
      }}
    >
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/get-doa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/get-doa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/ziarat-ashoora-fa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/ziarat-ashoora-fa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/ziarat-ashoora-fa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/ziarat-ashoora-fa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/get-doa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiperSlider-index px-3 px-lg-4">
        <Link href={"./reader/get-doa"}>
          <img
            src="/images/owl-prayer.svg"
            alt="prayer"
            style={{ width: "100%" }}
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
