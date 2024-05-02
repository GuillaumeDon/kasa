import React from 'react';

function Banner({ title, imageUrl }) {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="banner-container-title">{title}</h1>
    </div>
  );
}

export default Banner;
