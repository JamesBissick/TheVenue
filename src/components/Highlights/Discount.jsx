import React, { Component } from 'react';
import Fade from 'react-reveal';
import { Slide } from 'react-reveal';

import UIButton from '../UI/UIButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade
            onReveal={ () => this.percentage() }
          >
            <div className='discount_percentage'>
              <span>{ this.state.discountStart }%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 20th June</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus pariatur ratione sed similique
                unde voluptatem. Dolore eligendi impedit necessitatibus reprehenderit? Consequuntur dolore doloribus,
                eaque earum exercitationem inventore ipsa magnam maxime natus necessitatibus nobis non omnis, quas quis
                quos, similique vitae? Doloremque modi nisi quidem quis tenetur? Cum debitis ducimus eligendi eos error
                eum excepturi fugit magnam minima molestiae nam, natus neque numquam officiis quae rem repellat,
                reprehenderit rerum sed sit suscipit vitae voluptas voluptates!</p>

              <UIButton
                text='Purchase tickets'
                bck='#fa5e43'
                color='white'
                link='http://google.com'
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
