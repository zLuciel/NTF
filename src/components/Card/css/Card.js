"use client";

import { styled } from "styled-components";

export const CardArte = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;

  .flex-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Price = styled.span`
  color: white;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(2.5px);
  border-radius: 5px;
  display: flex;
  gap: 2px;
  & > p {
    color: var(--color-letras);
  }
`;
