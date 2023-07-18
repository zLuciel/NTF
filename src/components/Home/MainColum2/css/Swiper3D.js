"use client"
import { styled } from "styled-components";

export const ContainerSwiper3D = styled.div`
  align-self: center;
  justify-self: end;
.swiper_container {
  max-width: 820px;
  position: relative;
}

.swiper-slide {
  overflow: hidden;
  border-radius: 2rem;
  position: relative;
  filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.8));
}

.swiper-slide > img {
  width: 100%;
  height: 425px;
  object-fit: cover;
  
}

`