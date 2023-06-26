"use client"
import { styled } from "styled-components";

export const CreateStyledMain = styled.main`
    color: rgb(19, 19, 19);
    background: #F8F8FA; 
    
.grid-container-create{
    min-height: calc(100vh - 77px);
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
}
.col1,.col2{
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    //height: 100%;
}
.col1{
    background: #fff url(/eyes.jpg) center center/cover no-repeat;
}
.flex-btn-page-form{
    display: flex;
    gap: 20px;
}

.btn-form-skip{
    margin-top: 15px ;
    background: #ffffff;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    border: none;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.13);
    border-radius: 5px ;
    transition: all 0.3s ease-out;
  }
  
  .btn-form-skip:hover{
     cursor: pointer;
     transform: scale(1.05);
     color: #7848F4;
  }
`