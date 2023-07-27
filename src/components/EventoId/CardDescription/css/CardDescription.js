"use client";
import { styled } from "styled-components";

export const CardEventDescription = styled.div`
background: #161616;
  color: white;
  border: 1px solid #0c0c0c;
  border-radius: 10px;
  padding: 20px 40px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 20px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.27);
  .flex-descrip-user-fav {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerTextFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  p {
    color: #bcbcbc;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    font-size: 0.875rem;
  }
`;

export const ContainerTags = styled.div`
  h2 {
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 15px;
  }
  .flex-btn-tags{
    display: flex;
    gap: 10px;
  }
  button {
    text-transform: capitalize;
    padding: 10px 25px;
    color: white;
    border-radius: 0.3125rem;
    border: 1px solid #f44848;
    background: #161616;
    box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.26);
  }
`;
