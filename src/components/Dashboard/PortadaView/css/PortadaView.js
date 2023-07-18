"use client"
import { styled } from "styled-components";

export const ContainerPortada = styled.div`
background: black;
width: 100%;
height: 50vh;
position: relative;
//new
/*background: ${props => `url(${props.portada}) center center/cover no-repeat`};
background-size:fixed;
opacity: 0.8;*/
img{
    object-fit: cover;
    object-position: center;
    opacity: 0.7;
}
`