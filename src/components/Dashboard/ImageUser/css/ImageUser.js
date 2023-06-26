"use client";
import { styled } from "styled-components";

export const StyledImageUser = styled.div`
  width: 206px;
  height: 206px;
  filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  &:before {
    position: absolute;
    content: "";
    background: var(--morado-claro);
    width: 30px;
    height: 30px;
    top: 80%;
    right: 13%;
    z-index: 54;
    border-radius: 50px;
    filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));
  }
  img {
    border-radius: 850px;
    object-fit: cover;
  }
`;
