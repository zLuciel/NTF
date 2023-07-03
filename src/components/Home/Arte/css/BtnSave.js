"use client"
import { styled } from "styled-components";

export const FlexSpanBtn = styled.span`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
` 



export const BtnSaveStyled = styled.button`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 900px;
background: rgba(0, 0, 0, 0.24);
backdrop-filter: blur(2.5px);
border: none;

:hover{
    color: greenyellow;
}
.icon-favorite  {
    color: white;
    font-size: 1.5rem;
}
.lg{
    font-size: 1.2rem;
} 
`