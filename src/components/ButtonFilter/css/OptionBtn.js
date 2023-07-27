"use client";

import { styled } from "styled-components";

export const ContainerOption = styled.div`
  width: max-content;
  position: relative;
`;

export const OptionBtn = styled.button`
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

  .icon-option {
    font-size: 1.3rem;
    color: var(--morado-claro);
  }
`;

export const DropViewOption = styled.span`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--morado-claro);
  background: #161616;
  display: flex;
  position: absolute;
  top: 50px;
  z-index: 4;
  padding: 10px ;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: none;
    text-transform: capitalize;
    font-size: 0.9rem;
    text-align: center;
  }
  ul > li:hover{
    cursor: pointer;
    color: var(--morado-claro);
  }
`;
