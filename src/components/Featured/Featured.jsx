import React from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
  return (
    <div style={
      { position: 'relative' }
    }>
      <Carrousel />
      <div className='artist artist_name'>
        <div className='wrapper'>Real Estate</div>
      </div>
    </div>
  );
};

export default Featured;
