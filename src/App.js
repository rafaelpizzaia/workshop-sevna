import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chuck Norris Facts</h2>
        </div>
        <AppContainer />
      </div>
    );
  }
}

export default App;
