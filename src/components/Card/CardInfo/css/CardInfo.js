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
  border-radius: 10px;
  //background: rgb(0 0 0 / 27%);
  background: rgb(0 0 0 / 55%);
  backdrop-filter: blur(2.5px);
  h4{
  //font-size: 1.1rem;
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
h4{
  color: var(--color-letras);
  font-size: 1rem;
}
p{
  font-size: 0.9rem;
}
span{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

span:nth-child(2){
  justify-content: center;
  align-items: center;
}
/*span:nth-child(2) > h4{
  color: greenyellow;
}*/
`