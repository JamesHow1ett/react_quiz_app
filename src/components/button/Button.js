/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({
  children, variant, color, onClick, size,
}) {
  const btnClasses = () => `r-btn r-btn--${variant} r-btn--${color} r-btn--${size}`;
  const handleClick = (event) => onClick(event);

  return (
    <button
      type="button"
      className={btnClasses()}
      onClick={(event) => handleClick(event)}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Button',
  variant: 'depressed',
  color: 'purple',
  size: 'md',
  onClick: () => {},
};

export default Button;
