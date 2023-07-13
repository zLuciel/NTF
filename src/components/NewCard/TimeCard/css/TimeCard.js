"use client";
import { styled } from "styled-components";

export const TimeCardStyled = styled.div`
 //border-top: 1px solid #CACACA;
 border-top: 1px solid #5a5a5a;

  padding: 8px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    text-transform: capitalize;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    font-family: "Exo";
    color: var(--color-letras);
  }

  & > span {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p {
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
  }
`;

export const Time = styled.span`
  .xd{
    display: flex;
    gap: 5px;
    p{
      display: inline-block;
      font-weight: 400;
    }
  } 
`;
export const DateStyled = styled.span`
  justify-content: center;
  align-items: center;
  p {
    font-weight: 700;
  }
`;
