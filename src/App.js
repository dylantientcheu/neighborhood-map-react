import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/GmapComponent/MapContainer';
import SidebarComp from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighborhood Map Project</h1>
        </header>
        <SidebarComp />
        <MapContainer />
      </div>
    );
  }
}

export default App;
