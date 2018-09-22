import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard.jsx';
import Nutrition from './components/nutrition/nutrition-page.jsx';
import Maps from './components/map/fitnessmaps.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard/>
        <Nutrition/>
        <Maps/>
      </div>
    );
  }
}

export default App;
