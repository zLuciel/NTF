"use client";
import { styled } from "styled-components";

export const CreateStyledMain = styled.main`
  color: rgb(19, 19, 19);
  .grid-container-create {
    min-height: calc(100vh - 77px);
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
  }
  .col1,
  .col2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    //height: 100%;
  }
  .col1 {
    position: relative;
    background: #fff url(/eyes10.jpg) center center/cover no-repeat;
  }
  .col1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent, #1B1B1B);
    opacity: 1; /* Ajusta el nivel de opacidad según desees */
    backdrop-filter: blur(10px) brightness(50%);
  }
  .flex-btn-page-form {
    display: flex;
    gap: 20px;
  }
`;
