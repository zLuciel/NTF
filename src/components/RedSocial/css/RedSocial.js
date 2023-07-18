"use client";

import { styled } from "styled-components";

export const FlexRedes = styled.div`
  display: flex;
  gap: 10px;
  span {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background: #161616;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.4s ease-in-out;
    &:hover{
        color: var(--morado-claro);
        transition: all 0.4s ease-in-out;
    }
    & > *{
        font-size: 1.5rem;
    }
  }
`;
