import React, { Component } from 'react';
import ChannelList from './ChannelList';

export default class ChannelSideBar extends Component {
  render() {
    return (
      <div className="channel-sidebar">
        <ChannelList />
      </div>
    );
  }
}