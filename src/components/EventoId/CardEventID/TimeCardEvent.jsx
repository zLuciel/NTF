"use client"
import React from 'react'
import { SpanFlexTime, TimeFlex } from './css/TimeCardEvent'
import useCountdown from '@/hooks/useCountdown';

const TimeCardEvent = ({endDate}) => {
  const targetDate =  new Date(endDate);
  const  {timeLeft,monthName,dayNumber} = useCountdown(targetDate);
  return (
        <TimeFlex>
           <SpanFlexTime>
            <h2>{timeLeft.days}</h2>
            <p>[Dias]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>{timeLeft.hours}</h2>
            <p>[Horas]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>{timeLeft.minutes}</h2>
            <p>[Minutos]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>{timeLeft.seconds}</h2>
            <p>[Segundos]</p>
           </SpanFlexTime>
        </TimeFlex>
  )
}

export default TimeCardEvent