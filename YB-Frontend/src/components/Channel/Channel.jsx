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

        <div>
          <div className="col-md-2"></div>
          <div className="col-sm-12 col-md-7 main-content">
            <Post />
          </div>

          <div className="col-sm-12 col-md-3 main-content">
            <ChannelSideBar />
          </div>
        </div>

        <Footer />

        {this.props.children}

      </div>
    );
  }
}

export default Channel;
