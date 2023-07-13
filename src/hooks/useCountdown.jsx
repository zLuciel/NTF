"use client";
import { useEffect, useState } from "react";

const initialSate = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(initialSate);
  const [message, setMessage] = useState("Inicio");
  //**Saber el mes May y dia 15 ejemplo */
  const monthOptions = { month: "long" };
  const monthName = new Intl.DateTimeFormat("es-ES", monthOptions).format(targetDate);
  const dayNumber = targetDate.getDate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft(initialSate);
        setMessage("finalizado")
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);
  
  return {timeLeft,monthName,dayNumber,message};
};

export default useCountdown;
