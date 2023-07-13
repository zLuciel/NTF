"use client";
import { styled } from "styled-components";

export const FlexColumn1 = styled.div`
  display: grid;
  grid-template-columns: 400px minmax(300px, 1fr) 200px;
  grid-template-areas:
    "namealias biografia redes"
    "Follow biografia redes";
  gap: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;
export const NameUserAlias = styled.span`
  grid-area: namealias;
  text-align: center;
  max-width: 340px;
  h1 {
    line-height: 1.3;
    font-family: "Exo";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const ContainerFollow = styled.div`
  grid-area: Follow;
  display: flex;
  justify-content: start;
  align-items: center;
  .white-cuadro {
    background: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    display: flex;
    span:first-child {
      border-right: 1px solid #e5e5e5;
    }
    span {
      text-align: center;
      padding: 15px 50px;
    }
  }
`;

export const ContainerBiografia = styled.div`
  color: white;
  overflow: hidden;
  padding-left: 0px;
  height: 145px;
  grid-area: biografia;
  transition: all 5.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 5px; /* Anchura del scrollbar */
    background: #222222;
  }

  /* Estilo del thumb del scrollbar */
  &::-webkit-scrollbar-thumb {
    background-color: greenyellow; /* Color del thumb */
    border-radius: 0px; /* Borde redondeado del thumb */
    border: 3px solid transparent; /* Borde transparente */
  }

  /* Estilo del thumb del scrollbar al pasar el ratón sobre él */
  &::-webkit-scrollbar-thumb:hover {
    background-color: greenyellow; /* Color del thumb al pasar el ratón */
  }
  &:hover {
    overflow-y: auto;
  }
  h2 {
    margin-bottom: 10px;
  }
`;

export const ContainerRedes = styled.div`
  grid-area: redes;
  justify-self: center;
  align-self: center;
`;
