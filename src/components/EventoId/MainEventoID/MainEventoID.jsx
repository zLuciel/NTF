import React from 'react'
import { SectionGridEventId } from './css/MainEventoID'
import CardEventID from '../CardEventID/CardEventID'
import CardDescription from '../CardDescription/CardDescription'

export async function GetEventsId(id) {
  try {
     const res =  await fetch(`http://localhost:3000/api/events/${id}`)
     const data = res.json();
     return await data
  } catch (error) {
    console.log(error,"event id");
  }
}


const MainEventoID =  async ({id}) => {
  const data = await GetEventsId(id)
  
  return (
    <SectionGridEventId>
        <CardEventID  endDate={data?.endDate} picture={data?.user.picture} price={data?.price} image={data?.image} title={data?.title}  />
        <CardDescription data={data} tags={data?.tags} image={data?.user.picture}/>
    </SectionGridEventId>
  )
}

export default MainEventoID