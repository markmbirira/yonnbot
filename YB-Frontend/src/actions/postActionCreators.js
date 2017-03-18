import { Posts } from './actionTypes'; // post action types/constants

import API from '../api';

let postActionCreators = {
  // Thunk action creators/async dispatches
  fetchAllPosts(page) {
    return (dispatch) => {
      dispatch({ type: Posts.FETCH_ALL_POSTS });
      API.apiPosts.fetchAllPosts(page).then(
        (posts) => dispatch({ type: Posts.RECEIVE_ALL_POSTS, success: true, posts }),
        (error) => dispatch({ type: Posts.RECEIVE_ALL_POSTS, success: false, error })
      );
    };
  },

  fetchSinglePost(postId) {
    return (dispatch) => {
      dispatch({ type: Posts.FETCH_SINGLE_POST });
      API.apiPosts.fetchSinglePost(postId).then(
        (post) => dispatch({ type: Posts.RECEIVE_SINGLE_POST, success: true , post}),
        (error) => dispatch({ type: Posts.RECEIVE_SINGLE_POST, success: false, error })
      );
    }
  },

  sendNewPost(title, url) {
    return (dispatch) => {
      dispatch({ type: Posts.SEND_NEW_POST });
      API.apiPosts.sendNewPost(title, url).then(
        (post) => dispatch({ type: Posts.RECEIVE_NEW_POST, success: true , post}),
        (error) => dispatch({ type: Posts.RECEIVE_NEW_POST, success: false, error })
      );
    }
  },

  // Regular Action Creator
  methodName(params) {
    return {
      type: "ACTION_TYPE",
      payload: "action payload"
    }
  },
};

export default postActionCreators;