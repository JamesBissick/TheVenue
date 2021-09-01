import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const Featured = () => {
  return (
    <div style={
      { position: 'relative' }
    }>
      <Carrousel />
      <div className='artist artist_name'>
        <div className='wrapper'>
          <div className='band band_name'>Real Estate</div>
        </div>
      </div>
      <Countdown />
    </div>
  );
};

export default Featured;
