"use client";

import { styled } from "styled-components";

export const SearchFilterStyled = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: max-content;
  padding: 10px;
  border: 1px solid #161616;
  color: white;
  border-radius: 0.625rem;
  background: var(--morado-claro);
  box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  .icon-filter {
    color: #161616;
  }
`;
