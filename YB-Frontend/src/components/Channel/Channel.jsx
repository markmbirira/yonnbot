import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import ChannelSideBar from './ChannelSideBar';
// import Footer from '../Common/Footer/Footer';


import './Channel.css';

class Channel extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="main-content">
            <Post />
            <ChannelSideBar />

            <div className="clear"></div>
        </div>

        {this.props.children}

      </div>
    );
  }
}

export default Channel;
