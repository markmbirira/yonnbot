import { Login } from '../actions/actionTypes';

initialState = [];

const login = (state = initialState, action) => {
  switch (action.type) {
    case Login.FETCH_ALL_POSTS:
      return [{"loading": true }];
    case Posts.RECEIVE_ALL_POSTS:
      if (action.success) {
        return action.posts;
      } else {
        return [{"message": "Error Fetching Posts"}];
      }
      return action.posts;
    default:
      return state;
  }
}

export default posts;