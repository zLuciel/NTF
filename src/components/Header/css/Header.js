"use client"
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
background: #161616;
position: sticky;
top: 0px;
width: 100%;
z-index: 6568;
`
export const Nav = styled.nav`
padding: 0 20px;
margin: 0 auto;
max-width: 1536px;
color: white;
height: 75px;
display: flex;
justify-content: space-between;
align-items: center;

`

export const ListNav = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

 & > li{
    list-style: none;
 }
`

export const Logo = styled.span`
color: #FFF;
font-family: Abril Fatface;
font-size: 2.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
 p{
    display: inline;
    color: var(--morado-claro);
 }
`