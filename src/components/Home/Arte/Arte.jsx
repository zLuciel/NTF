"use client";
import React from "react";
import { ContainerArte, FlexName } from "./css/Arte";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import Card from "@/components/NewCard/Card/Card";

SwiperCore.use([Navigation]);

const Arte = ({ title, dataevent }) => {
  return (
    <ContainerArte>
      <FlexName>
        <span>
          <h1>{title}</h1>
        </span>
        <button>Ver todos</button>
      </FlexName>
      <Swiper
        className="swiper"
        loop
        navigation
        spaceBetween={20}
        slidesPerView={5}
        /* breakpoints={{
          1523: {
            slidesPerView: 4
          },
        }}*/
      >
        {dataevent?.map((data) => (
          <SwiperSlide key={data._id}>
            <Card data={data} id={data?._id} user={data?.user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerArte>
  );
};

export default Arte;
