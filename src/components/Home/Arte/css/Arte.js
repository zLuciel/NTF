"use client";
import { styled } from "styled-components";

export const ContainerArte = styled.section`
  padding: 0 20px;
  max-width: 1536px;
  margin: 0 auto;
 // margin-bottom: 40px;
  h1 {
    font-family: "Inter";
    font-size: 2rem;
    margin: 20px 0;
  }
  .swiper-slide {
    position: relative;
    border-radius: 10px;
    height: 317.75px;
    filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.5));
  }

  .swiper-slide > img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .flex-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardArte = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Price = styled.span`
  color: white;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(2.5px);
  border-radius: 5px;
`;

export const FlexName = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
button{
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--morado-claro);
}
button:hover{
    cursor: pointer;
    color: black;
  }
`