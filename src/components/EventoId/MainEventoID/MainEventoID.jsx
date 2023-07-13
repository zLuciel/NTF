
import React from 'react'
import { SectionGridEventId } from './css/MainEventoID'
import CardEventID from '../CardEventID/CardEventID'
import CardDescription from '../CardDescription/CardDescription'


export async function GetEventsId(id) {
  try {
     const res =  await fetch(`http://localhost:3000/api/events/${id}`)
  return await res.json()
  } catch (error) {
    console.log(error,"event id");
  }
 
}


const MainEventoID =  async ({id}) => {
  const data = await GetEventsId(id)
  return (
    <SectionGridEventId>
        <CardEventID endDate={data?.endDate} price={data?.price} image={data?.image} title={data.title}  />
        <CardDescription/>
    </SectionGridEventId>
  )
}

export default MainEventoID