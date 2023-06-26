"use client";

import { styled } from "styled-components";

export const Colum1Main = styled.div`
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
    max-width: 680px;
  }
  p {
    max-width: 400px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: #bdbdbd;
    font-size: 1.1rem;
  }
  button {
    width: 171px;
    height: 53px;
    font-size: 1.3rem;
    color: white;
    background: #7848f4;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    font-weight: 700;
  }
`;
