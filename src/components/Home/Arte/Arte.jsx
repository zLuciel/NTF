"use client";
import React from 'react'
import { CardArte, ContainerArte, FlexName, Price,} from './css/Arte'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";


import Image from 'next/image'
import CardInfo from '@/components/CardInfo/CardInfo';


SwiperCore.use([Navigation]);

const Arte = ({title,dataevent}) => {

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
          <Image sizes="(min-width: 640px) 640px, 100vw" fill={true} src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${data.image}.jpg`}  alt='artess'/>
          <CardArte >
              <div className='flex-price'>
              <Price>
                ${data.price}
              </Price>
              <span>
                golas
              </span>
              </div>
              <CardInfo title={data.title} id={data._id} user={data.user} userAvatar={data.image} />
          </CardArte>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerArte>
  )
}

export default Arte