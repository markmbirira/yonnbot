import React, { Component } from 'react';
import ChannelListItem from './ChannelListItem';


export default class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list-item-container">
        <h3 className="text-info">Available Channels</h3>
        <hr />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />
        <ChannelListItem />

        <p> 
          <button className="btn btn-md">&larr; prev</button>
          <button className="btn btn-md pull-right">next &rarr;</button>
        </p>
        <hr />
      </div>
    );
  }
}