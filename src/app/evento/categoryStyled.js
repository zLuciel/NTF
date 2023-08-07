"use client"
import { styled } from "styled-components";

export const ContainerCategory = styled.section`
  color: white;
  padding: 50px 20px;
  max-width: var(--max-width);
  margin: 0 auto;

`;
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr)); //362
  gap: 20px 10px;
`;

export const FlexFilter = styled.span`
display: flex;
justify-content: space-between;
//gap: 10px;
margin-bottom: 20px;
.direct-colum{
  display: flex;
  gap: 10px;
}
`