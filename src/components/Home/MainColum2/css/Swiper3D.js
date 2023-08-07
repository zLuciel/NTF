"use client"
import { styled } from "styled-components";

export const ContainerSwiper3D = styled.div`

  align-self: center;
  justify-self: end;
.swiper_container {
  max-width: 820px;
  position: relative;
  //*mediaquery*/
  @media (max-width: 1500px){
    max-width: 720px
  }
  @media (max-width: 1416px){
    max-width: 620px
  }
  @media (max-width: 1195px){
    display: none;
  }
}

.swiper-slide {
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
}

.swiper-slide > img {
  width: 100%;
  height: 425px;
  object-fit: cover;
  
}

`