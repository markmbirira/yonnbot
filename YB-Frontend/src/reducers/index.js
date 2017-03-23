import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import channels from './channelReducer';
import profile from './profileReducer';

const rootReducer = combineReducers({
  posts,
  channels,
  comments,
  profile
});

export default rootReducer;