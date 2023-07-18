"use client";
import { styled } from "styled-components";

export const ContainerColum2 = styled.div`

`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));//362
  gap: 20px 10px;
`;
export const FlexButtonUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  div > span {
    margin-right: 10px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }
`;
