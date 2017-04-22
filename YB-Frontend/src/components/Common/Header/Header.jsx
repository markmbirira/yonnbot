import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this._hideShowNavBarOnScroll = this._hideShowNavBarOnScroll.bind(this);
  }

  componentDidMount() {

    // this._hideShowNavBarOnScroll();
  }

  _hideShowNavBarOnScroll() {
    $(window).scroll(
      {
        previousTop: 0
      }, 
      function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
          // $(".header").show();
          $(".header").stop().animate({"opacity": "1"}, "fast");
        } else {
          // $(".header").hide();
          $(".header").stop().animate({"opacity": "0"}, "slow");
        }
        this.previousTop = currentTop;
      });
  }

  render () {
    return (
      <header className="header col-12">
        <div className="">
          <h1 className="header-logo"><a className="yonnbot-logo" href="/" title="YonnBot">YONNBOT</a></h1> {' '}
          <nav className="header-nav">
            <ul>
              <li className="header_back_button">
                <a href="#"> <i className="fa fa-arrow-left header_back_button_icon" aria-hidden="true"></i> back</a>
              </li>
              <li className="post-submit">
                <Link to="/post/submit" className="post-submit-link">submit <i className="fa fa-external-link post_submit_link_icon" aria-hidden="true"></i> </Link>
              </li>
              <li className="user-dropdown">
                <a href="#" className="user-dropdown-button">
                  <i className="fa fa-user-o header_icon_user" aria-hidden="true"></i> 
                    {' '}
                  <i className="fa fa-bars header_icon_menu" aria-hidden="true"></i> 
                </a>
                <span className="user-dropdown-content">
                  <Link to="/auth/login" className="fade"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                  <Link to="/auth/register" className="fade"><i className="fa fa-user-plus" aria-hidden="true"></i> register</Link>
                  <Link to="#" className="fade"><i className="fa fa-sliders" aria-hidden="true"></i> dashboard</Link>
                  <Link to="#" className="logout-link"><i className="fa fa-times" aria-hidden="true"></i> logout</Link>
                </span>
              </li>
              <li><i className="fa fa-search" aria-hidden="true"></i></li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
      </header>
    );
  }
};
