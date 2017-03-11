import React , { Component } from 'react';

export default class HeaderNavBarSearchForm extends  Component {
  render () {
    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Channels and Users" />
        </div>
        {' '} 
        <button type="submit" className="btn btn-default">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}