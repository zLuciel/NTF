
import MainEventoID from '@/components/EventoId/MainEventoID/MainEventoID'
import Arte from '@/components/Home/Arte/Arte'

import React from 'react'

export async function GetEvents() {
  const res =  await fetch("http://localhost:3000/api/todoevents")
  return await res.json()
}

const page =  async ({params}) => {
  const {id} = params
  const dataEvent = await GetEvents()

  return (
    <>
    <main style={{maxWidth:"1536px", margin:" 0 auto"}}>
        <MainEventoID  id={id} />
    </main>
    <div style={{maxWidth:"1530px",margin:"0 auto",marginBottom:"20px"}}>
      <Arte dataevent={dataEvent} />
    </div>
    </>
  )
}

export default page