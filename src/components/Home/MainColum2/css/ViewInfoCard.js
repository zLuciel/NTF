"use client";
import { styled } from "styled-components";

export const ContainerViewCard = styled.div`
color: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  position: absolute;
  width: ${(props) => props.width}; //90
  height: ${(props) => props.height};//50 62
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(2.5px);
  border-radius: 50px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    object-fit: cover;
  }

  span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  span:nth-child(2) {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.fontrem};
    line-height: 21px;
    color: #F4F4F4;
  }
`;
