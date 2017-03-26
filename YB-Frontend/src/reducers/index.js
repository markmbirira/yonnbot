import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  posts,
  comments,
  user
});

export default rootReducer;