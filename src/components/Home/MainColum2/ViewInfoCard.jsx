import React from 'react'

import { ContainerViewCard } from './css/ViewInfoCard';
import UserSpan from '@/components/UserSpan/UserSpan';
const ViewInfoCard = ({width,height,fontRem}) => {
  return (
    <ContainerViewCard width={width} height={height} fontrem={fontRem} >
    <UserSpan />
    <span>
    Indonesia - korea Conference
    </span>
 </ContainerViewCard>

  )
}

export default ViewInfoCard