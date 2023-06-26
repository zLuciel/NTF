import React from 'react'
import { SpanFlexTime, TimeFlex } from './css/TimeCardEvent'

const TimeCardEvent = () => {
  return (
    
        <TimeFlex>
          <SpanFlexTime>
            <h2>24</h2>
            <p>[Dias]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>6</h2>
            <p>[Horas]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>40</h2>
            <p>[Minutos]</p>
           </SpanFlexTime>
           <span className='separador'>:</span>
           <SpanFlexTime>
            <h2>12</h2>
            <p>[Segundos]</p>
           </SpanFlexTime>
        </TimeFlex>
  )
}

export default TimeCardEvent