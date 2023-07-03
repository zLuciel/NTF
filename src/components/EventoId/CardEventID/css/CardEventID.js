"use client";
import { styled } from "styled-components";

export const CardIdEvent = styled.div`
  color: white;
  position: relative;
  height: 548px;
  // width: 901px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  }
`;
export const CardInfoAbsoluteID = styled.div`
  //esto sera imporante a futuro
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  h1 {
    color: var(--morado-claro);
    max-width: 500px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
  }

  .comprar-card-id {
    cursor: pointer;
    width: max-content;
    color: white;
    background: var(--morado-claro);
    border: none;
    padding: 15px 30px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 50px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Bgtrasparent = styled.div`
  width: max-content;
  padding: 5px 10px;
  backdrop-filter: blur(5.5px);
  background: rgba(0, 0, 0, 0.2);//oscuro
 
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; //50
`;

export const FlexGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .price-event-id {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    span {
      color: var(--morado-claro);
    }
  }
`;
