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
    .previmg{
        position: relative;
        width: 362.75px;
        height: 357.75px;// cambio para visualizar cuadro
        filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));
        img{
            border-radius: 10px;
            object-fit: cover;
        }
    }
`