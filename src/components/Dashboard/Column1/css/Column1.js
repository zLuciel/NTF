"use client";
import { styled } from "styled-components";

export const FlexColumn1 = styled.div`
  display: grid;
  grid-template-columns: 375px minmax(300px, 1fr) 280px; // 400px minmax(300px, 1fr) 300px
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
  p {
    color: #fff;
  }
`;

export const ContainerFollow = styled.div`
  max-width: 332px;
  height: 93px;
  border: 1px solid var(--morado-claro);
  grid-area: Follow;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #161616;
  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.13));
  border-radius: 10px;
  display: flex;
  span:first-child {
    border-right: 1px solid #1f1f1f;
  }
  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 100%;
    color: white;
    text-align: center;
  }
  span > h2 {
    color: #fff;
    text-align: center;
    font-family: Exo;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span > p {
    color: #bcbcbc;
    text-align: center;
    font-family: Exo;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContainerBiografia = styled.div`
  //max-width: 800px; //*probando este withd*/
  color: white;
  padding-left: 0px;
  height: 145px;
  grid-area: biografia;
  transition: all 5.8s ease-in-out;

  p {
    max-height: 120px;
    overflow: hidden;
    color: #bcbcbc;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */

    &::-webkit-scrollbar {
      width: 5px; /* Anchura del scrollbar */
      background: #222222;
    }

    /* Estilo del thumb del scrollbar */
    &::-webkit-scrollbar-thumb {
      background-color: var(--morado-claro); /* Color del thumb */
      border-radius: 0px; /* Borde redondeado del thumb */
      border: 3px solid transparent; /* Borde transparente */
    }

    /* Estilo del thumb del scrollbar al pasar el ratón sobre él */
    &::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --morado-claro
      ); /* Color del thumb al pasar el ratón */
    }
    &:hover {
      overflow-y: auto;
    }
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
`;

export const ContainerRedes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 172px;
  grid-area: redes;
  justify-self: end;
  h2 {
    color: #fff;
    text-align: center;
    text-shadow: -4px 4px 4px 0px #000;
    font-family: Exo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    height: 38px;
    width: 255px;
    color: white;
    box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.43);
    border-radius: 0.625rem;
    font-family: Exo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    background: #161616;
    transition: color 0.1s ease-in-out;
    &:hover{
      color: var(--morado-claro);
    }
  }
`;

export const BtnEditarPerfil = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.48);
`;

export const BtnFollow = styled.button`
  border: 2px solid var(--morado-claro);
`;