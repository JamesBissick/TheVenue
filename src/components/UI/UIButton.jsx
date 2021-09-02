import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/coupon-line.png';

const UIButton = (props) => {
  return (
    <Button href={props.link} className='discount_btn' variant='contained' size='small' style={
      {
        background: props.bck,
        color: props.color
      }
    }>
      <img src={ TicketIcon } className='iconImage' alt='icon-button' />
      { props.text }
    </Button>
  );
};

export default UIButton;
