import React, { Component } from 'react';

import Header from './components/Header/Header';

import './resources/reset.scss';
import './resources/styles.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}

export default App;
