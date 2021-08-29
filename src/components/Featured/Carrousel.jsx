import React from 'react';
import Slider from 'react-slick';

import slide_1 from '../../resources/images/Slide_1.jpg';
import slide_2 from '../../resources/images/Slide_2.jpg';
import slide_3 from '../../resources/images/Slide_3.jpg';

import "slick-carousel/slick/slick.css";

const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipe: true,
    touchMove: true,
    slidesToShow: 1
  };

  return (
    <div className='carrousel_wrapper'>
      <Slider { ...settings }>
        <div>
          <div className='carrousel_image' style={ {
            background: `url(${ slide_1 })`,
            height: `${ window.innerHeight }px`
          } } />
        </div>
        <div>
          <div className='carrousel_image' style={ {
            background: `url(${ slide_2 })`,
            height: `${ window.innerHeight }px`
          } } />
        </div>
        <div>
          <div className='carrousel_image' style={ {
            background: `url(${ slide_3 })`,
            height: `${ window.innerHeight }px`
          } } />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
