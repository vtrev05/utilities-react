import React, { useState, useEffect } from "react";
import "./Countdown.css";
const Countdown = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState('');
  useEffect(() => {
    let countDownDate = new Date(`${date}`).getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      parseInt(setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s "))
      
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, [date, time]);
  return (
    <div className="countdown">
      <h1 className="countdown__title">Introduce una fecha válida que tenga este formato:</h1>
      <input
          type="text" placeholder="November 05, 2021 13:00:00"
          onBlur={(event) => {
            setDate(event.target.value);
          }}
        />
      <h2 className="countdown__title">{time} Este es el tiempo que queda para que suceda lo que has introducido.</h2>
    </div>
  );
};

export default Countdown;