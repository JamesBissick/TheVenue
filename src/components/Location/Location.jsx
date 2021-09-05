import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810789227!2d-0.24168040053953296!3d51.52877184052589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sfr!4v1630828612545!5m2!1sen!2sfr"
        width='100%'
        height='500px'
        allowFullScreen=''
        loading='lazy'
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
