import React, { Component } from 'react';
import ProfileSocialItem from './ProfileSocialItem';

import { browserHistory } from 'react-router';

export default class ProfileSocial extends Component {
  constructor(props) {
    super(props);

    let _handleChange = this._handleChange.bind(this);
    let _handleClose = this._handleClose.bind(this);
  }

  _handleChange(field, e){
    // this._handleChange(field, e.target.value);
  }
  
  _handleClose(e){
    e.preventDefault();
    // redirect with react router
    browserHistory.replace('/profile');
  }

  render () {
    return (
      <div className="profile-social">
        <div className="profile-social-social">
          <p>Link and share on your linked social accounts</p>
          <div className="feed-social-item-container row">
            <ProfileSocialItem />
            <ProfileSocialItem />
            <ProfileSocialItem />
            <ProfileSocialItem />
            <ProfileSocialItem />
            <ProfileSocialItem />
          </div>
        </div>
        <div className="profile-social-overlay" onClick={this._handleClose}></div>
      </div>  
    );
  }
}