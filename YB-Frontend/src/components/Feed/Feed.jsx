import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import FeedSideBar from './FeedSideBar';

import './Feed.css';

class Feed extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="main-content">
          <Post />
          <FeedSideBar />

          <div className="clear"></div>
        </div>

        { this.props.children }

      </div>
    );
  }
}

export default Feed;
