"use client"
import React from "react";
import { DateStyled, Time, TimeCardStyled } from "./css/TimeCard";
import useCountdown from "@/hooks/useCountdown";

export const TimeCard = ({ endDate }) => {
  const targetDate =  new Date(endDate);
  const  {timeLeft,monthName,dayNumber,message} = useCountdown(targetDate);
 
  return (
    <TimeCardStyled>
      <Time $message={message} >
        <h4>{message}</h4>      
         <span className="xd4">
            <p>{timeLeft.days}D</p>
            <p>{timeLeft.hours}h</p>
            <p>{timeLeft.minutes}m</p>
            <p>{timeLeft.seconds}s</p>
          </span>
      </Time>

      <DateStyled>
        <h4>{monthName}</h4>
        <p>{dayNumber}</p>
      </DateStyled>
    </TimeCardStyled>
  );
};
