import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// logging middleware
const logger = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log(" asynchronous dispatch: ", action);
  } else {
    console.log(' synchronous dispatch: ', action);
  }
  return next(action);
}


function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
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
