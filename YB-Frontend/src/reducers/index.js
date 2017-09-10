import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import user from './userReducer';
import auth from './authReducers';

const rootReducer = combineReducers({
  posts,
  comments,
  user,
  auth
});

export default rootReducer;