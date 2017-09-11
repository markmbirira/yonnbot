import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import auth from './authReducers';

const rootReducer = combineReducers({
  posts,
  comments,
  auth
});

export default rootReducer;