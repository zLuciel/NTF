"use client";

import { styled } from "styled-components";

export const UserHeaderStyled = styled.div`
  position: relative;
  .image-user {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    transition: all 0.3 ease-in-out;
    &:hover::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 58px;
      height: 58px;
      border-radius: 50px;
      border: 2px solid var(--morado-claro);
    }
  }

  img {
    border-radius: 50px;
  }
`;

export const DropUser = styled.div`
  padding: 10px;
  background: var(--bg-secundary);
  position: absolute;
  z-index: 45;
  left: 50%; //responsive 0
  transform: translate(-50%, 0);
  bottom: -240%;
  border: 1px solid var(--morado-claro);
  border-radius: 10px;
  box-shadow: -6px 6px 4px rgba(0, 0, 0, 0.25);

`;


export const ListUserHeader = styled.ul`

display: flex;
flex-direction: column;
gap: 10px;
.login-btnn {
    cursor: pointer;
    color: white;
    //border: 1px solid rgba(0, 0, 0, 0.48);
   // filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.46));
   // background: var(--bg-secundary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    padding: 8px 15px;
  }
`