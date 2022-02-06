import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="stopwatch headline">
        Timer
      </h1>
      <h1 className="stopwatch indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="container">
        <button type="button" className="button is-dark1" onClick={start}>
          Start
        </button>
        <button type="button" className="button is-dark2" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button is-dark3" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button is-dark4" onClick={wait}>
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