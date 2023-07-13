"use client"
import { styled } from "styled-components";

export const CardEventDescription = styled.div`
color:white;
border: 1px solid #E0E0E0;
border-radius: 10px;
padding: 20px 40px;
display: flex;
overflow: hidden;
flex-direction: column;
gap: 20px;
.flex-descrip-user-fav{
    display: flex;
    justify-content: space-between;
}

`
export const ContainerTextFlex = styled.div`
display: flex;
flex-direction: column;
gap: 10px;


h2{
font-family: 'Exo';
font-style: normal;
font-weight: 700;
line-height: 32px;
}

p{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 25px;
}
`

export const ContainerTags = styled.div`
h2{
font-family: 'Exo';
font-style: normal;
font-weight: 700;
line-height: 32px;
}
`