import React from 'react'
import UserSpan from '../UserSpan/UserSpan'
import { ContainerCardInfo, TiempoCard } from './css/CardInfo'
import Link from 'next/link'

const CardInfo = ({userAvatar,title,id,user}) => {
  console.log(user);
  return (
    <ContainerCardInfo>
    {<Link prefetch={false} href={`/evento/${id}`}><h3>{title ? title : "Indonesia - korea Conference "} </h3></Link>}
    {user && <Link prefetch={false} href={`/dashboard/[id]`} as={`/dashboard/${user?._id}`}><UserSpan userAvatar={userAvatar}/></Link>}
    <TiempoCard>
      <span>
        <h4>Inicio</h4>
        <p>4D 23 : 20 : 10</p>
      </span>

      <span>
        <h4>SEP</h4>
        <p>18</p>
      </span>
    </TiempoCard>

  </ContainerCardInfo>
  )
}

export default CardInfo