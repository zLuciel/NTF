import React from 'react'
import { GridDashboardContainer } from './css/GridDashboard'
import Column1 from '../Column1/Column1'
import Column2 from '../Column2/Column2'

const GridDashboard = ({user,events}) => {
  return (
    <GridDashboardContainer>
    <Column1 user={user} />
    <Column2 events={events}  />
  </GridDashboardContainer>
  )
}

export default GridDashboard