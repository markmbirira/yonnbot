import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from  '../../actions/postActionCreators';

import Header from '../Common/Header/Header';
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
      <div className="main">
        <Header />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="submit-form-container">
              <p className="submit-form-heading">You are adding a new link post</p>
              <form className="submit-form" onSubmit={this._handlePostSubmit}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" ref="title" className="submit-form-title" required /> <br />
                <label htmlFor="url">URL/link</label>
                <input type="url" name="url" ref="url" className="submit-form-url" required /> <br />
                <label htmlFor="tag">tag</label>
                <input type="text" name="text" ref="tag" className="submit-form-tag"  /> 
                <input type="submit" className="" value="Submit"  />
              </form>
            </div>
          </div>
          <div className="col-3"></div>
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