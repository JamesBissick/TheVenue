import React from 'react';
import Description from './Description';
import Discount from './Discount';

const Highlights = () => {
  return (
    <section className='highlight_section'>
      <div className='highlight_wrapper'>
        <Description />
        <Discount />
      </div>
    </section>
  );
};

export default Highlights;
