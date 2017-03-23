import React, { Component } from 'react';

export default class FeedGraph extends Component {
  render() {
    return (
      <div  className="feed-graph">
        <p>YonnBot feed graph</p>
        <div className="feed-graph">
          <img src={"/img/d3.png"} alt="" />
        </div>
      </div>
    );
  }
}