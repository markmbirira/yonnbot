import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';


export default combineReducers({
  registerReducer,
  loginReducer,
});
