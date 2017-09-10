import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import postActionCreators from  '../../actions/postActionCreators';

import './Submit.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handlePostSubmit = this._handlePostSubmit.bind(this);
  }

  _handlePostSubmit(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    let url =  this.refs.url.value;
    let auth_token = window.localStorage.getItem('jwt');

    console.log('new post title is:', title);
    console.log('new post url is:', url);

    if (title.length > 0 && url.length > 0 ) {
      console.log('sending new post');
      this.props.sendNewPost(title, url, auth_token);
    } else {
      console.log('error sending new post');
    }
    this.refs.title.value = '';
    this.refs.url.value = '';
  }

  render () {
    return (
      <div className="container">
        <div className="row">

          <div className="main">

            <form role="form" onSubmit={this._handleRegister}>
              <div className="form-group">
                <label htmlFor="">title</label>
                <input type="text" className="form-control" ref="title" />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" ref="title" />
              </div>
              <button type="submit" className="btn btn btn-primary">
                Submit
              </button>
              <div className="pull-right btn">
                <Link to="/">Cancel</Link>
              </div>
            </form>
          
          </div>
          
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendNewPost: (title, url, auth_token) => {
      dispatch(postActionCreators.sendNewPost(title, url, auth_token));
    }
  }
}

const Submit = connect(mapStateToProps, mapDispatchToProps)(App);

export default Submit;