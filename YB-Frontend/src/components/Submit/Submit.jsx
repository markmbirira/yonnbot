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
      <div className="main">
       
        <div className="row main-content">
          <div className="col-3 mobile-hidden"></div>
          <div className="col-6">
            <div className="submit-form-container">
              <p className="submit-form-heading">
                <i className="fa fa-plus" aria-hidden="true"></i>
                {' '} add a link post
              </p>

              <form className="submit-form" onSubmit={this._handlePostSubmit}>
                <span className="submit-form-icon-title"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                <input type="text" name="title" ref="title" className="submit-form-input-title" placeholder="enter title here" required /> <br />
                <span className="submit-form-icon-url"><i className="fa fa-link" aria-hidden="true"></i></span>
                <input type="url" name="url" ref="url" className="submit-form-input-url" placeholder="https://example.com/news-item" required /> <br />
                <span className="submit-form-icon-tags"><i className="fa fa-tags" aria-hidden="true"></i></span>
                <input type="text" name="text" ref="tag" className="submit-form-input-tags"  placeholder="enter,tags,here,with,commas" /> 
                <button type="submit" className="submit-form-button">
                  <span>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </span>
                </button>
              </form>

              <div className="home-link-section">
                <Link to="/">Home</Link>
              </div>

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