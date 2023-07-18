import { styled } from "styled-components";

export const ContainerCategory = styled.section`
  color: white;
  padding: 50px 0px;
  max-width: 1536px;
  margin: 0 auto;

`;
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); //362
  gap: 20px 30px;
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