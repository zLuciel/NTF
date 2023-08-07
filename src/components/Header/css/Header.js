"use client";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  //background: #161616;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 6568;

    backdrop-filter: blur(5px);
    background: rgba(22, 22, 22, 0.4);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Nav = styled.nav`
  padding: 0 20px;
  margin: 0 auto;
  max-width: var(--max-width);
  color: white;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListNav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > li {
    list-style: none;
  }
  .login-btn {
    cursor: pointer;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.48);
    filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.46));
    background: var(--bg-secundary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover{
      color: var(--morado-claro);
    }
  }
  .icon-discord {
    color: #5865f2;
  }
  .icon-exit{
   color: var(--morado-claro);
  }
`;

export const Logo = styled.span`
  color: #fff;
  font-family: Abril Fatface;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  p {
    display: inline;
    color: var(--morado-claro);
  }
`;
