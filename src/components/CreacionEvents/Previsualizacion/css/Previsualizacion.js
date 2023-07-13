"use client"
import { styled } from "styled-components";

export const ContainerPreVisual = styled.div`
    padding: 50px;
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(5.5px);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    & > div > h1{
        font-weight: 400;
    }
`