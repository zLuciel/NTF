"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '@/assets/4.jpg';
import slide_image_6 from '@/assets/6.jpg';
import slide_image_7 from '@/assets/1418.jpg';
import slide_image_8 from '@/assets/1418.png';
import slide_image_9 from '@/assets/mater.png';
import slide_image_10 from '@/assets/26.png';
import slide_image_11 from '@/assets/79.jpg';

import Image from 'next/image';
import ViewInfoCard from './ViewInfoCard';
import { ContainerSwiper3D } from './css/Swiper3D';


const Swiper3D = ()=> {
  return (
    <ContainerSwiper3D>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,//300
          modifier: 2.5,
        }}
       // pagination={{ el: '.swiper-pagination', clickable: true }}
       /* navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}*/
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >   
          <Image  src={slide_image_1} alt="slide_image" />
          <ViewInfoCard width={"80%"} height={"62px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide >
        <Image  src={slide_image_6} alt="slide_image" />
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide >
        <Image  src={slide_image_7} alt="slide_image"/>
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={slide_image_8} alt="slide_image"/>
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={slide_image_9} alt="slide_image"/>
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={slide_image_10} alt="slide_image"/>
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image  src={slide_image_11} alt="slide_image"/>
        <ViewInfoCard width={"80%"} height={"55px"} fontRem={"16px"}/>
        </SwiperSlide>
      </Swiper>
    </ContainerSwiper3D>
  );
}

export default Swiper3D;