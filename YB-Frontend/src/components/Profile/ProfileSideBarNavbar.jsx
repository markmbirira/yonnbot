import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ProfileSideBarNavBar extends Component {

  render () {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/profile/social"><span className="glyphicon glyphicon-globe" ></span> Social</Link></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/profile/settings"><span className="glyphicon glyphicon-cog"></span></Link></li>
          </ul>
      
          </div> {/* navbar collapse */}
        </div> {/* container-fluid */}
      </nav> 
    );
  }

}
