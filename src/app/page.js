"use client"
export const dynamic = 'force-dynamic';
import Arte from '@/components/Home/Arte/Arte'
import styles from './page.module.css'
import MainColum1 from '@/components/Home/MainColum1/MainColum1'
import Swiper3D from '@/components/Home/MainColum2/Swiper3D'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allfetchEvents } from '@/redux/alleventos/actions';

//import TopCreadores from '@/components/Home/TopCreadores/TopCreadores'


export default function Home() {

  const dataEvent = useSelector((state) => state.allevents.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(allfetchEvents())
  },[dispatch])


//if(!dataEvent) return <div>cargando</div>

  return (
    <>
    <main className={styles.main}>
      <section  className={styles.gridMain}>
        <MainColum1/>
        <Swiper3D/> 
      </section>
    </main>
  {/*  <TopCreadores/>*/}
     <Arte  dataevent={dataEvent} title={"Tendencias en Arte"} />
     <Arte dataevent={dataEvent} title={"Tendencias en Videojuego"} />
     <Arte  dataevent={dataEvent} title={"Tendencias en Fotografía"} />
    </>
  )
}

