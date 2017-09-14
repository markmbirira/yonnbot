import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import auth from './authReducers';
import toggleDisplay from './toggleDisplayReducers';

const rootReducer = combineReducers({
  posts,
  comments,
  auth,
  toggleDisplay
});

export default rootReducer;