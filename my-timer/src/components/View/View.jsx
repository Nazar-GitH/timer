import React, { useState, useEffect } from "react";
import styles from "./Stopwatch.module.scss";

const Stopwatch = () => {
  const [active, setActive] = useState(false);
  const [tik, setTik] = useState(0);
  const [time, setTime] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    if (active) {
      const endTime = new Date().getTime() - startTime;
      setTime(endTime);

      const start = () => {
        setTik(tik + 1);
      };
      setTimeout(start, 1000);
      const secs = Math.floor((time / 1000) % 60);
      const mins = Math.floor(((time / 1000 - secs) % 360) / 60);
      const hours = Math.floor(((time / 1000 - secs) / 60 - mins) / 60);
      setHour(hours);
      setMin(mins);
      setSec(secs);
    }
  }, [tik, active]);

  const startHandler = () => {
    setActive(true);
    const startDate = new Date().getTime() - time - 1000;
    setStartTime(startDate);
  };

  const stopHandler = () => {
    resetHandler();
    setActive(false);
  };

  const waitHandler = () => {
    const startDate = new Date().getTime() - time - 1000;
    setStartTime(startDate);
    setActive(false);
  };

  const resetHandler = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setTime(0);
    setTik(0);
    setStartTime(new Date().getTime());
    setActive(true);
  };

  return (
    <div>
      <div className={styles.buttons_wrapper}>
        <button type="button" onClick={startHandler} disabled={active}>
          Start
        </button>
        <button type="button" onClick={stopHandler} disabled={!tik || !time}>
          Stop
        </button>
        <button type="button" onClick={waitHandler} disabled={!active || !tik}>
          Wait
        </button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <div className={styles.time_wrapper}>
        <span>
          {(hour < 10 ? "0" : "") + hour}
          {(min < 10 ? ":0" : ":") + min}
          {(sec < 10 ? ":0" : ":") + sec}
        </span>
      </div>
    </div>
  );
};

export default Stopwatch;