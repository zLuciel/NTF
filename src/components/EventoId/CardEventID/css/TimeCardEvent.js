"use client"
import { styled } from "styled-components";

export const TimeFlex = styled.div`
padding: 5px 10px;
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
.separador{
    color: #484848;
    font-size: 2.5rem;
}
`

export const SpanFlexTime = styled.span`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2,p{
    font-family: 'Inter';
    font-style: normal;
}
h2{
font-weight: 600;
font-size: 32px;
line-height: 39px;
}
p{
color: #d9d9d9;
font-family: 'Inter';
font-weight: 500;
font-size: 13px;
line-height: 16px;
text-transform: uppercase;
}
`