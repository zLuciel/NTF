"use client"

import { styled } from "styled-components"

export const BtnDinamicStyled = styled.button`
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.48);
    filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.46));
    background: ${({$bg})=>  `var(${$bg})`};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover {
      color: ${({$icocolor})=> `var(${$icocolor})`};
    }
    svg{
      color: ${({$icocolor})=> `var(${$icocolor})`} ;
    }
  
`