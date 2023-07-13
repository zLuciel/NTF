"use client"

import { styled } from "styled-components"

export const ContainerForm = styled.div`
    position: relative;
    width: 505px;/*625*/
    border-radius: 10px;
    padding: 25px;
    background: rgb(255, 255, 255);
   // box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.418);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.13);
  
  .container-form-event label{
    font-size: 1rem;
    font-style: normal;
  }
  .fecha-form{
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .descrip-tarjeta  textarea{
    min-height: 100px ;
  }
  
`