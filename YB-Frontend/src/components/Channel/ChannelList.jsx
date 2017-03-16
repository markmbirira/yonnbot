import React, { Component } from 'react';
import ChannelListItem from './ChannelListItem';


export default class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list-item-container">
        <h5 className="text-info">YonnBot Channels</h5>
        <hr />
        <ChannelListItem channel="Tech" postcount="3670"/>
        <ChannelListItem channel="Music" postcount="2093" />
        <ChannelListItem channel="Code" postcount="649" />
        <ChannelListItem channel="Fun" postcount="6478" />
        <ChannelListItem channel="Other" postcount="10k+" />
        <hr />
      </div>
    );
  }
}