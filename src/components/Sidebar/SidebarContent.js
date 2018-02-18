import React, { Component } from 'react';

const data = require('../data/places.json');

export default class SidebarContent extends React.Component {
  render() {
    // const { places } = this.props;
    const places = data.map(place => <li>{place.name}</li>);

    return (
      <div className="sidebarcontent">
        <div>
          <input placeholder="Search ..." type="text" className="searchbar" />
        </div>
        <div className="placecontainer">
          <ul className="place">{places}</ul>
        </div>
      </div>
    );
  }
}
