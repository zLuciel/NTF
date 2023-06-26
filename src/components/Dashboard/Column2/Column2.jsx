import React from 'react'
import { ContainerColum2, FlexButtonUser, GridCard } from './css/Column2'
import Image from 'next/image'
import { CardArte, Price } from '@/components/Home/Arte/css/Arte';
import CardInfo from '@/components/CardInfo/CardInfo';



const Column2 = ({events}) => {
  return (
    <ContainerColum2>
        <FlexButtonUser>
            <div>
            <span>Creados</span>
            <span>Favoritos</span>
          </div>
          <button>Crear</button>
        </FlexButtonUser>
        <GridCard>
           {
            events?.map((data,i)=> (
                <div key={i} className='contxd'>
                <Image  fill={true} sizes="(min-width: 640px) 640px, 100vw" src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${data.image}.jpg`}  alt='artess'/>
                 <CardArte >
                  <div className='flex-price'>
                  <Price>
                    $10.00
                  </Price>
                  <span>
                    golas
                  </span>
                  </div>
                  <CardInfo title={data?.title} id={data?._id} user={data?.user} userAvatar={data?.image} />
              </CardArte>
                </div>
            ))
           }
        </GridCard>
    </ContainerColum2>
  )
}

export default Column2