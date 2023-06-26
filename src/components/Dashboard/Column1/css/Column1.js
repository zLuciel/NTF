"use client";

import { styled } from "styled-components";
export const FlexColumn1 = styled.div`
  display: grid;
  grid-template-columns: 400px minmax(300px,800px) ;
  grid-template-areas: 
  "namealias biografia"
  "Follow biografia";
  gap: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`;
export const NameUserAlias = styled.span`
 grid-area: namealias;
  text-align: center;
  max-width: 340px;
  h1 {
    line-height: 1.3;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const ContainerFollow = styled.div`
  grid-area: Follow;
  display: flex;
  justify-content: start;
  align-items: center;
  .white-cuadro {
    background: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    display: flex;
    span:first-child {
      border-right: 1px solid #e5e5e5;
    }
    span {
      text-align: center;
      padding: 15px 50px;
    }
  }
`;

export const ContainerBiografia = styled.div`
  overflow-y: auto;
  padding-left: 0px;
  height: 145px;
  grid-area: biografia;
  h2 {
    margin-bottom: 10px;
  }
`;
