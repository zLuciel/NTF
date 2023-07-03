"use client";
import React from "react";
import { ContainerArte, FlexName } from "./css/Arte";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import Image from "next/image";
import Card from "@/components/Card/Card";

SwiperCore.use([Navigation]);

const Arte = ({ title, dataevent }) => {
  return (
    <ContainerArte>
      <FlexName>
        <h1>{title} </h1>
        <button>Ver todos</button>
      </FlexName>
      <Swiper
        loop
        navigation
        spaceBetween={15}
        slidesPerView={4}
        /* breakpoints={{
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
        {dataevent?.map((data) => (
          <SwiperSlide key={data._id}>
            <Image
              sizes="(min-width: 640px) 640px, 100vw"
              fill={true}
              src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${data.image}.jpg`}
              alt="artess"
            />
            <Card data={data}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerArte>
  );
};

export default Arte;
