import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';

class SidebarComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const sidebarContent = <SidebarContent />;
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      />
    );
  }
}

export default SidebarComp;
