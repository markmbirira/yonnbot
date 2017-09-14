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

  sendNewPost(title, url, auth_token) {
    return (dispatch) => {
      dispatch({ type: Posts.SEND_NEW_POST });
      API.apiPosts.sendNewPost(title, url, auth_token).then(
        (post) => dispatch({ type: Posts.RECEIVE_NEW_POST, success: true , post}),
        (error) => dispatch({ type: Posts.RECEIVE_NEW_POST, success: false, error })
      );
    }
  },

  toggleDisplay(displayState) {
    if (String(displayState) === "grid") {
      return {
        type: Posts.SET_DISPLAY_GRID,
        displayState: "grid"
      }
    } else {
      return {
        type: Posts.SET_DISPLAY_LIST,
        displayState: "list"
      }
    }
  }
};

export default postActionCreators;