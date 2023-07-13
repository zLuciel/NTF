"use client";
import { styled } from "styled-components";

export const ContainerColum2 = styled.div`

`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));//362
  gap: 20px 10px;

  .contxd {
    position: relative;
    height: 280px;
    img {
      border-radius: 10px;
      filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.25));
      object-fit: cover;
    }
  }
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
