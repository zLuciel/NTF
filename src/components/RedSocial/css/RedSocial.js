"use client";

import { styled } from "styled-components";

export const FlexRedes = styled.div`
  display: flex;
  gap: 10px;
  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background: #fff;
    box-shadow: -3px 3px 4px 0px rgba(0, 0, 0, 0.14);
    transition: all 0.4s ease-in-out;
    &:hover{
        background: #222222;
        color: greenyellow;
        transition: all 0.4s ease-in-out;
    }
    & > *{
        font-size: 1.5rem;
    }
  }
`;
