"use client";
import { styled } from "styled-components";

export const ContainerArte = styled.section`
  margin-bottom: 0px;
  padding: 0px 20px;
  .swiper {
    padding: 10px 10px;
    //height: 300px;
  }
  .swiper-slide {
    position: relative;
  }
`;

export const FlexName = styled.span`
  & > h1{
    line-height: 1.3;
    font-weight: 400;
    text-transform: capitalize;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: var(--morado-claro);
  }
  button:hover {
    cursor: pointer;
    color: black;
  }
`;
