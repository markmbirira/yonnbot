import update from 'react-addons-update';

import { Posts } from '../actions/actionTypes';

const initialState = [{
  docs: [],
  page: 0,
  pages: 0,
  limit: 0,
  total: 0,
  submitLoading: false
}];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case Posts.FETCH_ALL_POSTS:
      console.log('fetch_all_posts() loading');
      return state;
    case Posts.RECEIVE_ALL_POSTS:
      if (action.success) {
        console.log('success fetching all posts:',action.posts);
        return action.posts;
      } else {
        console.log('error fetching all posts:',action.error);
        return state;
      }
    
    case Posts.SEND_NEW_POST:
      console.log('send_new_post() loading');
      return state;
    
    case Posts.RECEIVE_NEW_POST:
      if (action.success) {
        console.log('success fetching new post');
        return update(state, { docs: { $unshift: [action.post] }});
      } else {
        console.log('error fetching new post');
        return state;
      }

    default:
      return state;
  }
}

export default posts;