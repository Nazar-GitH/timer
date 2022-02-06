import React from 'react';
import PropTypes from 'prop-types';
import timerSet from '../../totals/countTime';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="timer headline">
        Timer
      </h1>
      <h1 className="timer view">
        {timerSet(time)}
      </h1>
    </header>
    <section className="main">
      <div className="button-container">
        <button type="button" className="button color1" onClick={start}>
          Start
        </button>
        <button type="button" className="button color2" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button color3" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button color4" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};