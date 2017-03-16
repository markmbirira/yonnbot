import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import FeedSideBar from './FeedSideBar';
import Footer from '../Common/Footer/Footer';

import './Feed.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div>
          <div className="col-md-2"></div>
          <div className="col-md-7 main-content">
            <Post />
          </div>

          <div className="col-md-3 main-content">
            <FeedSideBar />
          </div>
        </div>

        <Footer />

        {this.props.children}

      </div>
    );
  }
}

export default App;
