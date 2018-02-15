import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './Components/GmapComponent/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map Project</h1>
        </header>
        <MapContainer></MapContainer>
      </div>
    );
  }
}

export default App;
