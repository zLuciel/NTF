"use client";
import { styled } from "styled-components";

export const CardIdEvent = styled.div`
  overflow: hidden;
  background: #161616;
  color: white;
  position: relative;
  height: 548px;
  border-radius: 10px;
  // width: 901px;
  //filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));
  & > img {
    
    filter: brightness(85%);
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
  }
  &::before{
    top: 0;
    color: white;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(15px) brightness(40%);
    background: ${props => `url(${props.background}) center center/cover no-repeat`};
    background-size:cover;
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
    text-shadow: -4px 4px 4px  rgba(0, 0, 0, 0.53);
  }

  .comprar-card-id {
    cursor: pointer;
    width: max-content;
    color: white;
    background: var(--morado-claro);
    border: 1px solid rgba(0, 0, 0, 0.48);
    padding: 15px 20px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Bgtrasparent = styled.div`
  width: max-content;
  padding: 5px 10px;
  backdrop-filter: blur(0px);
  //background: rgba(0, 0, 0, 0.2);//oscuro
  background: rgba(22, 22, 22, 0.4);//oscuro
 // background: #161616;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; //50
`;

export const FlexGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .price-event-id {
    padding: 0 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    span {
      color: var(--morado-claro);
    }
  }
`;
