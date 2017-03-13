import React, { Component } from 'react';
import ChannelListItem from './ChannelListItem';


export default class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list-item-container">
        <h4 className="text-info">YonnBot channels available</h4>
        <hr />
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