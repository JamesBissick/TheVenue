import React from 'react';
import { Zoom } from 'react-reveal';

import icon_calendar from '../../resources/images/icons/calendar-2-line.png';
import icon_location from '../../resources/images/icons/map-pin-line.png';

const VenueInfos = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <Zoom>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square yellow'></div>
                  <div className='vn_icon' style={
                    { background: `url(${ icon_calendar })` }
                  } />
                  <div className='vn_title'>Event Date & Time</div>
                  <div className='vn vn_desc'>7 Aug 2022 @9.00 PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={450}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square orange'></div>
                  <div className='vn_icon' style={
                    { background: `url(${ icon_location })` }
                  } />
                  <div className='vn_title'>Event Location</div>
                  <div className='vn vn_desc'>35 Pentridge St, London (UK)</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfos;
