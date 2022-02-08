import { useEffect, useState } from "react";
import { interval, Subject, fromEvent } from "rxjs";
import { takeUntil, map, buffer, debounceTime, filter } from "rxjs/operators";
import "./CountTime.css";

const StopwatchRxJS = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let stream$ = new Subject();
    let timerObservable = interval(1000);
    timerObservable.pipe(takeUntil(stream$)).subscribe(() => {
      if (isActive === true) {
        setTimer((prev) => prev + 1000);
      }
    });

    return () => {
      stream$.next();
      stream$.complete();
      stream$.unsubscribe();
    };
  }, [isActive]);

  const toggleHandler = () => {
    if (isActive !== true) {
      setIsActive(true);
    }
    if (isActive === true) {
      setIsActive(false);
      setTimer(0);
    }
  };

  const waitHandler = () => {
    const mouse$ = fromEvent(document.querySelector("#wait"), "click");
    const buff$ = mouse$.pipe(debounceTime(300));
    const click$ = mouse$.pipe(
      buffer(buff$),
      map((list) => {
        return list.length;
      }),
      filter((x) => x === 2)
    );
    click$.subscribe(() => {
      setIsActive(false);
    });
  };

  const resetHandler = () => {
    setTimer(0);
    setIsActive(true);
  };

  return (
    <>
      <div id="counter">{new Date(timer).toISOString().slice(11, 19)}</div>
      <div id="controls">
        <button id="toggle" onClick={toggleHandler}>
          start/stop
        </button>
        <button id="wait" onClick={waitHandler}>
          wait
        </button>
        <button id="reset" onClick={resetHandler}>
          reset
        </button>
      </div>
    </>
  );
};

export default StopwatchRxJS;