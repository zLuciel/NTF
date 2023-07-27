"use client";

import { styled } from "styled-components";

export const BtnReset = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: capitalize;
  color: white;
  border: 1px solid var(--morado-claro);
  border-radius: 0.625rem;
  background: #161616;
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover{
    cursor: pointer;
    transform: scale(1.02);
  }
  .icon-reset {
    color: var(--morado-claro);
    font-size: 1.3rem;
  }
`;
