"use client"
export const dynamic = "force-dynamic"

import { ContainerCategory, FlexFilter, GridCard } from './categoryStyled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import Card from '@/components/NewCard/Card/Card'
import { allfetchEvents } from '@/redux/alleventos/actions'
import CategoryBtn from '@/components/ButtonFilter/CategoryBtn'
import SearchFilter from '@/components/ButtonFilter/SearchFilter'

const Page = ({params}) => {
    const {category} = params
  const dataEvent = useSelector((state) => state.allevents.data);
  const dataveinte = dataEvent?.slice(0,20)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allfetchEvents());
  }, [dispatch]);
  return (
    <ContainerCategory>
     <FlexFilter>
      <div className='direct-colum'>
      <CategoryBtn  classm={"category"}/>
      <CategoryBtn  classm={"fecha"}/>
      <CategoryBtn  classm={"precio"}/>
      </div>
      <div className='direct-colum'>
      <SearchFilter/>
  
      </div>
     </FlexFilter>
    <GridCard>
      {dataveinte?.map(data =>  <Card key={data._id} data={data} id={data?._id} user={data?.user} />)}
    </GridCard>
    </ContainerCategory>
  )
}

export default Page