"use client"

import { styled } from "styled-components"

export const SearchFilterStyled = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: max-content;
padding: 10px;
border: 1px solid var(--morado-claro);
color: white;
border-radius: 0.625rem;
background: #161616;
box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
.icon-filter{
    color: var(--morado-claro);
}
`