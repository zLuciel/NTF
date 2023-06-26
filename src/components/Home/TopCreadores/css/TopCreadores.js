"use client";
import { styled } from "styled-components";

export const ContainerTopCreadores = styled.section`
 padding: 0 20px;
  max-width: 1536px;
  margin: 0 auto;
  h1{
    font-family: "Inter";
    font-size: 2rem;
    margin: 20px 0;
  }
  .swiperxd{
    padding: 0 2px;
  }
  .swiper-slide {
    position: relative;
  }

  .swiper-slide > img {
    width: 100%;
    height: 317.75px;
    object-fit: cover; 
    border-radius: 10px;
     filter: drop-shadow(-3px 3px 4px rgba(0, 0, 0, 0.25));
  }
`;
