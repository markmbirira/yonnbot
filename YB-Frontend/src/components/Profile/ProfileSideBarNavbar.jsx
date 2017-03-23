import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ProfileSideBarNavBar extends Component {

  render () {

    return (
      <nav className="">
        <Link to="/profile/social">social</Link>{' '}
        <Link to="/profile/settings">settings</Link>
      </nav> 
    );
  }
}
