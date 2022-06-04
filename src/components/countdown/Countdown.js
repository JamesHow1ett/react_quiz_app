import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Countdown.css';

function Countdown({ counter, isAnswered, onCallback }) {
  const onCallbackRef = useRef(onCallback);
  const [rawCounter, setRawCounter] = useState(counter);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (isAnswered) {
        clearInterval(countdownTimer);
        setRawCounter(counter);
        return;
      }

      setRawCounter(rawCounter - 1);

      if (rawCounter === 0) {
        onCallbackRef.current();
        clearInterval(countdownTimer);
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, [rawCounter, isAnswered, counter]);

  const counterColorClass = () => {
    const moreThanHalfTimeLeft = (counter * 50) / 100;
    const moreThenQuarterTimeLeft = (counter * 25) / 100;

    if (rawCounter >= moreThanHalfTimeLeft) {
      return 'green';
    }

    if (rawCounter >= moreThenQuarterTimeLeft) {
      return 'yellow';
    }

    return 'red';
  };

  return (
    <div className={`countdown ${counterColorClass()}`}>
      <span className="countdown__text">{ rawCounter }</span>
    </div>
  );
}

Countdown.propTypes = {
  counter: PropTypes.number,
  isAnswered: PropTypes.bool,
  onCallback: PropTypes.func,
};

Countdown.defaultProps = {
  counter: -1,
  isAnswered: false,
  onCallback: () => {},
};

export default Countdown;
