/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Button(props) {
  return (
    <button type="button">{props.children}</button>
  );
}

export default Button;
