import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render () {
    return (
      <div className="navbar navbar-default navbar-fixed-bottom">
        <div className="container">
          <p className="navbar-text pull-left"> YonnBot &copy; 2017  All Rights Reserved 
              <a href="#" target="_blank" > T&C</a>
          </p>

          <a href="https://github.com/markmbirira/yonnbot.git" target="blank" className="navbar-btn btn-success btn btn-sm pull-right">
          <span className="glyphicon glyphicon-star"></span> OpenSource</a>
        </div>
      </div>
    );
  }
};
