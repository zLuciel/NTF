"use client";
import { styled } from "styled-components";

export const ContainerUserSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  & > p{
    font-family: "Exo";
    font-size: 0.9rem;
  }
 & > img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    object-fit: cover;
    object-position: center;
  }
`;
