"use client";

import { styled } from "styled-components";

export const GridGalleryStyled = styled.section`
  color: white;
  display: grid;
  gap: 15px;
  grid-template-areas:
    "arte arte robots cosina"
    "arte arte robots vista"
    "iluminado antiguedad espacial espacial";

  & > div {
    display: flex;
    border-radius: 20px;
    padding: 20px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease-in-out;
  &:hover{
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
    box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.5);
  }
  
  }
  .span-flex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  a {
    border-radius: 5px;
    width: max-content;
    background: var(--morado-claro);
    padding: 9px 18px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .lg {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const Parrafo = styled.p`
  max-width: 400px;
  color: #f1f1f1;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  display: flex;
`;
export const GalleryArte = styled.div`
  grid-area: arte;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/eyes10.jpg") center center/cover no-repeat;
    span {
    justify-content: center;
  }
`;

export const GalleryRobots = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/robots.png") center center/cover no-repeat;
  grid-area: robots;
  span {
    justify-content: end;
  }
`;
export const GalleryCosina = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/cosina.png") center center/cover no-repeat;
  grid-area: cosina;
`;

export const GalleryVista = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/7.jpg") top center/cover no-repeat;
  grid-area: vista;
`;

export const GalleryIluminado = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/iluminado.jpg") center center/cover no-repeat;
  height: 319px;
  grid-area: iluminado;
  span {
    justify-content: end;
  }
`;

export const GalleryAntiguedad = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/antiguedad.jpg") center center/cover no-repeat;
  grid-area: antiguedad;
  span {
    justify-content: end;
  }
`;

export const GalleryEspacial = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/espacial.jpg") center center/cover no-repeat;
  grid-area: espacial;
  span {
    justify-content: center;
  }
`;
