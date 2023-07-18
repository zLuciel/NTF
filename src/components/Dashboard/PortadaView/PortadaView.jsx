import React from 'react'
import { ContainerPortada } from './css/PortadaView'
import Image from 'next/image'

const PortadaView = ({image}) => {
  return (
    <ContainerPortada portada={image}>
        {<Image fill={true}  sizes="100vw" priority={"high"} alt='portada' src={image}/>}
    </ContainerPortada> 
  )
}

export default PortadaView