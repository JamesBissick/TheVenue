import React, { Component } from 'react';
import UIButton from '../UI/UIButton';

import { Zoom } from 'react-reveal';

class Pricing extends Component {
  state = {
    prices: [ 79, 129, 259 ],
    positions: [ 'Balcony', 'Medium', 'Lounge' ],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
      'Sollicitudin tempor id eu nisl nunc mi. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie at elementum eu facilisis sed odio. Vel eros donec ac odio tempor.',
      'Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nec sagittis aliquam malesuada bibendum.'
    ],
    linkto: [ 'http://sales/b', 'http://sales/m', 'http://sales/s' ],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    return (
      this.state.prices.map((box, i) => (
        <Zoom key={i} delay={this.state.delay[i]}>
          <div className='pricing_item'>
            <div className='pricing_inner_wrapper'>
              <div className='pricing_title'>
                <span>{ this.state.prices[i] }€</span>
                <span>{ this.state.positions[i] }</span>
              </div>
              <div className='pricing_description'>
                <span>{ this.state.desc[i] }</span>
              </div>
              <div className='pricing_buttons'>
                <UIButton
                  text='Purchase'
                  bck='#ffa500'
                  color='white'
                  link={this.state.linkto[i]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      ))
    );
  };

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{ this.showBoxes() }</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
