import React from 'react';

export default function MyBox({ isSwitchOn }) {
  const boxHeight = isSwitchOn ? '300px' : '100px';

  return (
    <div
      style={{
        backgroundColor: 'teal',
        height: boxHeight,
        transition: 'height 0.3s ease',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <h1>Hello Word</h1>
    </div>
  );
}
