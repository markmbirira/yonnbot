import { combineReducers } from 'redux';

import posts from './postReducer';
import comments from './commentReducer';
import channels from './channelReducer';
// import profile from './profileReducer';
// import comments from './loginReducer';
// import channels from './registerReducer';

const rootReducer = combineReducers({
  posts,
  channels,
  comments
});

export default rootReducer;