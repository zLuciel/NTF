"use client"
import { styled } from "styled-components";

export const GridDashboardContainer = styled.div`
   display: grid;
   //grid-template-columns: 400px 1fr;
   grid-template-columns:  1fr;
`

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));//362
  gap: 20px 10px;
`;