import React, { Component } from 'react';
import ChannelListItem from './ChannelListItem';

export default class ChannelSideBar extends Component {
  render() {
    return (
      <div className="channel-sidebar">
        <p>YonnBot Channels</p>
        <ChannelListItem channel="Tech" postcount="3670"/>
        <ChannelListItem channel="Music" postcount="2093" />
        <ChannelListItem channel="Code" postcount="649" />
        <ChannelListItem channel="Fun" postcount="6478" />
        <ChannelListItem channel="Video" postcount="10k+" />
        <ChannelListItem channel="Web Dev" postcount="3670"/>
        <ChannelListItem channel="Hosting" postcount="2093" />
        <ChannelListItem channel="IoT" postcount="649" />
        <ChannelListItem channel="Ask YB" postcount="6478" />
        <ChannelListItem channel="OldSchool" postcount="10k+" />
        <ChannelListItem channel="Meme" postcount="6478" />
        <ChannelListItem channel="Poetry" postcount="10k+" />
        <ChannelListItem channel="Art" postcount="3670"/>
        <ChannelListItem channel="LifeStyle" postcount="2093" />
        <ChannelListItem channel="Movies" postcount="649" />
        <ChannelListItem channel="News" postcount="6478" />
        <ChannelListItem channel="Other" postcount="10k+" />
      </div>
    );
  }
}