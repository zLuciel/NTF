"use client";
import React from "react";
import { ContainerTopCreadores } from "./css/TopCreadores";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import slide_image_1 from "@/assets/4.jpg";
import slide_image_6 from "@/assets/6.jpg";
import slide_image_7 from "@/assets/DASD.jpg";
import slide_image_8 from "@/assets/1418.png";
import slide_image_9 from "@/assets/mater.png";
import Image from "next/image";
import ViewInfoCard from "../MainColum2/ViewInfoCard";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
const TopCreate = [
  {
    image: slide_image_1,
  },
  {
    image: slide_image_6,
  },
  {
    image: slide_image_7,
  },
  {
    image: slide_image_8,
  },
  {
    image: slide_image_9,
  },
  {
    image: slide_image_6,
  },
  {
    image: slide_image_7,
  },
  {
    image: slide_image_8,
  },
];
const TopCreadores = () => {
  return (
    <ContainerTopCreadores>
      <h1>Top Creadores</h1>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        
        navigation
        spaceBetween={15}
         slidesPerView={4}
        /*  breakpoints={{
          1458: {
            slidesPerView: 4
          },
          1080: {
            slidesPerView: 3
          },
          754: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }}*/
      >
        {TopCreate.map((data, i) => (
          <SwiperSlide key={i}>
            <Image src={data.image} alt="creadores" />
            <ViewInfoCard width={"90%"} height={"50px"} fontRem={"15px"}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerTopCreadores>
  );
};

export default TopCreadores;
