"use client";
import { styled } from "styled-components";

export const NewCard = styled.div`
  color: white;
  position: relative;
  border-radius: 10px;
  //background: #fff;
  background: var(--bg-secundary);
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 1);
  border-radius: 10px;
  overflow: hidden;
  /* width: 290px;
  height: 332px;*/
  width: 285px;
  height: 332px;
  display: grid;
  grid-template-rows: 182px 1fr;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: translateY(-10px);
  }
  .grid-center {
    align-self: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ImgCardNew = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoCardNew = styled.div`
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h1 {
    max-width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-secundario);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--color-letras);
    }
  }
  a:hover {
    color: var(--color-letras);
  }
`;
export const AbsoluteFlex = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  z-index: 2;
`;
export const PriceCard = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 5px 15px;
  border-radius: 5px;
  background: #161616;
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  /**color */
  color: white;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  p {
    color: var(--morado-claro);
  }
`;
