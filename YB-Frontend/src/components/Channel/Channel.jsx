import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import ChannelSideBar from './ChannelSideBar';
import Footer from '../Common/Footer/Footer';


import './Channel.css';

class Channel extends Component {
  render() {
    return (
      <div className="main-app">
        <Header />

        <div className="col-sm-12 col-md-8">
          <Post />
        </div>

        <div className="col-sm-12 col-md-4">
          <ChannelSideBar />
        </div>

        <Footer />

      </div>
    );
  }
}

export default Channel;
