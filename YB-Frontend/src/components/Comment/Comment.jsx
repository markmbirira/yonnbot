import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';

import Header from '../Common/Header/Header';
import CommentPost from './CommentPost';
import CommentComments from './CommentComments';
import Footer from '../Common/Footer/Footer';

import './Comment.css';


class App extends Component {

  componentDidMount() {
    var postId = this.props.params.postId;
    this.props.fetchSinglePost(postId);
  }

  componentDidUpdate(nextProps) {
    // console.log
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
/*
id={this.props.post.id}
                title={this.props.post.title}
                url={this.props.post.url}
                created={this.props.post.created}
                description={this.props.post.embedly_data.description}
                thumbnail_url={this.props.post.embedly_data.thumbnail_url}
*/

App.propTypes = {
  post: PropTypes.array,
  fetchSinglePost: PropTypes.func
}

const mapStateToProps = (state) => {
  console.log('state is', state.comments);
  return {
    post: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePost: (postId) => {
      dispatch(postActionCreators.fetchSinglePost(postId));
    }
  }
}

const Comment = connect(mapStateToProps, mapDispatchToProps)(App);

export default Comment;