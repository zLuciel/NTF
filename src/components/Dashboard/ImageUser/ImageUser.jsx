import React from 'react'
import { StyledImageUser } from './css/ImageUser'
import Image from 'next/image'
import img from "@/assets/6.jpg"
const ImageUser = () => {
  return (
    <StyledImageUser>
        <Image fill={true} sizes="(min-width: 640px) 640px, 100vw" src={img} alt='imguser'/>
    </StyledImageUser>
  )
}

export default ImageUser