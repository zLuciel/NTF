"use client";

import { styled } from "styled-components";

export const Colum1Main = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: center;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    line-height: 86px;
    color: white;
    max-width: 685px;
    p{
      color: var(--morado-claro);
      display: inline;
    }
    //*mediaQuery */
    @media (max-width: 1416px){
      max-width: 575px;
      font-size: 3.4rem;
    }
    @media (max-width: 1195px){
      text-align: center;
      max-width: 80%;
    }
    @media (max-width: 628px){
      font-size: 2.5rem;
      line-height: normal;
    }
  }
  & > p {
    max-width: 450px;
    font-family: "Inter";
    font-style: normal;
    line-height: 22px;
    color: #dfdfdf;
    font-size: 1rem;
    //**MediaQuery */
  @media (max-width: 1195px){
    text-align: center;
    font-size: 0.9rem;
  }
  }
  button {
    width: max-content;
    padding: 10px 25px;
    line-height: 1.5;
    font-size: 1.3rem;
    color: white;
    background: var(--morado-claro);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    font-weight: 700;
    //**MediaQuery */
    @media (max-width: 628px){
      font-size: 1rem;
    }
  }
  //**MediaQuery */
  @media (max-width: 1195px){
      justify-content: center;
      align-items: center;
  }
`;
