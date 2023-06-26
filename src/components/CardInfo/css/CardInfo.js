"use client"
import { styled } from "styled-components";

export const ContainerCardInfo = styled.div`
filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.25));
padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  width: 100%;
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(3.5px);
  border-radius: 10px;
  h3{
    color: #F4F4F4;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
`;


export const TiempoCard = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
span{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

span:nth-child(2){
  justify-content: center;
  align-items: center;
}
span:nth-child(2) > h4{
  color: greenyellow;
}
`