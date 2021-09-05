import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import VenueInfos from './components/VenueInfos/VenueInfos';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

import './resources/reset.scss';
import './resources/styles.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Element name='featured'>
          <Featured />
        </Element>
        <Element name='venue-infos'>
          <VenueInfos />
        </Element>
        <Element name='highlights'>
          <Highlights />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
