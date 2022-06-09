import React, { useEffect } from "react";
import { useState } from "react";

function Timer({ d, name }) {
  const date = d;

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDown = () => {
    const dateNow = new Date(date);
    const currentDate = new Date();

    const totalSeconds = new Date(dateNow - currentDate) / 1000;

    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
    setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
    setSeconds(formatTime(Math.floor(totalSeconds) % 60));
  };

  useEffect(() => {
    countDown();
    setTimeout(countDown, 1000);
  }, [seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <h1 className="display-3 mb-4">{name}</h1>
      <div className="text-center">
        <div className="me-4 text-center">
          <span className="d-block">Zile</span>
          <span className="d-block font-monospace fs-5">{days}</span>
        </div>
        <div className="me-4 text-center">
          <span className="d-block">Ore</span>
          <span className="d-block font-monospace fs-5">{hours}</span>
        </div>
        <div className="me-4 text-center">
          <span className="d-block">Minute</span>
          <span className="d-block font-monospace fs-5">{minutes}</span>
        </div>
        <div className="me-4 text-center">
          <span className="d-block">Secunde</span>
          <span className="d-block font-monospace fs-5">{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
