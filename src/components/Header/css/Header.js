"use client"
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
position: sticky;
top: 0px;
width: 100%;

z-index: 6568;

`
export const Nav = styled.nav`
color: white;
background: #222222;
height: 75px;
ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
ul > li{
    list-style: none;
}
`