import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [interval, putInterval] = useState<number>();
  const [laps, setLaps] = useState<string[]>([]);

  function start() {
    const timer = window.setInterval(() => {
      setSeconds((prev) => {
        return prev + 1;
      });
    }, 10);

    putInterval(timer);
  }

  useEffect(() => {
    if (seconds === 100) {
      setSeconds(0);
      setMinutes((prev) => {
        return prev + 1;
      });
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => {
        return prev + 1;
      });
    }
  }, [minutes]);

  function stop() {
    window.clearInterval(interval);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  function lap() {
    setLaps([
      ...laps,
      `${hours <= 9 ? "0" + hours : hours}:
    ${minutes <= 9 ? "0" + minutes : minutes}:
    ${seconds <= 9 ? "0" + seconds : seconds}`,
    ]);
  }

  return (
    <div>
      {hours <= 9 ? "0" + hours : hours}:
      {minutes <= 9 ? "0" + minutes : minutes}:
      {seconds <= 9 ? "0" + seconds : seconds}
      <br></br>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={lap}>Lap</button>
      <ol>
        {laps.map((data) => {
          return <li>{data}</li>;
        })}
      </ol>
    </div>
  );
}

export default Stopwatch;
