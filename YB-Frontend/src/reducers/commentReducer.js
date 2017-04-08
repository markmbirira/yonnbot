import { Comments } from '../actions/actionTypes';
import { Posts } from '../actions/actionTypes';

import update from 'react-addons-update';

const initialState = {
  post: [],
  comments: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case Posts.FETCH_SINGLE_POST:
      console.log("fetch_single_post() loading");
      return state;

    case Posts.RECEIVE_SINGLE_POST:
      if (action.success) {
        console.log('success fetching single post', action.post);
        return update(state, { post: { $unshift: action.post } });
      } else {
        console.log('error fetching single post', action.error);
        return state;
      }
    
    case Comments.FETCH_ALL_POST_COMMENTS:
      console.log('fetch_all_post_comments() loading...');
      return state;

    case Comments.RECEIVE_ALL_POST_COMMENTS:
      if (action.success) {
        console.log('success fetching all comments for current post');
        return update(state, { comments: { $unshift : action.comments } } );
      } else {
        console.log('error fetching all comments for current post');
        return state;
      }
    
    case Comments.SEND_NEW_COMMENT:
      console.log('send_new_comment() loading');
      return state;
    
    case Comments.RECEIVE_NEW_COMMENT:
      if (action.success) {
        console.log('success fetching new post', action.comment);
        return update(state, { comments: { $unshift: [action.comment] } } );
      } else {
        console.log('error fetching new post');
        return state;
      }

    default:
      return state;
  }
}

export default comments;