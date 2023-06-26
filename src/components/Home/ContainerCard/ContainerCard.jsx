
import Arte from '../Arte/Arte'
async function getArtistAlbums() {
  const res =  await fetch(`http://localhost:3000/api/allevents`)
  return res.json()
}

const ContainerCard = async () => {
   const dataEvent = await getArtistAlbums()
   console.log(dataEvent);

 if(!dataEvent) return <div>cargando</div>
  return (
    <>
     <Arte  dataevent={dataEvent} title={"Tendencias en Arte"} />
     <Arte dataevent={dataEvent} title={"Tendencias en Videojuego"} />
     <Arte  dataevent={dataEvent} title={"Tendencias en Fotografía"} />
    </>
  )
}


export default ContainerCard