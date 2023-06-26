import React from 'react'
import slide_image_7 from '@/assets/1418.jpg';
import { ContainerViewCard } from './css/ViewInfoCard';
import UserSpan from '@/components/UserSpan/UserSpan';
const ViewInfoCard = ({width,height,fontRem}) => {
  return (
    <ContainerViewCard width={width} height={height} fontrem={fontRem} >
   {/* <UserSpan userAvatar={slide_image_7}/>*/}
    <span>
    Indonesia - korea Conference
    </span>
 </ContainerViewCard>

  )
}

export default ViewInfoCard