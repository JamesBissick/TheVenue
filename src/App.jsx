import React, { Component } from 'react';

import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import VenueInfos from './components/VenueInfos/VenueInfos';
import Highlights from './components/Highlights/Highlights';

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
      </div>
    );
  }
}

export default App;
