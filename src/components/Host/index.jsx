import React from 'react';

function Host({ name, picture }) {
  return (
    <div className='host-container'>
      <h3 className='host-container-name'>{name}</h3>
      <img className='host-container-img' src={picture} alt={name} />
    </div>
  );
}

export default Host;
