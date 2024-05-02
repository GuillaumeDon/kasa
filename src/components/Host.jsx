import React from 'react';

function Host({ name, picture }) {
  return (
    <div>
      <h3>Host: {name}</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Host;
