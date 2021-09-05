import React, { Component } from 'react';

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
        <Featured />
        <VenueInfos />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
