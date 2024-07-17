import React from 'react';

export default function Paper(props) {
  return (
    <div
      style={{
        background: "#ffffff",
        boxShadow: '0px 4px 10px 0px #00000040',
      }}
    >
      {props.children}
    </div>
  );
}
