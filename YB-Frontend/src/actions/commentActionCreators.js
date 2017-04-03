import { Comments } from './actionTypes'; // post action types/constants

import API from '../api';

let commentActionCreators = {
  // Thunk action creators/async dispatches
  fetchAllPostComments(page) {
    return (dispatch) => {
      dispatch({ type: Comments.FETCH_ALL_POST_COMMENTS });
      API.apiComments.fetchAllPostComments(page).then(
        (comments) => dispatch({ type: Comments.RECEIVE_ALL_POSTS, success: true, comments }),
        (error) => dispatch({ type: Comments.RECEIVE_ALL_POSTS, success: false, error })
      );
    };
  },

  fetchSinglePostComment(comment_id) {
    return (dispatch) => {
      dispatch({ type: Comments.FETCH_SINGLE_POST_COMMENT });
      API.apiComments.fetchSinglePostComment(comment_id).then(
        (comment) => dispatch({ type: Comments.RECEIVE_SINGLE_POST, success: true , comment}),
        (error) => dispatch({ type: Comments.RECEIVE_SINGLE_POST, success: false, error })
      );
    }
  },

  sendNewPost(post_id, comment_text, auth_token) {
    return (dispatch) => {
      dispatch({ type: Comments.SEND_NEW_COMMENT });
      API.apiComments.sendNewComment(post_id, comment_text, auth_token).then(
        (comment) => dispatch({ type: Comments.RECEIVE_NEW_COMMENT, success: true , comment}),
        (error) => dispatch({ type: Comments.RECEIVE_NEW_COMMENT, success: false, error })
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

export default commentActionCreators;