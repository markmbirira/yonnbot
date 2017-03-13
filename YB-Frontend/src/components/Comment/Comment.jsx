import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import Header from '../Common/Header/Header';
import CommentPost from './CommentPost';
import CommentComments from './CommentComments';
import Footer from '../Common/Footer/Footer';

import './Comment.css';


class Comment extends Component {
  constructor(props) {
    super(props);

    let _handleChange = this._handleChange.bind(this);
    let _handleClose = this._handleClose.bind(this);

  }

  _handleChange(field, e){
    // this.props.handleChange(field, e.target.value);
  }
  
  _handleClose(e){
    e.preventDefault();
    // redirect with react router
    browserHistory.replace('/');
  }

  render() {
    return (
      <div className="main-app">
        <Header />

        <div className="main-content">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <CommentPost />
              <CommentComments />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Comment;