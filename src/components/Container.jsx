import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  const [color, setColor] = useState('black');

  return (
    <>
      <div>{children}</div>
      <h2 style={{ color: color }}>Test</h2>
      <button
        onClick={() => {
          setColor('red');
        }}
      >
        Schimba Culoarea
      </button>
    </>
  ); // React Fragment
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
