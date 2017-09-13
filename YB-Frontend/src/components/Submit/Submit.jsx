import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import jquery from 'jquery';


import postActionCreators from  '../../actions/postActionCreators';

import './Submit.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handlePostSubmit = this._handlePostSubmit.bind(this);
  }

  componentDidMount(){
    jquery.noConflict();
    jquery('#submitModal').modal('show'); 
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

          <div className="submit-form-button-container jumbotron">

            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#submitModal">
              <i className="fa fa-link" aria-hidden="true"></i>
              {' '} Click to Paste Link
            </button>
            <div className="pull-right btn">
              <Link to="/">Go Back</Link>
            </div>
            
            {/*-- Modal */}
            <div id="submitModal" className="modal fade" role="dialog">
              <div className="modal-dialog">

                {/* Modal content */}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Paste a link to create a bookmark</h4>
                  </div>
                  <div className="modal-body">
                    <form role="form" onSubmit={this._handleRegister}>
                      <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" ref="title" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">URL</label>
                        <input type="text" className="form-control" ref="url" />
                      </div>
                      <button type="submit" className="btn btn btn-primary">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        {' '} Go!
                      </button>
                      <div className="pull-right btn">
                        <button type="button" className="close" data-dismiss="modal">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          
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