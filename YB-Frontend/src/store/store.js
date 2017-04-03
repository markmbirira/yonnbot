import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { Users } from '../actions/actionTypes';

// logging middleware
const logger = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log(" asynchronous dispatch: ", action);
  } else {
    console.log(' synchronous dispatch: ', action);
  }
  return next(action);
}

// localStorage middleware
const localStorageMiddleware = store => next => action => {
  if (action.type === Users.SIGNUP_USER_RESPONSE || action.type === Users.LOGIN_USER_RESPONSE) {
    if (action.success) {
      window.localStorage.setItem('jwt', action.userinfo.token);
    }
  } else if (action.type === Users.LOGOUT_USER_RESPONSE) {
    window.localStorage.setItem('jwt', '');
  }

  next(action);
}


function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, localStorageMiddleware, thunk)
  );
}

const store = configureStore();

export default store;

/*
 * The store is imported and used with Provider 
 * from react-redux as the store prop 
 * use connect on each component render 
 * to access the global state
 */
