// import { Comments } from '../actions/actionTypes';

import  { Posts } from '../actions/actionTypes';

const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case Posts.FETCH_SINGLE_POST:
      return "fetch_single_post() loading";

    case Posts.RECEIVE_SINGLE_POST:
      if (action.success) {
        console.log('success fetching single post', action.post);
        return action.post;
      } else {
        return {message: "error fetching single post"};
      }
    default:
      return state;
  }
}

export default posts;