"use client";
import { styled } from "styled-components";

export const ContainerArte = styled.section`
 // margin-bottom: 40px;
 padding: 0 20px;
  h1 {
    font-family: "Inter";
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .swiper-slide {
    position: relative;
    border-radius: 10px;
    height: 317.75px;
    //filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.5));
  }

  .swiper-slide > img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
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