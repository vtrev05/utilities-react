import React, { useEffect, useState } from "react";
import "./digitalclock.css";

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setClockState(date.toLocaleTimeString());
        }, 1000);
      }, []);

    return (
    <div className="clock-div">
      <h2 className="digital-clock">{clockState}</h2>
    </div>
    )
}

export default DigitalClock
